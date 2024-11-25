export type TApperanceSettings = {
  appName: string;
  appTitle: string;
  appIcon: string | null;
  isAppIcon: boolean;
};

export type TAppTheme = {
  appHeaderColor: string;
  appHeaderTextColor: string;
  isAppHeader: boolean;
  appBackgroundColor: string;
  appBackgroundImage: string | null;
  isAppSearch: boolean;
};

export type TButton = {
  type: string;
  lable: string;
  phoneNumber: string | null;
  customActions: string | null;
};

export type TBottomPanelSettings = {
  hidePanel: boolean;
  panelColor: string;
  iconAndTextColor: string;
  buttons: Array<TButton>;
};

export type TBlock = {
  blockId: number;
  lable: string;
  imageUrl: string | null;
  redirectUrl: string | null;
};

export type TPage = {
  tytle: string;
  showTitle: boolean;
  showInMenu: boolean;
  blocks: Array<TBlock>;
};

export type TSettings = {
  appearanceSettings: TApperanceSettings;
  appTheme: TAppTheme;
  bottomPanelSettings: TBottomPanelSettings;
  pages: Array<TPage>;
};
