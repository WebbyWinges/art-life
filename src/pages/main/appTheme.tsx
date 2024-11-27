import { Input } from "@/components/ui/input";
import i1 from "../../assets/Group 32.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const AppTheme = () => {
  const [headerColor, setHeaderColor] = useState<string>("#D9D9D9");
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
      <div className="flex flex-row gap-3 items-center">
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Цвет шапки
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

      <div className="flex flex-row gap-3 items-center">
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Цвет текста в шапке
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
            value={headerTextColor}
            onChange={e => setHeaderTextColor(e.target.value)}
          />
          <div
            className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
            style={{
              backgroundColor: headerColor,
            }}
          />
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <Input
          type="checkbox"
          checked={hideHeader}
          onChange={e => setHideHeader(e.target.checked)}
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

      <div className="flex flex-row gap-3 items-center">
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Цвет фона приложения
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
            value={backgroundColor}
            onChange={e => setBackgroundColor(e.target.value)}
          />
          <div
            className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
            style={{
              backgroundColor: headerColor,
            }}
          />
        </div>
      </div>

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
          onChange={e => setAddSearch(e.target.checked)}
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
