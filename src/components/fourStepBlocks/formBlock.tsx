import { KeyboardEvent, useRef, useState } from "react";
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

type Field = {
  id: number;
  label: string;
  isEditing: boolean;
  color: string;
};

export const FormBlock = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [headerColor, setHeaderColor] = useState<string>("#D9D9D9");
  const [headerTextColor, setHeaderTextColor] = useState<string>("#D9D9D9");
  const [backgroundColor, setBackgroundColor] = useState<string>("#D9D9D9");
  const [selectedValue, setSelectedValue] = useState("Телефон");

  const [fields, setFields] = useState<Field[]>([
    { id: 1, label: "Имя", isEditing: false, color: "#D9D9D9" },
    { id: 2, label: "Телефон", isEditing: false, color: "#D9D9D9" },
    { id: 3, label: "Email", isEditing: false, color: "#D9D9D9" },
    { id: 4, label: "Комментарий", isEditing: false, color: "#D9D9D9" },
  ]);

  const colorNames = [
    "Цвет наименования полей",
    "Цвет кнопки отправить",
    "Цвет текста кнопки",
  ];

  const handleAddField = () => {
    const newField: Field = {
      id: fields.length + 1,
      label: `Поле ${fields.length + 1}`,
      isEditing: false,
      color: "#D9D9D9",
    };
    setFields([...fields, newField]);
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleValueChange = (value: React.SetStateAction<string>) => {
    setSelectedValue(value);
  };

  const handleEditField = (id: number) => {
    setFields(
      fields.map(field =>
        field.id === id ? { ...field, isEditing: true } : field,
      ),
    );
  };

  const handleSaveField = (id: number, newLabel: string) => {
    setFields(
      fields.map(field =>
        field.id === id
          ? { ...field, label: newLabel, isEditing: false }
          : field,
      ),
    );
  };

  const handleInputChange = (id: number, newLabel: string) => {
    setFields(
      fields.map(field =>
        field.id === id ? { ...field, label: newLabel } : field,
      ),
    );
  };

  const handleKeyPress = (
    e: KeyboardEvent<HTMLInputElement>,
    id: number,
    newLabel: string,
  ) => {
    if (e.key === "Enter") {
      handleSaveField(id, newLabel);
    }
  };

  const handleColorChange = (id: number, newColor: string) => {
    setFields(
      fields.map(field =>
        field.id === id ? { ...field, color: newColor } : field,
      ),
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <h3>Поля</h3>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2 w-full">
          {fields.map((field, index) => (
            <div
              className="flex flex-row gap-3 items-center justify-between"
              key={field.id}
            >
              <div className="flex flex-row gap-2">
                <input className="" type="checkbox" />
                {field.isEditing ? (
                  <input
                    type="text"
                    value={field.label}
                    onChange={e => handleInputChange(field.id, e.target.value)}
                    onBlur={() => handleSaveField(field.id, field.label)}
                    onKeyPress={e => handleKeyPress(e, field.id, field.label)}
                    autoFocus
                  />
                ) : (
                  <span onClick={() => handleEditField(field.id)}>
                    {field.label}
                  </span>
                )}
              </div>
              <div className="flex flex-row gap-3 items-center">
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: 16,
                  }}
                >
                  {index < 3 ? colorNames[index] : "Цвет поля"}
                </span>
                <div className="flex flex-row justify-between w-[130px]">
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
                      value={field.color}
                      onChange={e =>
                        handleColorChange(field.id, e.target.value)
                      }
                    />
                  </div>
                  <div
                    className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
                    style={{
                      backgroundColor: field.color,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          <Button
            className="   w-[176px] bg-[#10C3EB]"
            onClick={handleAddField}
          >
            Добавить поле
          </Button>
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
