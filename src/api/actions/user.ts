import { customAxios } from "../axios";
import { TApperanceSettings, TAppTheme, TBottomPanelSettings, TPage } from "../types/settings.type";

export class User {
  async getSettings(id: string): Promise<TUserSettings> {
    const data = (await customAxios.get(`user/settings/${id}`)).data;
    return data;
  }
  async getUser(id: string): Promise<TUserSettings> {
    return (await customAxios.get(`user/${id}`)).data;
  }
}



export type TUserSettings = {
  id: string,
  name: string,
  email: string,
  appearanceSettings: TApperanceSettings,
  appTheme: TAppTheme,
  bottomPanelSettings: Array<TBottomPanelSettings>,
  pages: Array<TPage>
}