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
        <div className="flex flex-row gap-[38px] items-center">
          <span className="text-[16px]">Кнопка телефон</span>
          <Plus className="w-[20px] h-[20px]" />
        </div>
        <div className="flex flex-col gap-3">
          <h3>Тип кнопки</h3>
          <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9] flex gap-4 px-2 py-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-[16px] font-normal flex  justify-between w-full"
                >
                  {selectedValue}
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={selectedValue}
                  onValueChange={handleValueChange}
                >
                  <DropdownMenuRadioItem value="Телефон">
                    <div className="flex flex-col">
                      <span>Телефон</span>
                    </div>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Произвольная">
                    Произвольная
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {selectedValue === "Произвольная" && (
          <>
            <h3>Иконка</h3>
            <LoadPic />
            <h3>Подпись</h3>
            <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
              <Input type="text" />
            </div>
          </>
        )}
        {selectedValue === "Телефон" && (
          <>
            <h3>Телефон</h3>
            <div className="flex flex-col gap-1">
              <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9] ">
                <Input type="text" />
              </div>
              <p className="text-[11px]">
                По этому телефону с Вами смогут связаться, нажав данную кнопку и
                перейдя в приложение
              </p>
            </div>
            <h3>Подпись</h3>
            <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
              <Input type="text" />
            </div>
          </>
        )}
        {selectedValue === "Произвольная" && (
          <>
            <h3>Страница перехода</h3>
            <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
              <Input type="text" />
            </div>
          </>
        )}
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
