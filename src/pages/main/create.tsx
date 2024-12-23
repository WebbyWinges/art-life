import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Plus } from "lucide-react";
import { ImageInput } from "@/components/shared/Input/ImageInput";
import { PlitMenu } from "@/components/fourStepBlocks/plitMenu";
import { FormBlock } from "@/components/fourStepBlocks/formBlock";

type BlockType = "Текст" | "Изображение" | "Плиточное меню" | "Форма";

interface Block {
  id: string;
  type: BlockType;
  fields: string | string[] | null;
}

interface Page {
  id: string;
  name: string;
  showTitle: boolean;
  showInMenu: boolean;
  blocks: Block[];
}

interface FormValues {
  pages: Page[];
}

const defaultPage: Page = {
  id: Math.random().toString(36).substr(2, 9),
  name: "Новая страница",
  showTitle: true,
  showInMenu: true,
  blocks: [],
};

const defaultBlock: Block = {
  id: Math.random().toString(36).substr(2, 9),
  type: "Текст",
  fields: "",
};

const Create: React.FC = () => {
  const { control, handleSubmit, register, setValue, watch } =
    useForm<FormValues>({
      defaultValues: { pages: [defaultPage] },
    });

  const pages = watch("pages");

  const addPage = () => {
    setValue("pages", [
      ...pages,
      { ...defaultPage, id: Math.random().toString(36).substr(2, 9) },
    ]);
  };

  const addBlock = (pageIndex: number) => {
    const updatedPages = [...pages];
    updatedPages[pageIndex].blocks.push({
      ...defaultBlock,
      id: Math.random().toString(36).substr(2, 9),
    });
    setValue("pages", updatedPages);
  };

  const onSubmit = (data: FormValues) => {
    console.log("Отправленные данные:", data);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Создание структуры и контента</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Tabs>
          <TabsList>
            {pages.map((page, index) => (
              <TabsTrigger key={page.id} value={page.id}>
                {page.name}
              </TabsTrigger>
            ))}
            <Plus onClick={addPage} className="cursor-pointer" />
          </TabsList>

          {pages.map((page, pageIndex) => (
            <TabsContent key={page.id} value={page.id}>
              <div className="space-y-4">
                <Controller
                  name={`pages.${pageIndex}.name` as const}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Название страницы" />
                  )}
                />
                <div>
                  <input
                    type="checkbox"
                    {...register(`pages.${pageIndex}.showTitle` as const)}
                  />
                  <label>Показывать название</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    {...register(`pages.${pageIndex}.showInMenu` as const)}
                  />
                  <label>Показывать в меню</label>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Блоки</h3>
                  {page.blocks.map((block, blockIndex) => (
                    <div key={block.id} className="space-y-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button>{block.type}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuRadioGroup
                            value={block.type}
                            onValueChange={(value: any) =>
                              setValue(
                                `pages.${pageIndex}.blocks.${blockIndex}.type` as const,
                                value,
                              )
                            }
                          >
                            <DropdownMenuRadioItem value="Текст">
                              Текст
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Изображение">
                              Изображение
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Плиточное меню">
                              Плиточное меню
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Форма">
                              Форма
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      {block.type === "Текст" && (
                        <Controller
                          name={
                            `pages.${pageIndex}.blocks.${blockIndex}.fields` as const
                          }
                          control={control}
                          render={({ field }) => (
                            <Input {...field} placeholder="Текст блока" />
                          )}
                        />
                      )}

                      <div className="flex flex-wrap gap-4">
                        {block.type === "Изображение" && (
                          <ImageInput
                            key={blockIndex}
                            icon={block.fields}
                            onIconChange={(file: any) =>
                              setValue(
                                `pages.${pageIndex}.blocks.${blockIndex}.fields`,
                                file,
                              )
                            }
                            defaultImage="Нет изображения"
                          />
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {block.type === "Плиточное меню" && (
                          <PlitMenu
                            PlitData={block.fields}
                            onChange={updatedFields =>
                              setValue(
                                `pages.${pageIndex}.blocks.${blockIndex}.fields`,
                                updatedFields,
                              )
                            }
                          />
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {block.type === "Форма" && (
                          <FormBlock
                            FormData={block.fields}
                            onChange={updatedFields =>
                              setValue(
                                `pages.${pageIndex}.blocks.${blockIndex}.fields`,
                                updatedFields,
                              )
                            }
                          />
                        )}
                      </div>
                    </div>
                  ))}

                  <Button onClick={() => addBlock(pageIndex)}>
                    Добавить блок
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Button type="submit">Сохранить</Button>
      </form>
    </div>
  );
};

export default Create;

// import React, { useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown, Plus } from "lucide-react";
// import { TextBlock } from "@/components/fourStepBlocks/textBlock";
// import { PictureBlock } from "@/components/fourStepBlocks/pictureBlock";
// import { FormBlock } from "@/components/fourStepBlocks/formBlock";
// import { PlitMenu } from "@/components/fourStepBlocks/plitMenu";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useStore } from "@/store/zustand/store";
// import { Tab, useTabs } from "@/hooks/useTabs";
// import { useBlocks } from "@/hooks/useBlocks";
// import FileUpload from "@/components/shared/Input/FileUpload";

// const Create = () => {
//   const { tabs, setTabs, addTab, updateTabName } = useTabs();
//   const { addBlock, updateBlockValue } = useBlocks();
//   const [activeTab, setActiveTab] = useState(tabs[0].name);

//   const { control, handleSubmit, register, setValue } = useForm<Tab[]>({
//     defaultValues: {
//       pages: tabs,
//     },
//   });

//   const fieldsData = useStore(state => state.fieldsData);
//   const setFieldsData = useStore(state => state.setFieldsData);

//   useEffect(() => {
//     setValue("pages", tabs);
//   }, [tabs, setValue]);

//   const onSubmit = (data: { pages: Tab[] }) => {
//     console.log("Форма отправлена", data);
//   };

//   const handleTabNameChange = (tabId: number, name: string) => {
//     updateTabName(tabId, name);
//     if (tabs.find(tab => tab.id === tabId)!.name === activeTab) {
//       setActiveTab(name);
//     }
//   };

//   const handleBlockValueChange = (
//     tabId: number,
//     blockId: number,
//     value: string,
//   ) => {
//     updateBlockValue(tabId, blockId, "selectedValue", value, tabs, setTabs);
//     setValue(`pages[${tabId}].blocks[${blockId}].selectedValue`, value);
//   };

//   return (
//     <div className="flex flex-col p-6 pb-[50px] gap-5 w-[800px]">
//       <span style={{ fontWeight: 600, fontSize: 30 }}>
//         Создание структуры и контента
//       </span>
//       <span style={{ fontWeight: 600, fontSize: 20 }}>Страницы меню</span>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-5 bg-white rounded-3xl p-4"
//       >
//         <Tabs value={activeTab} onValueChange={setActiveTab}>
//           <TabsList className="flex overflow-x-auto overflow-y-hidden gap-[40px] relative justify-start mb-10">
//             {tabs.map(tab => (
//               <TabsTrigger
//                 key={tab.id}
//                 value={tab.name}
//                 className="flex-shrink-0"
//               >
//                 {tab.name}
//               </TabsTrigger>
//             ))}
//             <Plus className="w-5 h-5 cursor-pointer" onClick={addTab} />
//           </TabsList>
//           {tabs.map(tab => (
//             <TabsContent key={tab.id} value={tab.name}>
//               <div className="flex flex-col gap-3 mb-5">
//                 <span>Название страницы</span>
//                 <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
//                   <Controller
//                     name={`pages[${tab.id}].name`}
//                     control={control}
//                     render={({ field }) => (
//                       <Input
//                         {...field}
//                         type="text"
//                         value={tab.name}
//                         onChange={e =>
//                           handleTabNameChange(tab.id, e.target.value)
//                         }
//                       />
//                     )}
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="checkbox"
//                     {...register(`pages[${tab.id}].showTitle`)}
//                   />
//                   <span>Показать название страницы в шапке</span>
//                 </div>
//                 <div>
//                   <input
//                     type="checkbox"
//                     {...register(`pages[${tab.id}].showInMenu`)}
//                   />
//                   <span>Не показывать страницу в меню</span>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-4">
//                 <h2 className="font-medium text-[20px] leading-[24px]">
//                   Блоки
//                 </h2>
//                 {tab.blocks.map(block => (
//                   <div key={block.id} className="flex flex-col gap-4 pl-3">
//                     <h3>Тип блока</h3>
//                     <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9] flex gap-4 px-4 py-1">
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <Button
//                             variant="ghost"
//                             className="text-[16px] font-normal flex justify-between w-full"
//                           >
//                             {block.selectedValue}
//                             <ChevronDown />
//                           </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent className="w-56">
//                           <DropdownMenuSeparator />
//                           <DropdownMenuRadioGroup
//                             value={block.selectedValue}
//                             onValueChange={value =>
//                               handleBlockValueChange(tab.id, block.id, value)
//                             }
//                           >
//                             <DropdownMenuRadioItem value="Текст">
//                               Текст
//                             </DropdownMenuRadioItem>
//                             <DropdownMenuRadioItem value="Изображение">
//                               Изображение
//                             </DropdownMenuRadioItem>
//                             <DropdownMenuRadioItem value="Плиточное меню">
//                               Плиточное меню
//                             </DropdownMenuRadioItem>
//                             <DropdownMenuRadioItem value="Форма">
//                               Форма
//                             </DropdownMenuRadioItem>
//                           </DropdownMenuRadioGroup>
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     </div>
//                     {block.selectedValue === "Текст" && (
//                       <TextBlock
//                         TextData={block.fields || ""} // Убедитесь, что TextData всегда строка
//                         onChange={data => {
//                           setValue(
//                             `pages[${tab.id}].blocks[${block.id}].fields`,
//                             data,
//                           ); // Обновляем fields
//                           updateBlockValue(
//                             tab.id,
//                             block.id,
//                             "fields",
//                             data,
//                             tabs,
//                             setTabs,
//                           ); // Обновляем состояние
//                         }}
//                       />
//                     )}
//                     {block.selectedValue === "Изображение" && (
//                       <FileUpload
//                         name="image" // Имя поля в форме
//                         accept="image/*" // Допустимые типы файлов
//                         onChange={(file: any) => {
//                           console.log("Выбран файл:", file);
//                         }}
//                       />
//                     )}
//                     {block.selectedValue === "Плиточное меню" && (
//                       <PlitMenu
//                         PlitData={block}
//                         onChange={data =>
//                           setValue(`pages[${tab.id}].blocks[${block.id}]`, data)
//                         }
//                       />
//                     )}
//                     {block.selectedValue === "Форма" && (
//                       <FormBlock
//                         FormData={block.fields || []}
//                         onChange={data => {
//                           setValue(
//                             `pages[${tab.id}].blocks[${block.id}]`,
//                             data,
//                           );
//                           setFieldsData(data.fields);
//                         }}
//                       />
//                     )}
//                   </div>
//                 ))}
//                 <Button
//                   className="w-[180px] bg-[#000000] mb-[50px] mt-[30px] ml-3"
//                   onClick={() => addBlock(tab.id, tabs, setTabs)}
//                 >
//                   Добавить блок
//                 </Button>
//               </div>
//             </TabsContent>
//           ))}
//         </Tabs>
//         <Button type="submit" className="bg-[#10C3EB] w-32 mb-3">
//           <span style={{ fontWeight: 400, fontSize: 16 }}>Сохранить</span>
//         </Button>
//       </form>
//       <a href="/main/5">
//         <Button className="bg-[#10C3EB] w-32 mb-3">
//           <span style={{ fontWeight: 400, fontSize: 16 }}>Далее</span>
//         </Button>
//       </a>
//     </div>
//   );
// };

// export default Create;
