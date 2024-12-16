import { Input } from "@/components/ui/input";
import i1 from "../../assets/image 19.png";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useForm, Controller } from "react-hook-form";

interface MainSettingsForm {
  name: string;
  title: string;
  icon: File | null;
  isIcon: boolean;
}

const MainSettings = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<MainSettingsForm>({
    defaultValues: {
      name: "",
      title: "",
      icon: null,
      isIcon: false,
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const icon = watch("icon");

  const onSubmit = (data: MainSettingsForm) => {
    console.log("Form Data:", data);
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <span
        style={{
          fontWeight: 600,
          fontSize: 30,
        }}
        className=" font-montserratALternates"
      >
        Основные настройки
      </span>

      {/* Название приложения */}
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
        className=" font-montserratALternates"
      >
        Название приложения
      </span>
      <Controller
        name="name"
        control={control}
        rules={{ required: "Название приложения обязательно" }}
        render={({ field }) => <Input {...field} />}
      />
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}

      {/* Заголовок приложения */}
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
        className=" font-montserratALternates"
      >
        Заголовок приложения
      </span>
      <Controller
        name="title"
        control={control}
        rules={{ required: "Заголовок приложения обязателен" }}
        render={({ field }) => <Input {...field} />}
      />
      {errors.title && (
        <span className="text-red-500">{errors.title.message}</span>
      )}

      {/* Иконка приложения */}
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
        className=" font-montserratALternates"
      >
        Иконка приложения
      </span>

      <div className="relative max-w-[150px] rounded-[10px] border-[2px] border-[#D9D9D9]">
        <div className="flex justify-center items-center w-[150px] h-[150px]">
          {icon ? (
            <div className="pr-[4px] pb-[20px] rounded-[10px]">
              <img
                className="max-h-[130px]"
                src={URL.createObjectURL(icon)}
                alt="Uploaded Icon"
              />
            </div>
          ) : (
            <div className="p-[24px] pb-[44px]">
              <img src={i1} alt="Default Icon" />
            </div>
          )}
        </div>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          accept="image/*"
          onChange={e => {
            if (e.target.files && e.target.files[0]) {
              setValue("icon", e.target.files[0]);
            }
          }}
        />
        <Button
          className="absolute bottom-[-10px] w-full bg-[#10C3EB]"
          onClick={handleIconClick}
          type="button"
        >
          Загрузить
        </Button>
      </div>

      {/* Галочка: показывать иконку в шапке */}
      <div className="flex gap-3 justify-center items-center">
        <Controller
          name="isIcon"
          control={control}
          render={({ field }) => (
            <Input
              type="checkbox"
              checked={field.value}
              onChange={e => field.onChange(e.target.checked)}
              style={{ width: 19, height: 19 }}
            />
          )}
        />
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Возможность показывать иконку в шапке (галочка)
        </span>
      </div>

      <Button type="submit" className="bg-[#10C3EB] w-32 mb-3">
        <span
          style={{
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Далее
        </span>
      </Button>
    </form>
  );
};

export default MainSettings;
