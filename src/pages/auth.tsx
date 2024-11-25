import Footer from "@/components/footer";
import { AuthHeaderComponent } from "@/components/header";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
    return ( 
        <div className="flex flex-col justify-between h-screen bg-gray-100">
            <AuthHeaderComponent />
            <Outlet />
            <Footer />
        </div>
     );
}
 
export default AuthPage;