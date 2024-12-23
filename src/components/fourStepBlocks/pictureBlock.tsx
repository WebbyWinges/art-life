import React, { useEffect, useRef, useState } from "react";
import { LoadPic } from "../ui/loadPic";

interface PictureBlockProps {
  PictureData: {
    image?: File | null; // Текущее изображение
    defaultImage?: string; // URL изображения по умолчанию
  };
  onChange: (data: { image: File | null }) => void; // Функция для обновления данных
}

export const PictureBlock: React.FC<PictureBlockProps> = ({
  PictureData,
  onChange,
}) => {
  const [image, setImage] = useState<File | null>(PictureData.image || null);

  // Обновляем состояние при изменении данных
  useEffect(() => {
    onChange({ image });
  }, [image, onChange]);

  return (
    <div className="flex flex-col gap-4">
      <h3>Наполнение</h3>
      <LoadPic
        pictureData={{
          image,
          defaultImage: PictureData.defaultImage || undefined,
        }}
        onChange={data => setImage(data.image)} // Обновляем состояние изображения
      />
    </div>
  );
};
