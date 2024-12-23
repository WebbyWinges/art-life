import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageInput } from "../shared/Input/ImageInput";

export const PlitMenu = ({ PlitData, onChange }) => {
  const [selectedNumberValue, setSelectedNumberValue] = useState(
    PlitData.selectedNumberValue || "1",
  );
  const [icons, setIcons] = useState(PlitData.icons || []);
  const [headerColor, setHeaderColor] = useState(
    PlitData.headerColor || "#D9D9D9",
  );

  useEffect(() => {
    // Обновляем состояние формы при изменении данных
    onChange({
      ...PlitData,
      selectedNumberValue,
      icons,
      headerColor,
    });
  }, [selectedNumberValue, icons, headerColor]);

  const handleNumberValueChange = value => {
    setSelectedNumberValue(value);
  };

  const handleAddTile = () => {
    const updatedIcons = [...icons, null]; // Добавляем новую плитку с null изображением
    setIcons(updatedIcons);
  };

  const handleIconChange = (file, index) => {
    const updatedIcons = [...icons];
    updatedIcons[index] = file;
    setIcons(updatedIcons);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-[90px]">
        <div className="flex flex-row items-center gap-4">
          <span>Количество плиток в строке</span>
          <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9] flex gap-4 px-4 py-1 w-[80px]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-[16px] font-normal flex justify-between w-full"
                >
                  {selectedNumberValue}
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={selectedNumberValue}
                  onValueChange={handleNumberValueChange}
                >
                  <DropdownMenuRadioItem value="1">1</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="2">2</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="3">3</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="flex flex-row gap-3 items-center">
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Цвет подписи
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
      <h3>Наполнение</h3>
      <div className="flex flex-wrap gap-4">
        {icons.map((icon, index) => (
          <ImageInput
            key={index}
            icon={icon}
            onIconChange={file => handleIconChange(file, index)}
            defaultImage="Нет изображения"
          />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Button
          disabled={icons.length >= 9}
          className="w-[215px] bg-[#10C3EB]"
          onClick={handleAddTile}
        >
          Добавить плитку
        </Button>
      </div>
    </div>
  );
};
