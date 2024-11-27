import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Auth } from "@/api/actions/auth";

import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const { control, handleSubmit } = useForm<FormData>();
  const auth = new Auth();
  const isAuth = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async data => {
    console.log("Form Data:", data); // Добавьте этот вывод для отладки
    const res = await auth.signIn(data);
    if (res) {
      isAuth.setIsAuth(true);
      navigate("/main/1");
      localStorage.setItem("user", JSON.stringify(res));
    }
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <span
        style={{
          fontWeight: 400,
          fontSize: 20,
        }}
      >
        Войдите в личный кабинет, если у Вас уже есть аккаунт
      </span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 bg-white rounded-3xl flex flex-col p-6 gap-5"
      >
        <div className="flex flex-col gap-2 ">
          <label
            htmlFor="email"
            className="text-[20px] font-400 font-montserrat leading-[24.38px]"
          >
            Почта
          </label>
          <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Input type="email" id="email" {...field} required />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-[20px] font-400 font-montserrat leading-[24.38px]"
          >
            Пароль
          </label>
          <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Input type="password" id="password" {...field} required />
              )}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="flex justify-center items-center p-6 rounded-[10px] bg-[#10C3EB]"
        >
          <span
            style={{
              fontWeight: 500,
              fontSize: 20,
            }}
          >
            Войти
          </span>
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
