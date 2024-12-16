import { LoadPic } from "../ui/loadPic";

export const PictureBlock = ({ PictureData, onChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3>Наполнение</h3>
      <LoadPic pictureData={PictureData} onChange={onChange} />
    </div>
  );
};
