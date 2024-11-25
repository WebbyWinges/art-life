import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface AccordionProps {
  question: ReactNode;
  description: ReactNode;
}

export const AccordionComponent = ({
  question,
  description,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Accordion
      type="single"
      className="flex w-full bg-[#f3f4f6] rounded-[20px] px-4 py-2"
      collapsible
    >
      <AccordionItem
        value="item-1"
        className="flex flex-col rounded-[20px] gap-[18px] w-full sm:max-w-full "
      >
        <div className=" ">
          <AccordionTrigger
            onClick={toggleOpen}
            className="flex flex-row rounded-[20px] justify-between items-center w-full"
          >
            <div className="flex flex-row justify-between items-center w-full ">
              <div className="text-[24px] leading-[30px] text-[#000000] font-[700] max-w-full font-monserat">
                {question}
              </div>

              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 0 : 90 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
              ></motion.div>
            </div>
          </AccordionTrigger>
        </div>
        <AccordionContent>
          <p className="text-[#000000] max-w-[700px] bg-[#0000] text-[24px] leading-[30px] font-[400] font-montserrat">
            {description}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
