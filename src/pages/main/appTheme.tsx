import { Input } from "@/components/ui/input";
import i1 from "../../assets/Group 32.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const AppTheme = () => {
  const [headerColor, setHeaderColor] = useState<string>("");
  const [headerTextColor, setHeaderTextColor] = useState<string>("");
  const [hideHeader, setHideHeader] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null);
  const [addSearch, setAddSearch] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBackgroundImage(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5">
      <span
        style={{
          fontWeight: 600,
          fontSize: 30,
        }}
      >
        Настройки внешнего вида
      </span>
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Цвет шапки
      </span>
      <Input 
        type="color" 
        className="p-0 rounded-none"
        value={headerColor} 
        onChange={(e) => setHeaderColor(e.target.value)} 
      />
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Цвет текста в шапке
      </span>
      <Input 
        type="color" 
        className="p-0 rounded-none"
        value={headerTextColor} 
        onChange={(e) => setHeaderTextColor(e.target.value)} 
      />
      <div className="flex gap-3 items-center">
        <Input
          type="checkbox"
          checked={hideHeader}
          onChange={(e) => setHideHeader(e.target.checked)}
          style={{
            width: 19,
            height: 19,
          }}
        />
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Убрать шапку
        </span>
      </div>
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Цвет фона приложения
      </span>
      <Input 
        type="color" 
        className="p-0 rounded-none"
        value={backgroundColor} 
        onChange={(e) => setBackgroundColor(e.target.value)} 
      />

      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        Картинка фона
      </span>
      <div className="flex justify-center items-center w-150px h-150px border-none outline-none">
        {backgroundImage ? (
          <img src={URL.createObjectURL(backgroundImage)} alt="Uploaded Icon" />
        ) : (
          <img src={i1} alt="Default Icon" />
        )}
      </div>
      <Input
        type="file"
        ref={fileInputRef}
        onChange={handleIconChange}
        accept="image/*"
      />
      <Button onClick={handleIconClick}>Выбрать иконку</Button>

      <div className="flex gap-3 justify-center items-center">
        <Input
          type="checkbox"
          checked={addSearch}
          onChange={(e) => setAddSearch(e.target.checked)}
          style={{
            width: 19,
            height: 19,
          }}
        />
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Добавить поиск (по наполнению приложения)
        </span>
      </div>
      <Button className="bg-[#10C3EB] w-32 mb-3">
        <Link to={"/main/4"}>
          <span
            style={{
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            Далее
          </span>
        </Link>
      </Button>
    </div>
  );
};

export default AppTheme;