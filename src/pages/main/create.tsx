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

const Create = () => {
  const [blocks, setBlocks] = useState([{ id: 0, selectedValue: "Текст" }]);

  const handleValueChange = (id: number, value: string) => {
    setBlocks(prevBlocks =>
      prevBlocks.map(block =>
        block.id === id ? { ...block, selectedValue: value } : block,
      ),
    );
  };

  const addBlock = () => {
    setBlocks(prevBlocks => [
      ...prevBlocks,
      { id: prevBlocks.length, selectedValue: "Текст" },
    ]);
  };

  return (
    <div className="flex flex-col p-6 pb-[50px] gap-5 w-[800px]">
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
          {blocks.map(block => (
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
                        handleValueChange(block.id, value)
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
            onClick={addBlock}
          >
            Добавить блок
          </Button>
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
