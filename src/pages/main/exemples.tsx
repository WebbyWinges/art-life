import { MainForm } from "@/components/main/form";

import i1 from "../../assets/Group 35.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Exemples = () => {
  return (
    <div className="flex flex-col gap-5">
      <span
        style={{
          fontWeight: 600,
          fontSize: 30,
        }}
      >
        Выберите шаблон для своего приложения
      </span>

      <div className="grid grid-cols-3 gap-10">
        <MainForm text="Создать свой шаблон" icon={i1} />
        <MainForm text="Продукты питания" icon={i1} />
        <MainForm text="Продукты питания" icon={i1} />
        <MainForm text="Продукты питания" icon={i1} />
        <MainForm text="Продукты питания" icon={i1} />
        <MainForm text="Продукты питания" icon={i1} />
      </div>

      <Button className="bg-[#10C3EB] w-32">
        <Link to={"/main/2"}>
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

export default Exemples;
