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
          className="w-1 h-8"
          style={{
            background: active ? "#10C3EB" : "#EBECEF",
          }}
        />
      )}
      <div
        className="flex h-[51px] w-[51px] rounded-full justify-center items-center"
        style={{
          background: active ? "#fff" : "#EBECEF",
          border: active ? "3px solid #10C3EB" : "",
        }}
      >
        {number}
      </div>
    </div>
  );
};

export default SliderElement;
