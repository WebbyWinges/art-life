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
import React from "react";
import { ChevronDown, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { TextBlock } from "@/components/fourStepBlocks/textBlock";
import { PictureBlock } from "@/components/fourStepBlocks/pictureBlock";
import { FormBlock } from "@/components/fourStepBlocks/formBlock";
import { PlitMenu } from "@/components/fourStepBlocks/plitMenu";

const Create = () => {
  const [selectedValue, setSelectedValue] = useState("Текст");
  const handleValueChange = (value: React.SetStateAction<string>) => {
    setSelectedValue(value);
  };

  return (
    <div className="  flex flex-col p-6 gap-5 w-[800px]">
      <span
        style={{
          fontWeight: 600,
          fontSize: 30,
        }}
      >
        Создание структуры и контента
      </span>
      <span
        style={{
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        Страницы меню
      </span>
      <div className="flex flex-col gap-5 bg-white rounded-3xl p-6">
        <div className="flex gap-[32px]">
          <span>Основная страница</span>
          <span>Новая страница</span>
          <Plus className="w-5 h-5" />
        </div>
        <span>Название страницы</span>
        <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
          <Input type="text" />
        </div>
        <div>
          <input type="checkbox" />{" "}
          <span>Показать название страницы в шапке</span>
        </div>
        <div>
          <input type="checkbox" /> <span>Не показывать страницу в меню</span>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-medium text-[20px] leading-[24px]">Блоки</h2>
          <div className="flex flex-col gap-4 pl-3">
            <h3>Тип блока</h3>
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
            {selectedValue === "Текст" && <TextBlock />}
            {selectedValue === "Изображение" && <PictureBlock />}

            {selectedValue === "Плиточное меню" && <PlitMenu />}
            {selectedValue === "Форма" && <FormBlock />}
          </div>
        </div>
      </div>
      <Link to={"/main/5"}>
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

export default Create;
