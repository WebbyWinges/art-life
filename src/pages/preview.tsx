import Footer from "@/components/footer";
import { PreviewHeaderComponent } from "@/components/header";
import Create from "@/components/preview/create";
import Go from "@/components/preview/go";
import How from "@/components/preview/how";
import Spec from "@/components/preview/spec";
import Uns from "@/components/preview/uns";
import { useEffect } from "react";

const Preview = () => {
  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  return (
    <div className=" flex flex-col">
      <PreviewHeaderComponent />
      <div className="container">
        <div className="flex flex-col">
          <Create />
          <span id="howWork" />
          <How />

          <span id="spec" />
          <Spec />

          <Go />

          <Uns />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Preview;
