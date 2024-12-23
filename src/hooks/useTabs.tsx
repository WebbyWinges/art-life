import { useState } from "react";

export interface Block {
  id: number;
  selectedValue: string;
  fields?: any; // Динамические поля
}

export interface Tab {
  id: number;
  name: string;
  showTitle: boolean;
  showInMenu: boolean;
  blocks: Block[];
}

function updateNestedValue(obj: any, path: string, value: any) {
  const keys = path.split("."); // Разбиваем путь на массив ключей
  let current = obj;

  // Проходим по каждому ключу, кроме последнего
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {}; // Если ключа нет, создаем его
    }
    current = current[keys[i]];
  }

  // Обновляем значение последнего ключа
  current[keys[keys.length - 1]] = value;
}

export function deepCopy<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item)) as any;
  }

  const newObj: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepCopy(obj[key]);
    }
  }

  return newObj;
}

export function useTabs() {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: 0,
      name: "Основная страница",
      showTitle: false,
      showInMenu: false,
      blocks: [],
    },
  ]);

  const addTab = () => {
    const newTabId = tabs.length;
    const newTab: Tab = {
      id: newTabId,
      name: `Новая страница ${newTabId}`,
      showTitle: false,
      showInMenu: false,
      blocks: [{ id: 0, selectedValue: "Текст" }],
    };
    setTabs([...tabs, newTab]);
  };

  const updateTabName = (tabId: number, newName: string) => {
    const newTabs = deepCopy(tabs); // Глубокая копия
    const tabToUpdate = newTabs.find(tab => tab.id === tabId);
    if (tabToUpdate) {
      tabToUpdate.name = newName;
      setTabs(newTabs);
    }
  };

  const addBlock = (tabId: number, block: Block) => {
    const newTabs = deepCopy(tabs); // Глубокая копия
    const tabToUpdate = newTabs.find(tab => tab.id === tabId);
    if (tabToUpdate) {
      // Устанавливаем уникальный ID для нового блока
      const newBlockId = tabToUpdate.blocks.length;
      const newBlock: Block = {
        id: newBlockId,
        selectedValue: block.selectedValue,
        fields: block.fields || {}, // Динамические поля
      };
      tabToUpdate.blocks.push(newBlock);
      setTabs(newTabs);
    }
  };
  const updateBlockValue = (
    tabId: number,
    blockId: number,
    field: string, // Путь к полю (например, "fields.image")
    value: any, // Новое значение
    tabs: Tab[],
    setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,
  ) => {
    const newTabs = deepCopy(tabs); // Глубокая копия состояния

    // Находим блок, который нужно обновить
    const blockToUpdate = newTabs[tabId].blocks.find(
      block => block.id === blockId,
    );
    if (blockToUpdate) {
      updateNestedValue(blockToUpdate, field, value); // Рекурсивно обновляем поле
    }

    // Обновляем состояние
    setTabs(newTabs);
  };

  return { tabs, setTabs, addTab, updateTabName, addBlock, updateBlockValue };
}
