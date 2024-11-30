import { useRef, useState } from "react";
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

import { ChevronDown } from "lucide-react";

export const FormBlock = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [headerColor, setHeaderColor] = useState<string>("#D9D9D9");
  const [headerTextColor, setHeaderTextColor] = useState<string>("#D9D9D9");
  const [backgroundColor, setBackgroundColor] = useState<string>("#D9D9D9");
  const [selectedValue, setSelectedValue] = useState("Телефон");

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleValueChange = (value: React.SetStateAction<string>) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <h3>Поля</h3>
      <div className="flex flex-row gap-[155px]">
        <div className="flex flex-col gap-3">
          <div>
            <input type="checkbox" /> <span>Имя</span>
          </div>
          <div>
            <input type="checkbox" /> <span>Телефон</span>
          </div>
          <div>
            <input type="checkbox" /> <span>Email</span>
          </div>
          <div>
            <input type="checkbox" /> <span>Комментарий</span>
          </div>
          <Button className="   w-full bg-[#10C3EB]" onClick={handleIconClick}>
            Добавить поле
          </Button>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-3 items-center">
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Цвет наименования полей
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
          <div className="flex flex-row gap-6 items-center">
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Цвет кнопки отправить
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
                value={headerTextColor}
                onChange={e => setHeaderTextColor(e.target.value)}
              />
              <div
                className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
                style={{
                  backgroundColor: headerTextColor,
                }}
              />
            </div>
          </div>
          <div className="flex flex-row gap-[58px] items-center">
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Цвет текста кнопки
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
                value={backgroundColor}
                onChange={e => setBackgroundColor(e.target.value)}
              />
              <div
                className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
                style={{
                  backgroundColor: backgroundColor,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <h3>Отправить ответы</h3>
      <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9] flex gap-4 px-4 py-1">
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
                Телефон
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Email">Email</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <span>Номер телефона/Email</span>
      <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
        <Input type="text" />
      </div>
    </div>
  );
};
