import React, { useState, useEffect, KeyboardEvent, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Field = {
  id: number;
  label: string;
  isEditing: boolean;
  color: string;
};

type FormBlockProps = {
  FormData?: Field[];
  onChange: (data: any) => void;
};

export const FormBlock: React.FC<FormBlockProps> = ({
  FormData = [],
  onChange,
}) => {
  const [fields, setFields] = useState<Field[]>(
    Array.isArray(FormData) ? FormData : [],
  );
  const [headerColor, setHeaderColor] = useState<string>("#D9D9D9");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [selectedValue, setSelectedValue] = useState<"Телефон" | "Email">(
    "Телефон",
  );

  useEffect(() => {
    onChange({
      fields,
      headerColor,
      emailOrPhone,
      selectedValue,
    });
  }, [fields, headerColor, emailOrPhone, selectedValue]);

  const handleAddField = () => {
    const newField: Field = {
      id: fields.length + 1,
      label: `Поле ${fields.length + 1}`,
      isEditing: false,
      color: "#D9D9D9",
    };
    setFields([...fields, newField]);
  };

  const handleInputChange = (id: number, newLabel: string) => {
    setFields(
      fields.map(field =>
        field.id === id ? { ...field, label: newLabel } : field,
      ),
    );
  };

  const handleSaveField = (id: number) => {
    setFields(
      fields.map(field =>
        field.id === id ? { ...field, isEditing: false } : field,
      ),
    );
  };

  const handleKeyPress = (
    e: KeyboardEvent<HTMLInputElement>,
    id: number,
    newLabel: string,
  ) => {
    if (e.key === "Enter") {
      handleSaveField(id);
    }
  };

  const handleColorChange = (id: number, newColor: string) => {
    setFields(
      fields.map(field =>
        field.id === id ? { ...field, color: newColor } : field,
      ),
    );
  };

  const handleSetHeaderColor = (newColor: string) => {
    setHeaderColor(newColor); // Устанавливаем цвет заголовка
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h3>Настройка формы</h3>
      <div className="flex flex-col gap-3">
        {Array.isArray(fields) &&
          fields.map(field => (
            <div key={field.id} className="flex justify-between items-center">
              {field.isEditing ? (
                <input
                  type="text"
                  value={field.label}
                  onChange={e => handleInputChange(field.id, e.target.value)}
                  onBlur={() => handleSaveField(field.id)}
                  onKeyPress={e => handleKeyPress(e, field.id, field.label)}
                  autoFocus
                />
              ) : (
                <span
                  onClick={() =>
                    setFields(
                      fields.map(f =>
                        f.id === field.id ? { ...f, isEditing: true } : f,
                      ),
                    )
                  }
                >
                  {field.label}
                </span>
              )}
              <div className="relative">
                <input
                  className="absolute top-0 left-0 w-full h-full opacity-0"
                  type="color"
                  value={field.color}
                  onChange={e => handleColorChange(field.id, e.target.value)} // Используем отдельный обработчик для цвета
                />
                <div
                  className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
                  style={{ backgroundColor: field.color }} // Убедитесь, что используется field.color\
                  onClick={() => handleSetHeaderColor(field.color)}
                />
              </div>
            </div>
          ))}
        <Button className="max-w-[200px] w-full" onClick={handleAddField}>
          Добавить поле
        </Button>
      </div>
      <div className="flex flex-col gap-3 mb-6">
        <h4>Отправить ответы</h4>
        <select
          value={selectedValue}
          className="w-full border border-[#D9D9D9] rounded-[10px] px-4 py-3"
          onChange={e =>
            setSelectedValue(e.target.value as "Телефон" | "Email")
          }
        >
          <option value="Телефон">Телефон</option>
          <option value="Email">Email</option>
        </select>
        <Input
          className="w-full !ring-1 !ring-[#D9D9D9] !rounded-[10px] !px-4 !py-3"
          type="text"
          value={emailOrPhone}
          placeholder={
            selectedValue === "Телефон"
              ? "Введите номер телефона"
              : "Введите email"
          }
          onChange={e => setEmailOrPhone(e.target.value)}
        />
      </div>
    </div>
  );
};
