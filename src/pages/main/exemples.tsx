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
        className="  font-montserratALternates"
      >
        Выберите шаблон для своего приложения
      </span>

      <div className="grid grid-cols-3 gap-10">
        <MainForm text="Создать свой шаблон" icon={i1} />
      </div>
      <Link to="/main/2">
        <Button className="bg-[#10C3EB] w-32">
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

export default Exemples;
