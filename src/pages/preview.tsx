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
    <div className="min-h-screen flex flex-col">
      <PreviewHeaderComponent />
      <div className="container">
        <div className="flex flex-col">
          <section className="min-h-screen">
            <Create />
          </section>
          <section className="min-h-screen">
            <How />
          </section>
          <section className="min-h-screen">
            <Spec />
          </section>
          <section className="min-h-screen">
            <Go />
          </section>
          <section className="min-h-screen">
            <Uns />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Preview;
