import { useState } from "react";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { TextBlock } from "@/components/fourStepBlocks/textBlock";
import { PictureBlock } from "@/components/fourStepBlocks/pictureBlock";
import { FormBlock } from "@/components/fourStepBlocks/formBlock";
import { PlitMenu } from "@/components/fourStepBlocks/plitMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Create = () => {
  const [tabs, setTabs] = useState([
    {
      id: 0,
      name: "Основная страница",
      blocks: [{ id: 0, selectedValue: "Текст" }],
    },
  ]);
  const [activeTab, setActiveTab] = useState(tabs[0].name); // Состояние для активного таба

  const handleValueChange = (tabId: number, blockId: number, value: string) => {
    setTabs(prevTabs =>
      prevTabs.map(tab =>
        tab.id === tabId
          ? {
              ...tab,
              blocks: tab.blocks.map(block =>
                block.id === blockId
                  ? { ...block, selectedValue: value }
                  : block,
              ),
            }
          : tab,
      ),
    );
  };

  const handleTabNameChange = (tabId: number, name: string) => {
    setTabs(prevTabs =>
      prevTabs.map(tab => (tab.id === tabId ? { ...tab, name } : tab)),
    );
    // Если изменяется название активного таба, синхронизируем его
    if (tabId === tabs.find(tab => tab.name === activeTab)?.id) {
      setActiveTab(name);
    }
  };

  const addBlock = (tabId: number) => {
    setTabs(prevTabs =>
      prevTabs.map(tab =>
        tab.id === tabId
          ? {
              ...tab,
              blocks: [
                ...tab.blocks,
                { id: tab.blocks.length, selectedValue: "Текст" },
              ],
            }
          : tab,
      ),
    );
  };

  const addTab = () => {
    const newTabId = tabs.length;
    const newTab = {
      id: newTabId,
      name: `Новая страница ${newTabId}`,
      blocks: [{ id: 0, selectedValue: "Текст" }],
    };
    setTabs(prevTabs => [...prevTabs, newTab]);
    setActiveTab(newTab.name); // Устанавливаем новый таб активным
  };

  return (
    <div className="flex flex-col p-6 pb-[50px] gap-5 w-[800px]">
      <span style={{ fontWeight: 600, fontSize: 30 }}>
        Создание структуры и контента
      </span>
      <span style={{ fontWeight: 600, fontSize: 20 }}>Страницы меню</span>
      <div className="flex flex-col gap-5 bg-white rounded-3xl p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex overflow-x-auto overflow-y-hidden gap-[40px] relative justify-start mb-10">
            {tabs.map(tab => (
              <TabsTrigger
                key={tab.id}
                value={tab.name}
                className="flex-shrink-0"
              >
                {tab.name}
              </TabsTrigger>
            ))}
            <Plus className="w-5 h-5 cursor-pointer" onClick={addTab} />
          </TabsList>
          {tabs.map(tab => (
            <TabsContent key={tab.id} value={tab.name}>
              <div className="flex flex-col gap-3 mb-5">
                <span>Название страницы</span>
                <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
                  <Input
                    type="text"
                    value={tab.name}
                    onChange={e => handleTabNameChange(tab.id, e.target.value)}
                  />
                </div>
                <div>
                  <input type="checkbox" />{" "}
                  <span>Показать название страницы в шапке</span>
                </div>
                <div>
                  <input type="checkbox" />{" "}
                  <span>Не показывать страницу в меню</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-medium text-[20px] leading-[24px]">
                  Блоки
                </h2>
                {tab.blocks.map(block => (
                  <div key={block.id} className="flex flex-col gap-4 pl-3">
                    <h3>Тип блока</h3>
                    <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9] flex gap-4 px-4 py-1">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="text-[16px] font-normal flex justify-between w-full"
                          >
                            {block.selectedValue}
                            <ChevronDown />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuSeparator />
                          <DropdownMenuRadioGroup
                            value={block.selectedValue}
                            onValueChange={value =>
                              handleValueChange(tab.id, block.id, value)
                            }
                          >
                            <DropdownMenuRadioItem value="Текст">
                              Текст
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Изображение">
                              Изображение
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Плиточное меню">
                              Плиточное меню
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Форма">
                              Форма
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    {block.selectedValue === "Текст" && <TextBlock />}
                    {block.selectedValue === "Изображение" && <PictureBlock />}
                    {block.selectedValue === "Плиточное меню" && <PlitMenu />}
                    {block.selectedValue === "Форма" && <FormBlock />}
                  </div>
                ))}
                <Button
                  className="w-[180px] bg-[#000000] mb-[50px] mt-[30px] ml-3"
                  onClick={() => addBlock(tab.id)}
                >
                  Добавить блок
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Link to={"/main/5"}>
        <Button className="bg-[#10C3EB] w-32 mb-3">
          <span style={{ fontWeight: 400, fontSize: 16 }}>Далее</span>
        </Button>
      </Link>
    </div>
  );
};
export default Create;
