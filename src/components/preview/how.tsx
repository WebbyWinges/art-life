import image from "../../assets/image.png";

import i1 from "../../assets/image (1).png";
import i2 from "../../assets/image 15.png";
import i3 from "../../assets/image 16.png";

const How = () => {
  return (
    <section className="bg-black text-white w-full py-[84px] gap-[80px] px-[134px] justify-between flex rounded-[20px]">
      <div className="flex flex-col justify-between items-left ">
        <img
          className=" rounded-[20px]"
          src={image}
          alt="Image"
          height={400}
          width={400}
        />

        <div className="flex flex-col">
          <span
            style={{
              fontWeight: 600,
              fontSize: 44,
            }}
          >
            Наше видение
          </span>
          <span
            className="max-w-[450px]"
            style={{
              fontWeight: 400,
              fontSize: 18,
            }}
          >
            Наше видение - произвести революцию в индустрии мобильных
            приложений, упростив процесс разработки и предоставив предприятиям
            возможность с легкостью создавать мобильные приложения.
          </span>
        </div>
      </div>
      <div className=" flex flex-col justify-between">
        <span
          style={{
            fontWeight: 700,
            fontSize: 60,
          }}
        >
          Как это работает?
        </span>
        <div className="flex flex-col gap-3">
          <span
            style={{
              fontWeight: 400,
              fontSize: 24,
            }}
          >
            Зарегистрируйтесь
          </span>
          <div className=" h-2 bg-[#10C3EB] rounded-full" />
          <span
            style={{
              fontWeight: 400,
              fontSize: 24,
            }}
          >
            Используйте удобный конструктор
          </span>
          <div className=" h-2 bg-[#10C3EB] rounded-full" />
          <span
            style={{
              fontWeight: 400,
              fontSize: 24,
            }}
          >
            После создания получите apk-файл
          </span>
          <div className=" h-2 bg-[#10C3EB] rounded-full" />
        </div>
        <div className="flex flex-col gap-4">
          <span
            style={{
              fontWeight: 600,
              fontSize: 44,
            }}
          >
            Наша миссия
          </span>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-4  items-center">
              <img className="w-[90px] h-[90px]" src={i2} alt="image" />
              <span
                className="max-w-[520px]"
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Предоставление компаниям возможности с легкостью создавать
                мобильные приложения
              </span>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <img className="w-[90px] h-[90px]" src={i3} alt="image" />
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Инновации в индустрии мобильных приложений
              </span>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <img className="w-[90px] h-[90px]" src={i1} alt="image" />
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Упрощение разработки мобильных приложений
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
