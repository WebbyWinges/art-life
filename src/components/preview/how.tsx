import image from "../../assets/image.png";

import i1 from "../../assets/image (1).png";
import i2 from "../../assets/image 15.png";
import i3 from "../../assets/image 16.png";

const How = () => {
  return (
    <div className="bg-black text-white w-full p-24 flex">
      <div className="flex flex-col items-left w-[40%] gap-[18px]">
        <img src={image} alt="Image" height={497} width={497} />
        <span
          style={{
            fontWeight: 600,
            fontSize: 44,
          }}
        >
          Наше видение
        </span>
        <span
          style={{
            fontWeight: 400,
            fontSize: 18,
          }}
        >
          Наше видение - произвести революцию в индустрии{" "}
          <p>мобильных приложений, упростив процесс</p>{" "}
          <p>разработки и предоставив предприятиям</p>{" "}
          <p>возможность с легкостью создавать мобильные</p> приложения.
        </span>
      </div>
      <div className="ml-[10%] flex flex-col justify-between">
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
          <div className="flex ">
            <div className="flex flex-col gap-4 mr-[57px]">
              <img className="w-[110px] h-[110px]" src={i2} alt="image" />
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Предоставление <p>компаниям</p> <p>возможности с</p>{" "}
                <p>легкостью создавать</p> <p>мобильные</p> <p>приложения</p>
              </span>
            </div>
            <div className="flex flex-col gap-4 mr-[121px]">
              <img className="w-[110px] h-[110px]" src={i3} alt="image" />
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Инновации <p>в индустрии</p> <p>мобильных</p> <p>приложений</p>
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <img className="w-[110px] h-[110px]" src={i1} alt="image" />
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Упрощение <p>разработки</p> <p>мобильных</p> <p>приложений</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
