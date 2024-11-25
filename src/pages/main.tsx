import { User } from "@/api/actions/user";
import Footer from "@/components/footer";
import { MainHeaderComponent } from "@/components/header";
import Slider from "@/components/slider";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  const userService = new User();

  const getMe = async () => {
    try {
      const user = localStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);

        if (parsedUser) {
          const u = await userService.getUser(parsedUser);
          localStorage.setItem("user", JSON.stringify(u));
          return u;
        } else {
          console.warn("User ID not found in the parsed user data.");
        }
      } else {
        console.warn("No user data found in localStorage.");
      }
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
    }
    return null;
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100">
      <MainHeaderComponent />
      <div className="flex px-24 gap-10 bg-gray-100">
        <Slider />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
