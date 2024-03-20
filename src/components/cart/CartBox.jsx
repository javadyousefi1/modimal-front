import productImg from "../../assets/images/productImg(1).png";
const CartBox = ({ title, desc, price, colors }) => {
  return (
    <div>
      <div className="flex flex-col w-[152px] ">
        {/* cart image */}
        <img src={productImg} alt="" className="h-[213px] object-cover" />
        {/* title */}
        <p className="font-semibold text-black text-md">{title}</p>
        {/* desc */}
        <span className="mt-1">{desc}</span>
        {/* cost */}
        <p className="font-bold text-right">$ {price}</p>
        {/* colors */}
        <div className="flex gap-x-2">
          {colors?.map((color, index) => (
            <div
              key={index}
              style={{
                width: "16px",
                height: "16px",
                backgroundColor: color,
                borderRadius: "100%",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartBox;
