import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import i1 from "../assets/iconamoon_profile.png";

const InicialHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex py-3 justify-around items-center px-24 bg-white shadow-xl ">
      <span className="text-[32px] leading-[39px] font-400 font-montserratALternates">
        ArtLife
      </span>
      {children}
    </div>
  );
};

const AuthHeaderComponent = () => {
  return (
    <InicialHeader>
      <div className="flex gap-3">
        <Button variant={"default"}>
          <Link to={"/auth/sign-in"}>
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Войти
            </span>
          </Link>
        </Button>
        <Button variant={"default"}>
          <Link to={"/auth/sign-up"}>
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Зарегистрироваться
            </span>
          </Link>
        </Button>
      </div>
    </InicialHeader>
  );
};

const PreviewHeaderComponent = () => {
  return (
    <InicialHeader>
      <div>
        <Button variant={"link"}>
          <Link to={""}>
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Как это работает
            </span>
          </Link>
        </Button>
        <Button variant={"link"}>
          <Link to={""}>
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Специализация
            </span>
          </Link>
        </Button>
        <Button variant={"default"}>
          <Link to={"/auth/sign-in"}>
            <span
              style={{
                fontWeight: 400,
                fontSize: 16,
              }}
            >
              Войти
            </span>
          </Link>
        </Button>
      </div>
    </InicialHeader>
  );
};

const MainHeaderComponent = () => {
  return (
    <InicialHeader>
      <div className="flex">
        <Button variant={"link"}>Мои проекты</Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            className="bg-[#10C3EB] px-2 py-1 rounded-xl text-white outline-none flex items-center justify-center"
            style={{
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            <img src={i1} alt="" />
            Профиль
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Настройки</DropdownMenuItem>
            <DropdownMenuItem>Выйти</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </InicialHeader>
  );
};

export { PreviewHeaderComponent, MainHeaderComponent, AuthHeaderComponent };
