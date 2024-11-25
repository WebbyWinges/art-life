import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

const Create = () => {
  const [blockType, setBlockType] = useState<string | undefined>(undefined);

  return (
    <div className="flex flex-col gap-5">
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

      <div className="flex flex-col gap-5">
        <span>Название страницы</span>
        <Input type="text" />

        <div>
          <input type="checkbox" /> <span>Показать название страницы в шапке</span>
        </div>
        <div>
          <input type="checkbox" /> <span>Не показывать страницу в меню</span>
        </div>

        <div className="flex flex-col">
          <h2>Блоки</h2>

          <span>Тип блока</span>

          <Select onValueChange={(value) => setBlockType(value)}>
            <SelectTrigger className="w-[180px] bg-white rounded-lg p-3">
              <SelectValue placeholder="Выберите тип блока" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Phone">Телефон</SelectItem>
                <SelectItem value="Image">Изображение</SelectItem>
                <SelectItem value="Movie">Видео</SelectItem>
                <SelectItem value="BlockMenu">Плиточное меню</SelectItem>
                <SelectItem value="Form">Форма</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {blockType === "Image" && (<div className="flex flex-col">
            <span>Изображение</span>
            <span>Наполнение</span>
            <input type="image" width={100}/>
          </div>)}

          {blockType === "Form" && (<div className="flex flex-col">
            <span>Форма</span>
            <span>Поля</span>
            <div>
                <input type="checkbox" /> <label>Имя</label>
            </div>
            <div>
                <input type="checkbox" /> <label>Телефон</label>
            </div>
            <div>
                <input type="checkbox" /> <label>Email</label>
            </div>
            <div>
                <input type="checkbox" /> <label>Комментарий</label>
            </div>
          </div>)}

          {blockType === "BlockMenu" && (<div>
            BlockMenu
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Create;
