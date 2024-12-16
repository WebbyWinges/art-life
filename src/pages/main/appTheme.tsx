import { Input } from "@/components/ui/input";
import i1 from "../../assets/image 19.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useRef } from "react";

interface AppThemeForm {
  appHeaderColor: string;
  appHeaderTextColor: string;
  isAppHeader: boolean;
  appBackgroundColor: string;
  appBackgroundImage: File | null;
  isAppSearch: boolean;
}

const AppTheme = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AppThemeForm>({
    defaultValues: {
      appHeaderColor: "#D9D9D9",
      appHeaderTextColor: "#D9D9D9",
      isAppHeader: false,
      appBackgroundColor: "#D9D9D9",
      appBackgroundImage: null,
      isAppSearch: false,
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const appBackgroundImage = watch("appBackgroundImage");

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = (data: AppThemeForm) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-5"
    >
      <span style={{ fontWeight: 600, fontSize: 30 }}>
        Настройки внешнего вида
      </span>

      {/* Цвет шапки */}
      <div className="flex flex-row gap-3 items-center">
        <span style={{ fontWeight: 400, fontSize: 16 }}>Цвет шапки</span>
        <Controller
          name="appHeaderColor"
          control={control}
          render={({ field }) => (
            <div className="relative">
              <input
                type="color"
                className="absolute top-0 left-0 w-full h-full opacity-0"
                {...field}
              />
              <div
                className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
                style={{ backgroundColor: field.value }}
              />
            </div>
          )}
        />
      </div>

      {/* Цвет текста в шапке */}
      <div className="flex flex-row gap-3 items-center">
        <span style={{ fontWeight: 400, fontSize: 16 }}>
          Цвет текста в шапке
        </span>
        <Controller
          name="appHeaderTextColor"
          control={control}
          render={({ field }) => (
            <div className="relative">
              <input
                type="color"
                className="absolute top-0 left-0 w-full h-full opacity-0"
                {...field}
              />
              <div
                className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
                style={{ backgroundColor: field.value }}
              />
            </div>
          )}
        />
      </div>

      {/* Убрать шапку */}
      <div className="flex gap-3 items-center">
        <Controller
          name="isAppHeader"
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
        <span style={{ fontWeight: 400, fontSize: 16 }}>Убрать шапку</span>
      </div>

      {/* Цвет фона приложения */}
      <div className="flex flex-row gap-3 items-center">
        <span style={{ fontWeight: 400, fontSize: 16 }}>
          Цвет фона приложения
        </span>
        <Controller
          name="appBackgroundColor"
          control={control}
          render={({ field }) => (
            <div className="relative">
              <input
                type="color"
                className="absolute top-0 left-0 w-full h-full opacity-0"
                {...field}
              />
              <div
                className="rounded-[10px] w-[119px] h-[44px] border border-gray-300"
                style={{ backgroundColor: field.value }}
              />
            </div>
          )}
        />
      </div>

      {/* Картинка фона */}
      <span style={{ fontWeight: 400, fontSize: 16 }}>Картинка фона</span>
      <div className="relative max-w-[150px] rounded-[10px] border-[2px] border-[#D9D9D9]">
        <div className="flex justify-center items-center w-[150px] h-[150px]">
          {appBackgroundImage ? (
            <div className="pr-[4px] pb-[20px] rounded-[10px]">
              <img
                className="max-h-[130px]"
                src={URL.createObjectURL(appBackgroundImage)}
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
              setValue("appBackgroundImage", e.target.files[0]);
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

      {/* Добавить поиск */}
      <div className="flex gap-3 justify-center items-center">
        <Controller
          name="isAppSearch"
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
        <span style={{ fontWeight: 400, fontSize: 16 }}>
          Добавить поиск (по наполнению приложения)
        </span>
      </div>

      <Link to={"/main/4"}>
        <Button type="submit" className="bg-[#10C3EB] w-32 mb-3">
          <span style={{ fontWeight: 400, fontSize: 16 }}>Далее</span>
        </Button>
      </Link>
    </form>
  );
};

export default AppTheme;
