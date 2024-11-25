import { AccordionComponent } from "../shared/Accordion/Accrodion";

const Uns = () => {
  return (
    <div className="flex flex-col p-24 gap-5">
      <span
        style={{
          fontWeight: 700,
          fontSize: 64,
        }}
      >
        Найдите ответы на часто <p>задаваемые вопросы</p>
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
    </div>
  );
};

export default Uns;
