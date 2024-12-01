import { AccordionComponent } from "../shared/Accordion/Accrodion";

const Uns = () => {
  return (
    <section className="flex flex-col px-[90px] py-[80px] gap-5 h-[70vh]">
      <span
        className="leading-[64px]"
        style={{
          fontWeight: 700,
          fontSize: 64,
        }}
      >
        Найдите ответы на часто <br /> задаваемые вопросы
      </span>

      <AccordionComponent
        question={"Какие типы мобильных приложений вы разрабатываете?"}
        description={
          "Мы специализируемся на разработке шаблонов приложений для Android с использованием Kotlin."
        }
      />
      <AccordionComponent
        question={"Вы предлагаете приложения без кода?"}
        description={
          "Да, мы предлагаем приложения без кода, используя нашу собственную платформу для создания приложений. Это позволяет вам создавать и настраивать собственное мобильное приложение без какого-либо опыта программирования."
        }
      />
    </section>
  );
};

export default Uns;
