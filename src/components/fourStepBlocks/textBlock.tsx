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
      <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9] flex gap-4 px-4 py-3">
        <input
          type="text"
          value={TextData} // Устанавливаем значение из TextData
          onChange={handleChange} // Обработчик изменения текста
          className="flex-1" // Растягиваем input на всю доступную ширину
          placeholder="Введите текст"
        />
      </div>
    </div>
  );
};
