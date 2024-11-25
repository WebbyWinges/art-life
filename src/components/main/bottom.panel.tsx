import React, { useState, useRef } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import i1 from "../../assets/Group 32.png";

type ButtonField = {
  id: number;
  type: string;
  value: string;
  icon?: File | null;
};

interface BottomPanelSettingsFormProps {
  onFormSubmit: (formData: { buttons: ButtonField[] }) => void;
}

const BottomPanelSettingsForm: React.FC<BottomPanelSettingsFormProps> = ({ onFormSubmit }) => {
  const [buttons, setButtons] = useState<ButtonField[]>([
    { id: 1, type: "Phone", value: "", icon: null },
  ]);

  const fileInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  const addNewButton = () => {
    setButtons([
      ...buttons,
      { id: buttons.length + 1, type: "Phone", value: "", icon: null },
    ]);
  };

  const handleButtonChange = (id: number, field: string, value: string) => {
    setButtons(
      buttons.map(button =>
        button.id === id ? { ...button, [field]: value } : button,
      ),
    );
  };

  const handleIconChange = (id: number, file: File | null) => {
    setButtons(
      buttons.map(button =>
        button.id === id ? { ...button, icon: file } : button,
      ),
    );
  };

  const handleIconClick = (id: number) => {
    if (fileInputRefs.current[id]) {
      fileInputRefs.current[id]!.click();
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      buttons,
    };
    onFormSubmit(formData); // Call the parent component's callback with the form data
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-5 bg-white flex-col gap-5 rounded-2xl"
    >
      <div className="flex flex-col gap-5">
        <div className="flex gap-1 items-center">
          <h3>Кнопки</h3>
          <Button
            type="button"
            variant={"ghost"}
            className="text-xl"
            onClick={addNewButton}
          >
            +
          </Button>
        </div>

        {buttons.map(button => (
          <div key={button.id} className="button-field">
            <label>
              Тип кнопки
              <Select
                value={button.type}
                onValueChange={value =>
                  handleButtonChange(button.id, "type", value)
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Телефон" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Phone">Телефон</SelectItem>
                    <SelectItem value="Custom">Произвольная</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>

            <label>
              {button.type === "Phone" ? "Телефон" : "Значение"}
              <Input
                type="text"
                value={button.value}
                onChange={e =>
                  handleButtonChange(button.id, "value", e.target.value)
                }
                className="border-20 border-solid border-gray-500"
              />
            </label>

            {button.type === "Custom" && (
              <>
                <div className="flex justify-center items-center w-[150px] h-[150px] border-none outline-none">
                  {button.icon ? (
                    <img
                      src={URL.createObjectURL(button.icon)}
                      alt="Uploaded Icon"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img src={i1} alt="Default Icon" className="w-full h-full object-cover" />
                  )}
                </div>
                <Input
                  type="file"
                  ref={el => (fileInputRefs.current[button.id] = el)}
                  onChange={e =>
                    handleIconChange(
                      button.id,
                      e.target.files ? e.target.files[0] : null,
                    )
                  }
                  accept="image/*"
                  style={{ display: "none" }}
                />
                <Button onClick={() => handleIconClick(button.id)}>
                  Выбрать иконку
                </Button>
              </>
            )}
          </div>
        ))}
      </div>
    </form>
  );
};

export default BottomPanelSettingsForm;
