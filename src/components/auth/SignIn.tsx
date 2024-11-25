import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Auth } from "@/api/actions/auth";
import { IBaseUser } from "@/api/actions/interface/auth.service.interface";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const auth = new Auth();
  const isAuth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: IBaseUser = {
      email,
      password,
    };
    const res = await auth.signIn(data);
    if ((_id: string) => res) {
      isAuth.setIsAuth(true);
      navigate("/main/1");
      localStorage.setItem("user", JSON.stringify(res))
    }
    setEmail("");
    setPassword("");
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
        onSubmit={handleSubmit}
        className="w-96 bg-white rounded-3xl flex flex-col p-6 gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Почта</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Пароль</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
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

export default SignIn;
