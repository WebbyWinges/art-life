import React from "react";

interface TextBlockProps {
  TextData: string; // Текстовые данные (строка)
  onChange: (value: string) => void; // Функция для обновления данных
}

export const TextBlock: React.FC<TextBlockProps> = ({ TextData, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value); // Передаем значение текста в функцию onChange
  };

  return (
    <div className="">
      <h3>Наполнение</h3>
      <div className="!w-full !ring-1 !ring-[#D9D9D9] !rounded-[10px] !px-4 !py-3">
        <input
          type="text"
          value={TextData} // Устанавливаем значение из TextData
          onChange={handleChange} // Обработчик изменения текста
          className="flex-1 !w-full !ring-1 !ring-[#D9D9D9] !rounded-[10px] !px-4 !py-3" // Растягиваем input на всю доступную ширину
          placeholder="Введите текст"
        />
      </div>
    </div>
  );
};
