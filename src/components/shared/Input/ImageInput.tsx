import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export const ImageInput = ({
  icon,
  onIconChange,
  defaultImage = "Нет изображения",
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onIconChange(e.target.files[0]);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    onIconChange(null);
  };

  return (
    <div className="relative max-w-[150px] rounded-[10px] border-[2px] border-[#D9D9D9]">
      <div className="flex justify-center items-center w-[150px] h-[150px]">
        {icon ? (
          <img
            className="max-h-[130px] rounded-[10px]"
            src={typeof icon === "string" ? icon : URL.createObjectURL(icon)}
            alt="Uploaded Icon"
          />
        ) : (
          <div className="flex items-center justify-center text-gray-500">
            {defaultImage}
          </div>
        )}
      </div>
      <Input
        className="hidden"
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
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
          onClick={handleRemoveImage}
        />
      )}
    </div>
  );
};
