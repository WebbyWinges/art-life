import { useRef, useState } from "react";
import i1 from "../../assets/image 19.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LoadPic = ({ pictureData, onChange }) => {
  const [icon, setIcon] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIcon(file);

      // Вызываем onChange с новыми данными
      onChange({
        ...pictureData,
        image: file, // Сохраняем файл в данных
      });
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative max-w-[150px] rounded-[10px] border-[2px] border-[#D9D9D9]">
      <div className="flex justify-center items-center w-[150px] h-[150px]">
        {icon ? (
          <img
            className="max-h-[130px] rounded-[10px]"
            src={URL.createObjectURL(icon)}
            alt="Uploaded Icon"
          />
        ) : (
          <img src={pictureData?.defaultImage || i1} alt="Default Icon" />
        )}
      </div>
      <Input
        className="hidden"
        type="file"
        ref={fileInputRef}
        onChange={handleIconChange}
        accept="image/*"
      />
      <Button
        className="absolute bottom-[-10px] w-full bg-[#10C3EB]"
        onClick={handleIconClick}
      >
        Загрузить
      </Button>
    </div>
  );
};
