import { Input } from "@/components/ui/input";
import i1 from "../../assets/image 19.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

const MainSettings = () => {
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [icon, setIcon] = useState<File | null>(null);
  const [isIcon, setIsIcon] = useState<boolean>(false);

  const AppName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const AppTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIcon(e.target.files[0]);
    }
  };

  const handleNextClick = () => {};

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-5">
      <span
        style={{
          fontWeight: 600,
          fontSize: 30,
        }}
        className=" font-montserratALternates"
      >
        Основные настройки
      </span>
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
        className=" font-montserratALternates"
      >
        Название приложения
      </span>
      <Input value={name} onChange={AppName} />
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
        className=" font-montserratALternates"
      >
        Заголовок приложения
      </span>
      <Input value={title} onChange={AppTitle} />
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
        className=" font-montserratALternates"
      >
        Иконка приложения
      </span>

      <div className=" relative max-w-[150px] rounded-[10px]  border-[2px]  border-b-[#d9d9d900] border-[#D9D9D9]">
        <div className="flex justify-center items-center w-[150px] h-[150px] border-none outline-none ">
          {icon ? (
            <div className="p-[0px] pb-[20px] rounded-[10px]">
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
          defaultChecked={isIcon}
          onClick={() => setIsIcon(prev => !prev)}
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
          Возможность показывать иконку в шапке (галочка)
        </span>
      </div>
      <Button className="bg-[#10C3EB] w-32 mb-3" onClick={handleNextClick}>
        <Link to={"/main/3"}>
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

export default MainSettings;
