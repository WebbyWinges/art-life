import Final from "@/pages/main/final";
import Preview from "@/pages/preview";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const AuthPage = lazy(() => import("@/pages/auth"));
const SignIn = lazy(() => import("@/components/auth/SignIn"));
const SignUp = lazy(() => import("@/components/auth/SignUp"));
const MainPage = lazy(() => import("@/pages/main"));
const Exemples = lazy(() => import("@/pages/main/exemples"));
const MainSettings = lazy(() => import("@/pages/main/mainSettings"));
const AppTheme = lazy(() => import("@/pages/main/appTheme"));
const FooterStttings = lazy(() => import("@/pages/main/footer"));
const Create = lazy(() => import("@/pages/main/create"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Preview />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/main",
    element: <MainPage />,
    children: [
      {
        path: "1",
        element: <Exemples />,
      },
      {
        path: "2",
        element: <MainSettings />,
      },
      {
        path: "3",
        element: <AppTheme />,
      },
      {
        path: "4",
        element: <Create />,
      },
      {
        path: "5",
        element: <FooterStttings />,
      },
      {
        path: "6",
        element: <Final />,
      },
    ],
  },
]);
