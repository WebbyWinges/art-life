import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Plus } from "lucide-react";
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
import { debounce } from "lodash";

const FooterSettings: React.FC = () => {
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      removeBottomPanel: false,
      panelColor: "#D9D9D9",
      iconAndTextColor: "#D9D9D9",
      buttons: [
        {
          type: "Телефон",
          label: "",
          phoneNumber: "",
          customAction: "",
          icon: null,
        },
      ],
    },
  });

  const [tabs, setTabs] = useState(watch("buttons"));
  const [activeTab, setActiveTab] = useState(tabs[0]?.label || "");

  useEffect(() => {
    setTabs(watch("buttons"));
  }, [watch("buttons")]);

  const addTab = () => {
    if (tabs.length >= 6) {
      alert("Максимальное количество кнопок 6");
      return;
    }
    const newTab = {
      type: "Телефон",
      label: `Кнопка ${tabs.length + 1}`,
      phoneNumber: "",
      customAction: "",
      icon: null,
    };
    setValue("buttons", [...tabs, newTab]);
    setActiveTab(newTab.label);
  };

  const handleTabNameChange = (index: number, value: string) => {
    const updatedTabs = tabs.map((tab, i) =>
      i === index ? { ...tab, label: value } : tab,
    );
    setValue("buttons", updatedTabs);
  };

  const handleTabValueChange = (index: number, key: string, value: string) => {
    const updatedTabs = tabs.map((tab, i) =>
      i === index ? { ...tab, [key]: value } : tab,
    );
    setValue("buttons", updatedTabs);
  };

  const onSubmit = (data: any) => {
    console.log("Received form data:", data);
  };

  // Предотвращаем отправку формы при нажатии Enter в полях ввода
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <span style={{ fontWeight: 600, fontSize: 30 }}>
        Настройки нижней панели
      </span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 items-center mb-4">
          <Controller
            name="removeBottomPanel"
            control={control}
            render={({ field }) => (
              <Input
                type="checkbox"
                style={{ width: 19, height: 19 }}
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <span style={{ fontWeight: 400, fontSize: 16 }}>
            Убрать нижнюю панель
          </span>
        </div>

        <div className="flex flex-row gap-3 items-center mb-2">
          <span style={{ fontWeight: 400, fontSize: 16 }}>Цвет панели</span>
          <div className="relative">
            <Controller
              name="panelColor"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    type="color"
                    className="rounded-[10px] !bg-transparent p-0 max-w-[119px] appearance-none absolute top-0 left-0 w-full h-full opacity-0"
                    value={field.value}
                    onChange={field.onChange}
                  />
                  <div
                    className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
                    style={{ backgroundColor: field.value }}
                  />
                </>
              )}
            />
          </div>
        </div>

        <div className="flex flex-row gap-3 items-center">
          <span style={{ fontWeight: 400, fontSize: 16 }}>
            Цвет иконок и текста
          </span>
          <div className="relative">
            <Controller
              name="iconAndTextColor"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    type="color"
                    className="rounded-[10px] !bg-transparent p-0 max-w-[119px] appearance-none absolute top-0 left-0 w-full h-full opacity-0"
                    value={field.value}
                    onChange={field.onChange}
                  />
                  <div
                    className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
                    style={{ backgroundColor: field.value }}
                  />
                </>
              )}
            />
          </div>
        </div>

        <span style={{ fontWeight: 600, fontSize: 20 }}>Кнопки</span>
        <div className="flex flex-col gap-4 bg-white rounded-3xl p-6 w-[800px]">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex flex-row gap-[40px] justify-start items-center mb-10">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.label}
                  className="flex-shrink-0"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
              <Plus
                className="w-[20px] h-[20px] cursor-pointer"
                onClick={addTab}
              />
            </TabsList>
            {tabs.map((tab, index) => (
              <TabsContent key={index} value={tab.label}>
                <div className="flex flex-col gap-3">
                  <h3>Название кнопки</h3>
                  <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
                    <Input
                      type="text"
                      value={tab.label}
                      onChange={e => handleTabNameChange(index, e.target.value)}
                      onKeyDown={handleInputKeyDown} // Предотвращаем отправку формы при Enter
                    />
                  </div>

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
                            handleTabValueChange(index, "type", value)
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
                      <LoadPic
                        pictureData={tab.icon}
                        onChange={value =>
                          handleTabValueChange(index, "icon", value)
                        }
                      />
                      <h3>Подпись</h3>
                      <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
                        <Input
                          type="text"
                          value={tab.label}
                          onChange={e =>
                            handleTabValueChange(index, "label", e.target.value)
                          }
                          onKeyDown={handleInputKeyDown} // Предотвращаем отправку формы при Enter
                        />
                      </div>
                      <h3>Страница перехода</h3>
                      <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
                        <Input
                          type="text"
                          value={tab.customAction}
                          onChange={e =>
                            handleTabValueChange(
                              index,
                              "customAction",
                              e.target.value,
                            )
                          }
                          onKeyDown={handleInputKeyDown} // Предотвращаем отправку формы при Enter
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
                            value={tab.phoneNumber}
                            onChange={e =>
                              handleTabValueChange(
                                index,
                                "phoneNumber",
                                e.target.value,
                              )
                            }
                            onKeyDown={handleInputKeyDown} // Предотвращаем отправку формы при Enter
                          />
                        </div>
                        <p className="text-[11px]">
                          По этому телефону с Вами смогут связаться, нажав
                          данную кнопку и перейдя в приложение
                        </p>
                      </div>
                      <h3>Подпись</h3>
                      <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
                        <Input
                          type="text"
                          value={tab.label}
                          onChange={e =>
                            handleTabValueChange(index, "label", e.target.value)
                          }
                          onKeyDown={handleInputKeyDown} // Предотвращаем отправку формы при Enter
                        />
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <Button className="bg-[#10C3EB] w-32 mb-3" type="submit">
          <span style={{ fontWeight: 400, fontSize: 16 }}>Далее</span>
        </Button>
      </form>
    </div>
  );
};

export default FooterSettings;
