import { GreenStick } from "../ui/icons";

const Spec = () => {
  return (
    <section className="flex flex-col mt-[80px] pb-[80px] px-[90px] gap-8">
      <span
        style={{
          fontWeight: 400,
          fontSize: 24,
        }}
        className="flex items-center gap-2"
      >
        <GreenStick />
        Специализация
      </span>
      <span
        style={{
          fontWeight: 700,
          fontSize: 80,
        }}
        className="font-montserrat leading-[74px]"
      >
        Специализируемся на шаблонах приложений для Android
      </span>
      <span
        style={{
          fontWeight: 700,
          fontSize: 48,
        }}
      >
        Наши ценности:
      </span>
      <div className="flex justify-between">
        <div className="flex flex-col gap-[25px]">
          <span
            style={{
              fontWeight: 600,
              fontSize: 24,
            }}
          >
            Инновации и творчество
          </span>
          <span
            className="max-w-[550px]"
            style={{
              fontWeight: 400,
              fontSize: 20,
            }}
          >
            Мы ценим инновации и креативность и стремимся разрабатывать шаблоны
            приложений, которые одновременно привлекательны и удобны для
            пользователя
          </span>
        </div>
        <div className="flex flex-col gap-[25px]">
          <span
            style={{
              fontWeight: 600,
              fontSize: 24,
            }}
          >
            Простота и удобство использования
          </span>
          <span
            className="max-w-[550px]"
            style={{
              fontWeight: 400,
              fontSize: 20,
            }}
          >
            Мы верим в простоту и удобство использования и стремимся сделать
            разработку мобильных приложений доступной каждому.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Spec;
