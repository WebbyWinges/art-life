import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface LoadPicProps {
  pictureData: {
    image?: File | null; // Текущее изображение
    defaultImage?: string; // URL изображения по умолчанию
  };
  onChange: (data: { image: File | null }) => void; // Функция для обновления данных
}

export const LoadPic: React.FC<LoadPicProps> = ({ pictureData, onChange }) => {
  const [icon, setIcon] = useState<File | null>(pictureData.image || null);
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
      onChange({ image: file }); // Передаем новое изображение
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setIcon(null);
    onChange({ image: null }); // Удаляем изображение
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
        <X
          className="absolute top-[0px] right-[0px] cursor-pointer"
          onClick={removeImage}
        />
      )}
    </div>
  );
};
