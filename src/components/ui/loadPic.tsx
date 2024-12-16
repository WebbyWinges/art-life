import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LoadPic = ({ pictureData, onChange }) => {
  const [icon, setIcon] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        alert("Файл слишком большой. Максимальный размер — 2MB.");
        return;
      }
      if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
        alert("Допустимы только изображения форматов JPEG, PNG и GIF.");
        return;
      }
      setIcon(file);
      onChange({ ...pictureData, image: file });
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setIcon(null);
    onChange({ ...pictureData, image: null });
  };

  useEffect(() => {
    return () => {
      if (icon) {
        URL.revokeObjectURL(URL.createObjectURL(icon));
      }
    };
  }, [icon]);

  return (
    <div className="relative max-w-[150px] rounded-[10px] border-[2px] border-[#D9D9D9]">
      <div className="flex justify-center items-center w-[150px] h-[150px]">
        {icon ? (
          <img
            className="max-h-[130px] rounded-[10px]"
            src={URL.createObjectURL(icon)}
            alt="Uploaded Icon"
          />
        ) : pictureData?.defaultImage ? (
          <img src={pictureData.defaultImage} alt="Default Icon" />
        ) : (
          <div className="flex items-center justify-center text-gray-500">
            Нет изображения
          </div>
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
      {icon && (
        <Button
          className="absolute top-[-10px] right-[-10px] bg-red-500"
          onClick={removeImage}
        >
          Удалить
        </Button>
      )}
    </div>
  );
};
