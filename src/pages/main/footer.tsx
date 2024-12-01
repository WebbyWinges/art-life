import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Plus, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoadPic } from "@/components/ui/loadPic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ButtonField = {
  id: number;
  type: string;
  value: string;
  icon?: File | null;
};

const FooterSettings: React.FC = () => {
  const [removeBottomPanel, setRemoveBottomPanel] = useState(false);
  const [panelColor, setPanelColor] = useState<string>("#D9D9D9");
  const [headerColor, setHeaderColor] = useState<string>("#D9D9D9");
  const [selectedValue, setSelectedValue] = useState("Телефон");
  const [tabs, setTabs] = useState([
    {
      id: 0,
      name: "Кнопка 1",
      type: "Телефон",
      icon: null,
      label: "",
      phone: "",
      pageLink: "",
    },
  ]);

  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const addTab = () => {
    if (tabs.length >= 6) {
      alert("Максимальное количество кнопок 6");
      return;
    }
    const newTabId = tabs.length;
    const newTab = {
      id: newTabId,
      name: `Кнопка ${newTabId + 1}`,
      type: "Телефон",
      icon: null,
      label: "",
      phone: "",
      pageLink: "",
    };
    setTabs(prevTabs => [...prevTabs, newTab]);
    setActiveTab(newTab.name);
  };

  const handleTabNameChange = (tabId: number, name: string) => {
    setTabs(prevTabs =>
      prevTabs.map(tab => (tab.id === tabId ? { ...tab, name } : tab)),
    );

    // Обновление активного таба, если он совпадает
    if (tabId === tabs.find(tab => tab.name === activeTab)?.id) {
      setActiveTab(name); // Здесь также используется строка
    }
  };

  const handleTabValueChange = (tabId: number, key: string, value: string) => {
    setTabs(prevTabs =>
      prevTabs.map(tab => (tab.id === tabId ? { ...tab, [key]: value } : tab)),
    );
  };

  const handleFormSubmit = (formData: { buttons: ButtonField[] }) => {
    const fullFormData = {
      removeBottomPanel,
      panelColor,

      buttons: formData.buttons,
    };
    console.log("Received form data:", fullFormData);
  };

  const handleValueChange = (value: React.SetStateAction<string>) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex flex-col gap-5">
      <span
        style={{
          fontWeight: 600,
          fontSize: 30,
        }}
      >
        Настройки нижней панели
      </span>

      <div className="flex gap-3 items-center">
        <Input
          type="checkbox"
          style={{
            width: 19,
            height: 19,
          }}
          checked={removeBottomPanel}
          onChange={e => setRemoveBottomPanel(e.target.checked)}
        />
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Убрать нижнюю панель
        </span>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Цвет панели
        </span>
        <div className="relative">
          <input
            type="color"
            className="rounded-[10px] !bg-transparent p-0 max-w-[119px] appearance-none absolute top-0 left-0 w-full h-full opacity-0"
            style={{
              width: "119px",
              height: "44px",
              border: "none",
              outline: "none",
              padding: "0",
              backgroundColor: "transparent",
            }}
            value={headerColor}
            onChange={e => setHeaderColor(e.target.value)}
          />
          <div
            className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
            style={{
              backgroundColor: headerColor,
            }}
          />
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Цвет иконок и текста
        </span>
        <div className="relative">
          <input
            type="color"
            className="rounded-[10px] !bg-transparent p-0 max-w-[119px] appearance-none absolute top-0 left-0 w-full h-full opacity-0"
            style={{
              width: "119px",
              height: "44px",
              border: "none",
              outline: "none",
              padding: "0",
              backgroundColor: "transparent",
            }}
            value={panelColor}
            onChange={e => setPanelColor(e.target.value)}
          />
          <div
            className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
            style={{
              backgroundColor: panelColor,
            }}
          />
        </div>
      </div>

      <span
        style={{
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        Кнопки
      </span>
      <div className="flex flex-col gap-4 bg-white rounded-3xl p-6 w-[800px]">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex flex-row gap-[40px] justify-start items-center mb-10">
            {tabs.map(tab => (
              <TabsTrigger
                key={tab.id}
                value={tab.name}
                className="flex-shrink-0"
              >
                {tab.name}
              </TabsTrigger>
            ))}
            <Plus
              className="w-[20px] h-[20px] cursor-pointer"
              onClick={addTab}
            />
          </TabsList>
          {tabs.map(tab => (
            <TabsContent key={tab.id} value={tab.name}>
              <div className="flex flex-col gap-3">
                <h3>Название кнопки</h3>
                <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
                  <Input
                    type="text"
                    value={tab.name}
                    onChange={e => handleTabNameChange(tab.id, e.target.value)}
                  />
                </div>
                <h3>Тип кнопки</h3>
                <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9] flex gap-4 px-2 py-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-[16px] font-normal flex justify-between w-full p-1"
                      >
                        {tab.type}
                        <ChevronDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={tab.type}
                        onValueChange={value =>
                          handleTabValueChange(tab.id, "type", value)
                        }
                      >
                        <DropdownMenuRadioItem value="Телефон">
                          Телефон
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Произвольная">
                          Произвольная
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {tab.type === "Произвольная" && (
                  <>
                    <h3>Иконка</h3>
                    <LoadPic />
                    <h3>Подпись</h3>
                    <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
                      <Input
                        type="text"
                        value={tab.label}
                        onChange={e =>
                          handleTabValueChange(tab.id, "label", e.target.value)
                        }
                      />
                    </div>
                    <h3>Страница перехода</h3>
                    <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
                      <Input
                        type="text"
                        value={tab.pageLink}
                        onChange={e =>
                          handleTabValueChange(
                            tab.id,
                            "pageLink",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                  </>
                )}
                {tab.type === "Телефон" && (
                  <>
                    <h3>Телефон</h3>
                    <div className="flex flex-col gap-1">
                      <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
                        <Input
                          type="text"
                          value={tab.phone}
                          onChange={e =>
                            handleTabValueChange(
                              tab.id,
                              "phone",
                              e.target.value,
                            )
                          }
                        />
                      </div>
                      <p className="text-[11px]">
                        По этому телефону с Вами смогут связаться, нажав данную
                        кнопку и перейдя в приложение
                      </p>
                    </div>
                    <h3>Подпись</h3>
                    <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
                      <Input
                        type="text"
                        value={tab.label}
                        onChange={e =>
                          handleTabValueChange(tab.id, "label", e.target.value)
                        }
                      />
                    </div>
                  </>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Link to={"/main/6"}>
        <Button className="bg-[#10C3EB] w-32 mb-3">
          <span
            style={{
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            Далее
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default FooterSettings;
