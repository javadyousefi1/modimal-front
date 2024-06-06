import image from "@assets/images/productImg(1).png";

const CartBox: React.FC<{
  name: string;
  color: string;
  size: string;
  bannerUrl: string;
  price: number;
  count: number;
}> = ({ name, color, price, count, bannerUrl, size }) => {
  return (
    <div className="flex justify-between h-[120px] gap-x-5 mt-6">
      {/* prodcut image */}
      <div>
        <img src={image} className="h-[120px]" />
      </div>
      {/* product detail */}
      <div className="flex flex-col justify-between flex-1">
        {/* header */}
        <div>
          <h1 className="font-semibold">{name}</h1>
        </div>
        {/* size */}
        <div>
          <span className="text-sm">Size :</span>
          <span className="text-sm">{size}</span>
        </div>
        {/* color */}
        <div>
          <span className="text-sm">color :</span>
          <span className="text-sm">{color}</span>
        </div>
        {/* price */}
        <div className="flex justify-between">
          <span className="text-sm font-bold">{price} $</span>
          {/* cart operation buttons */}
          <div className="flex items-center justify-center bg-primary-50 gap-x-2">
            <button className="text-lg font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 12h12"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <p className="text-primary">{count}</p>
            <button className="text-lg font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 12h12M12 18V6"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
