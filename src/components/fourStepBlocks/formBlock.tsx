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

  return (
    <div className="flex flex-col gap-4">
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
              <input
                type="color"
                value={field.color}
                onChange={e =>
                  setFields(
                    fields.map(f =>
                      f.id === field.id ? { ...f, color: e.target.value } : f,
                    ),
                  )
                }
              />
            </div>
          ))}
        <Button onClick={handleAddField}>Добавить поле</Button>
      </div>
      <div>
        <h4>Настройки отправки</h4>
        <select
          value={selectedValue}
          onChange={e =>
            setSelectedValue(e.target.value as "Телефон" | "Email")
          }
        >
          <option value="Телефон">Телефон</option>
          <option value="Email">Email</option>
        </select>
        <Input
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
