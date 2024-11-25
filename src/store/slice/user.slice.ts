import { TUserSettings } from "@/api/actions/user";
import { createSlice } from "@reduxjs/toolkit";

export const initialState: TUserSettings = {
    id: "",
    name: "",
    email: "",
    appearanceSettings: {
        appName: "",
        appTitle: "",
        appIcon: null,
        isAppIcon: false
    },
    appTheme: {
        appHeaderColor: "",
        appHeaderTextColor: "",
        isAppHeader: false,
        appBackgroundColor: "",
        appBackgroundImage: null,
        isAppSearch: false
    },
    bottomPanelSettings: [],
    pages: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.appTheme = action.payload.appTheme;
            state.appearanceSettings = action.payload.appearanceSettings;
            state.bottomPanelSettings = action.payload.bottomPanelSettings;
            state.pages = action.payload.pages;
        },
    },
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer