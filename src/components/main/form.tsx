type Props = {
  text: string;
  icon: string;
};

export const MainForm = ({ text, icon }: Props) => {
  return (
    <div className="flex flex-col p-3 pb-0 justify-center items-center gap-10 rounded-2xl text-black bg-white border border-solid w-[252px]">
      <span
        style={{
          fontWeight: 400,
          fontSize: 16,
        }}
      >
        {text}
      </span>
      <img src={icon} alt="image" width={183} height={258} />
    </div>
  );
};
