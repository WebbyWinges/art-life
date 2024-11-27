import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Auth } from "@/api/actions/auth";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const auth = new Auth();
  const navigate = useNavigate();
  const { setData } = useLocalStorage();

  const onSubmit: SubmitHandler<FormData> = async data => {
    console.log("Form Data:", data);
    if (data.password !== data.confirmPassword) {
      console.log("Пароли не совпадают");
      return;
    }

    const res = await auth.signUp(data);

    if (res) {
      navigate("/main/1");
      localStorage.setItem("user", JSON.stringify(res));
    }

    console.log(data);
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
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Имя</label>
          <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Input type="text" id="name" {...field} required />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Почта</label>
          <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: true, pattern: /^\S+@\S+$/i }}
              render={({ field }) => (
                <Input type="email" id="email" {...field} required />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Пароль</label>
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
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword">Подтверждение пароля</label>
          <div className="border-2 border-solid rounded-[10px] border-[#d9d9d9]">
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                validate: value =>
                  value === watch("password") || "Пароли не совпадают",
              }}
              render={({ field }) => (
                <Input
                  type="password"
                  id="confirmPassword"
                  {...field}
                  required
                />
              )}
            />
          </div>
          {errors.confirmPassword && (
            <span className="text-red-400">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <Button
          type="submit"
          className="flex justify-center items-center p-6 rounded-2xl bg-[#10C3EB]"
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

export default SignUp;
