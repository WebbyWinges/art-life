import i1 from "../assets/Vector.png";
import i2 from "../assets/Vector (1).png";

const Footer = () => {
  return (
    <div className="flex justify-around px-24 py-8 items-center bg-black text-white">
      <span
        style={{
          fontWeight: 500,
          fontSize: 16,
        }}
      >
        2024, ArtLife
      </span>
      <span
        style={{
          fontWeight: 500,
          fontSize: 16,
        }}
      >
        Создано при поддержке Фонда содействия инновациям
      </span>
      <div className="flex gap-5">
        <img src={i1} alt="" width={25} height={25} />
        <img src={i2} alt="" width={25} height={25} />
      </div>
    </div>
  );
};

export default Footer;
