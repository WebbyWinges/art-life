import { Button } from "@/components/ui/button";

const Final = () => {
  return (
    <div className="flex flex-col gap-5">
      <span
        style={{
          fontWeight: 600,
          fontSize: 30,
        }}
      >
        Завершение и сборка
      </span>

      <span
        style={{
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        Просмотрите приложение и проверьте, что все так как вы хотели!
      </span>

      <span
        style={{
          fontWeight: 400,
          fontSize: 20,
        }}
      >
        Если вам все нравится, то остался последний штрих, нажать на <p>кнопку “Начать сборку”</p>
      </span>

      <Button className="bg-[#10C3EB] w-32">
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Начать сборку
        </span>
      </Button>
    </div>
  );
};

export default Final;
