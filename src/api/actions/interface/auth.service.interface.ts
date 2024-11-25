export interface IBaseUser {
  email: string;
  password: string;
}

export interface ICreateUser extends IBaseUser {
  name: string;
}

export interface IAuthService {
  signIn(data: IBaseUser): Promise<{ id: string }>;
  signUp(data: ICreateUser): Promise<{ id: string }>;
}
