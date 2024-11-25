import { useLocation } from "react-router-dom";
import SliderElement from "./sliderElement";

const Slider = () => {
  const location = useLocation();
  const path = Number(location.pathname.split("/")[2]);
  return (
    <div className="flex h-full flex-col justify-start">
      <SliderElement number={1} page={path} />
      <SliderElement number={2} page={path} />
      <SliderElement number={3} page={path} />
      <SliderElement number={4} page={path} />
      <SliderElement number={5} page={path} />
      <SliderElement number={6} page={path} />
    </div>
  );
};

export default Slider;
