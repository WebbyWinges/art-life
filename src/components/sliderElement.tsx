import { useEffect, useState } from "react";

type Props = {
  number: number;
  page: number;
};

const SliderElement = ({ number, page }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (number <= page) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [page, number]);

  return (
    <div className="flex flex-col justify-center items-center">
      {number === 1 ? null : (
        <div
          className="w-[2px] h-8"
          style={{
            background: active ? "#10C3EB" : "#EBECEF",
          }}
        />
      )}
      <div
        className="flex h-[51px] w-[51px] font-montserratALternates rounded-full justify-center items-center"
        style={{
          background: active ? "#fff" : "#EBECEF",
          border: active ? "2px solid #10C3EB" : "",
          color: active ? " #10C3EB" : "#C5C8CF",
        }}
      >
        {number}
      </div>
    </div>
  );
};

export default SliderElement;
