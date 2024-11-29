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
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import i1 from "../../assets/image 19.png";

export const PlitMenu = () => {
  const [selectedNumberValue, setSelectedNumberValue] = useState("1");
  const [icons, setIcons] = useState<(File | null)[]>([]);
  const [headerColor, setHeaderColor] = useState<string>("#D9D9D9");
  const fileInputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    // Очищаем ссылки на инпуты при изменении количества плиток
    fileInputRefs.current = fileInputRefs.current.slice(0, icons.length);
  }, [icons]);

  const handleNumberValueChange = (value: React.SetStateAction<string>) => {
    setSelectedNumberValue(value);
  };

  const handleAddTile = () => {
    setIcons([...icons, null]); // Добавляем новую плитку с null изображением
  };

  const handleIconChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.target.files && e.target.files[0]) {
      const newIcons = [...icons];
      newIcons[index] = e.target.files[0];
      setIcons(newIcons);
    }
  };

  const handleIconClick = (index: number) => {
    fileInputRefs.current[index]?.click();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <span className="">Количество плиток в строке</span>
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
          <div key={index} className="flex flex-col gap-4 w-[210px]">
            <span>Изображение</span>
            <div className="relative max-w-[150px] rounded-[10px] border-[2px] border-b-[#d9d9d900] border-[#D9D9D9]">
              <div className="flex justify-center items-center w-[150px] h-[150px] border-none outline-none">
                {icon ? (
                  <div className="pr-[4px] pb-[20px] rounded-[10px]">
                    <img
                      className="max-h-[130px]"
                      src={URL.createObjectURL(icon)}
                      alt="Uploaded Icon"
                    />
                  </div>
                ) : (
                  <div className="p-[24px] pb-[44px]">
                    <img src={i1} alt="Default Icon" />
                  </div>
                )}
              </div>
              <Input
                className="hidden"
                type="file"
                ref={el => (fileInputRefs.current[index] = el)}
                onChange={e => handleIconChange(e, index)}
                accept="image/*"
              />
              <Button
                className="absolute bottom-[-10px] w-full bg-[#10C3EB]"
                onClick={() => handleIconClick(index)}
              >
                Загрузить
              </Button>
            </div>
            <span>Подпись</span>
            <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
              <Input type="text" />
            </div>
            <span>Переход при нажатии</span>
            <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
              <Input type="text" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Button className="w-[215px] bg-[#10C3EB]" onClick={handleAddTile}>
          Добавить плитку
        </Button>
      </div>
    </div>
  );
};
