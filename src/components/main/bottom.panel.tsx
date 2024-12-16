import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import i1 from "../../assets/Group 32.png";

type ButtonField = {
  id: number;
  type: string;
  label: string;
  phoneNumber: string;
  customAction: string;
  icon: File | null;
};

interface BottomPanelSettingsFormProps {
  onFormSubmit: (formData: {
    bottomPanelSettings: {
      hidePanel: boolean;
      panelColor: string;
      iconAndTextColor: string;
      buttons: ButtonField[];
    };
  }) => void;
}

const BottomPanelSettingsForm: React.FC<BottomPanelSettingsFormProps> = ({
  onFormSubmit,
}) => {
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      hidePanel: true,
      panelColor: "",
      iconAndTextColor: "",
      buttons: [
        {
          id: 1,
          type: "Phone",
          label: "",
          phoneNumber: "",
          customAction: "",
          icon: null,
        },
      ],
    },
  });

  const buttons = watch("buttons");

  const fileInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  const addNewButton = () => {
    setValue("buttons", [
      ...buttons,
      {
        id: buttons.length + 1,
        type: "Phone",
        label: "",
        phoneNumber: "",
        customAction: "",
        icon: null,
      },
    ]);
  };

  const handleIconClick = (id: number) => {
    if (fileInputRefs.current[id]) {
      fileInputRefs.current[id]!.click();
    }
  };

  const onSubmit = (data: any) => {
    const formattedData = {
      bottomPanelSettings: {
        hidePanel: data.hidePanel,
        panelColor: data.panelColor,
        iconAndTextColor: data.iconAndTextColor,
        buttons: data.buttons.map((button: ButtonField) => ({
          type: button.type,
          label: button.label,
          phoneNumber: button.type === "Phone" ? button.phoneNumber : "",
          customAction: button.type === "Custom" ? button.customAction : "",
          icon: button.icon ? URL.createObjectURL(button.icon) : "",
        })),
      },
    };
    onFormSubmit(formattedData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex p-5 bg-white flex-col gap-5 rounded-2xl"
    >
      <div className="flex flex-col gap-5">
        <div className="flex gap-1 items-center">
          <h3>Кнопки</h3>
          <Button
            type="button"
            variant={"ghost"}
            className="text-xl"
            onClick={addNewButton}
          >
            +
          </Button>
        </div>

        {buttons.map((button: ButtonField, index: number) => (
          <div key={button.id} className="button-field">
            <label>
              Тип кнопки
              <Controller
                name={`buttons.${index}.type`}
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Телефон" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Phone">Телефон</SelectItem>
                        <SelectItem value="Custom">Произвольная</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </label>

            <label>
              Название кнопки
              <Controller
                name={`buttons.${index}.label`}
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    {...field}
                    className="border-20 border-solid border-gray-500"
                  />
                )}
              />
            </label>

            {button.type === "Phone" && (
              <label>
                Телефон
                <Controller
                  name={`buttons.${index}.phoneNumber`}
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="text"
                      {...field}
                      className="border-20 border-solid border-gray-500"
                    />
                  )}
                />
              </label>
            )}

            {button.type === "Custom" && (
              <>
                <label>
                  Произвольное действие
                  <Controller
                    name={`buttons.${index}.customAction`}
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="text"
                        {...field}
                        className="border-20 border-solid border-gray-500"
                      />
                    )}
                  />
                </label>

                <div className="flex justify-center items-center w-[150px] h-[150px] border-none outline-none">
                  {button.icon ? (
                    <img
                      src={URL.createObjectURL(button.icon)}
                      alt="Uploaded Icon"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={i1}
                      alt="Default Icon"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <input
                  type="file"
                  ref={el => (fileInputRefs.current[button.id] = el)}
                  onChange={e => {
                    setValue(
                      `buttons.${index}.icon`,
                      e.target.files ? e.target.files[0] : null,
                    );
                  }}
                  accept="image/*"
                  style={{ display: "none" }}
                />
                <Button onClick={() => handleIconClick(button.id)}>
                  Выбрать иконку
                </Button>
              </>
            )}
          </div>
        ))}
      </div>

      <Button type="submit" className="bg-blue-500 text-white">
        Сохранить
      </Button>
    </form>
  );
};

export default BottomPanelSettingsForm;
