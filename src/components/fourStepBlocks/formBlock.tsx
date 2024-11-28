import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import i1 from "../../assets/image 19.png";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

export const FormBlock = () => {
  const [icon, setIcon] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [headerColor, setHeaderColor] = useState<string>("#D9D9D9");
  const [selectedValue, setSelectedValue] = useState("Текст");

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIcon(e.target.files[0]);
    }
  };

  const handleValueChange = (value: React.SetStateAction<string>) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <h3>Поля</h3>
      <div className="flex flex-row gap-[130px]">
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
          <div className="flex flex-row gap-[56px] items-center">
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
        </div>
      </div>
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
              <DropdownMenuRadioItem value="Email">Email</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Телефон">
                Телефон
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <span>Номер телефона/Email</span>
      <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9] mb-[50px]">
        <Input type="text" />
      </div>
    </div>
  );
};
