import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Auth } from "@/api/actions/auth";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [passError, setPassError] = useState<boolean>(false);

  const auth = new Auth();
  const navigate = useNavigate();
  const { setData } = useLocalStorage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPassError(prev => !prev)
      return;
    }

    const data = {
      name,
      email,
      password,
    };

    const res = await auth.signUp(data);

    if ((_id: string) => res) {
      navigate("/main/1");
      setData({ name: "user", value: { res } });
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    console.log(name, email, password, confirmPassword);
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
          <label htmlFor="email">Имя</label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Почта</label>
          <Input
            type="email"
            id="email"
            value={email}
            onError={() => console.log("err")}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          {passError ? <div>
            <span className="text-red-400">Пароли не совпадают</span>
          </div> : <label htmlFor="password">Пароль</label>}
          <Input
            type="password"
            id="password"
            value={password}
            className={passError ? "border-2 border-solid border-red-400" : ""}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
        {passError ? <div>
            <span className="text-red-400">Пароли не совпадают</span>
          </div> : <label htmlFor="password">Подтверждени пароля</label>}
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            className={passError ? "border-2 border-solid border-red-400" : ""}
            onChange={e => setConfirmPassword(e.target.value)}
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

export default SignUp;
