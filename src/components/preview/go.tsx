import { Button } from "../ui/button";

const Go = () => {
  return (
    <div className="bg-black text-white w-full py-[84px] gap-[64px] px-[134px] justify-between text-center flex flex-col rounded-[20px]">
      <span className="font-montserrat font-[800] text-[30px] leading-[36.57px]">
        Давайте начнём
      </span>
      <div className="flex flex-col items-center gap-[31px]">
        <span className=" max-w-[1140px] font-montserrat font-[700] text-[64px] leading-[78.02px]">
          Трансформируйте свой бизнес с помощью настраиваемого мобильного
          приложения.
        </span>
        <span
          style={{
            fontWeight: 400,
            fontSize: 32,
          }}
        >
          <p className="max-w-[868px]">
            Благодаря нашим инновационным шаблонам приложений и исключительному
            обслуживанию клиентов мы можем помочь вам преобразовать ваш бизнес с
            помощью настраиваемого мобильного приложения.
          </p>
        </span>
        <Button className="bg-[#10C3EB] px-[55px] py-[38px] rounded-[20px] mt-[64px]">
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
    </div>
  );
};

export default Go;
