import { Input } from "@/components/ui/input";
import i1 from "../../assets/image 19.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const AppTheme = () => {
  const [headerColor, setHeaderColor] = useState<string>("#D9D9D9");
  const [headerTextColor, setHeaderTextColor] = useState<string>("#D9D9D9");
  const [hideHeader, setHideHeader] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>("#D9D9D9");

  const [addSearch, setAddSearch] = useState<boolean>(false);
  const [icon, setIcon] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIcon(e.target.files[0]);
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
              backgroundColor: headerTextColor,
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
              backgroundColor: backgroundColor,
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
      <div className=" relative max-w-[150px] rounded-[10px]  border-[2px]  border-b-[#d9d9d900] border-[#D9D9D9]">
        <div className="flex justify-center items-center w-[150px] h-[150px] border-none outline-none ">
          {icon ? (
            <div className="pr-[4px] pb-[20px] rounded-[10px]">
              <img
                className=" max-h-[130px]"
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
          className="  hidden"
          type="file"
          ref={fileInputRef}
          onChange={handleIconChange}
          accept="image/*"
        />
        <Button
          className="  absolute bottom-[-10px] w-full bg-[#10C3EB]"
          onClick={handleIconClick}
        >
          Загрузить
        </Button>
      </div>

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
      <Link to={"/main/4"}>
        <Button className="bg-[#10C3EB] w-32 mb-3">
          <span
            style={{
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            Далее
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default AppTheme;
