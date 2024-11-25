import {
  IAuthService,
  IBaseUser,
  ICreateUser,
} from "./interface/auth.service.interface";
import { customAxios } from "../axios";

export class Auth implements IAuthService {
  async signIn(data: IBaseUser): Promise<{ id: string }> {
    return (await customAxios.post("auth/login", data)).data;
  }

  async signUp(data: ICreateUser): Promise<{ id: string }> {
    return (await customAxios.post("auth/register", data)).data;
  }
}
