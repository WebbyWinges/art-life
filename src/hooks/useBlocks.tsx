import { Block, Tab } from "./useTabs";

function deepCopy<T>(obj: T): T {
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

export function useBlocks() {
  const addBlock = (
    tabId: number,
    tabs: Tab[],
    setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,
  ) => {
    const newBlock: Block = {
      id: tabs[tabId].blocks.length,
      selectedValue: "Текст",
    };

    // Глубокая копия состояния
    const newTabs = deepCopy(tabs);

    // Добавление нового блока
    newTabs[tabId].blocks.push(newBlock);

    // Обновление состояния
    setTabs(newTabs);
  };

  const updateBlockValue = (
    tabId: number,
    blockId: number,
    field: string, // Поле, которое нужно обновить (например, "fields.image")
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
      if (field === "selectedValue") {
        blockToUpdate.selectedValue = value; // Обновляем selectedValue
      } else if (field.startsWith("fields.")) {
        // Если поле начинается с "fields.", обрабатываем вложенное поле
        const fieldPath = field.split("."); // Разбиваем путь на массив ключей
        let current = blockToUpdate.fields || {}; // Начинаем с поля fields

        // Проходим по всем ключам, кроме последнего
        for (let i = 1; i < fieldPath.length - 1; i++) {
          if (!current[fieldPath[i]]) {
            current[fieldPath[i]] = {}; // Если ключа нет, создаем его
          }
          current = current[fieldPath[i]];
        }

        // Обновляем последний ключ
        current[fieldPath[fieldPath.length - 1]] = value;
      } else {
        // Обновляем другие поля, если они есть
        blockToUpdate[field] = value;
      }
    }

    // Обновляем состояние
    setTabs(newTabs);
  };

  return { addBlock, updateBlockValue };
}
