import { LoadPic } from "../ui/loadPic";

export const PictureBlock = () => {
  return (
    <div className="flex flex-col gap-4 mb-[50px]">
      <h3>Наполнение</h3>
      <LoadPic />
    </div>
  );
};
