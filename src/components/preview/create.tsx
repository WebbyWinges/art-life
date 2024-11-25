import { Button } from "../ui/button";
import image from "../../assets/Group 3.png";
import fond from "../../assets/fond.png";

const Create = () => {
  return (
    <div className="flex flex-col pt-0 gap-[78px] pb-[110px] font-montserratALternates">
      <div
        className="flex flex-col gap-3 p-6 h-[644px] rounded-3xl w-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <span
            style={{
              fontWeight: 600,
              fontSize: 80,
            }}
          >
            Создай своё
          </span>
          <div>
            <p
              style={{
                fontWeight: 600,
                fontSize: 80,
              }}
            >
              приложение
            </p>
            <p
              style={{
                fontWeight: 600,
                fontSize: 80,
              }}
            >
              с ArtLife
            </p>
          </div>
        </div>
        <div>
          <span
            style={{
              fontWeight: 400,
              fontSize: 26,
            }}
          >
            Лучшее решение без кода для создания
          </span>
          <p
            style={{
              fontWeight: 400,
              fontSize: 26,
            }}
          >
            мобильного приложения
          </p>
        </div>
        <Button className="max-w-xs py-10 px-52 rounded-3xl">
          <span
            style={{
              fontWeight: 400,
              fontSize: 30,
            }}
          >
            Создать приложение
          </span>
        </Button>
      </div>
      <div className="flex justify-center gap-[41px] items-center">
        <div
          className=" h-[211px]  w-[376px]"
          style={{
            backgroundImage: `url(${fond})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <span className="text-[24px] leading-[30px] font-[500] max-w-[750px]">
          Проект реализуется при финансовой поддержке фонда содействия развитию
          малых форм предприятий в научно-технической сфере (Фонд содействия
          инновациям) в рамках программы "Студенческий стартап" федерального
          проекта «Платформа университетского технологического
          предпринимательства»
        </span>
      </div>
    </div>
  );
};

export default Create;
