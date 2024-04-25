import Breadcrumbs from "@components/shared/Breadcrumbs";
import CartBox from "@components/cart/CartBox";
import MobileBanner from "../assets/images/productswiper3.svg";
import DesktopBanner from "../assets/images/productswiper4.svg";
import product1 from "../assets/images/product1.svg";
import product2 from "../assets/images/product2.svg";
import product3 from "../assets/images/product3.svg";
import product4 from "../assets/images/product4.svg";
import product5 from "../assets/images/product5.svg";
import product6 from "../assets/images/product6.svg";
const Products: React.FC = () => {
  let faqBreadcrumbs = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "shopAll", href: "/products" },
  ];

  const products = [
    {
      id: 1,
      image: product1,
      title: "chill wrap top",
      off: null,
      newproduct: false,
      color: ["#CA2929"],
      price: 160,
      desc: "Turn it up Top "
    },
    {
      id: 2,
      image: product2,
      title: "Essential T-shirt",
      off: "20%",
      newproduct: true,
      color: ["#0C0C0C", "#7DC3EB", "#748C70"],
      price: 95,
      desc: "Turn it up T-shirt"
    },
    {
      id: 3,
      image: product3,
      title: "Shirt Dress",
      off: null,
      newproduct: true,
      color: ["#0C0C0C", "#7DC3EB", "#748C70"],
      price: 245,
      desc: "Turn it up Dress"
    },
    {
      id: 4,
      image: product4,
      title: "Rule zip Jacket",
      off: null,
      newproduct: false,
      color: ["#909225", "#CA6D29"],
      price: 199,
      desc: "Turn it up Jacket"
    },
    {
      id: 5,
      image: product5,
      title: "New Age Linen",
      off: "30%",
      newproduct: false,
      color: ["#0C0C0C", "#19418E", "#748C70"],
      price: 180,
      desc: "Turn it up Pants"
    },
    {
      id: 6,
      image: product6,
      title: "Boss Pullover",
      off: null,
      newproduct: false,
      color: ["#0C0C0C", "#748C70"],
      price: 280,
      desc: "Turn it up Pullover"
    },
  ];

  return (
    <div className="w-full px-5">
      <div className="my-6">
        <Breadcrumbs items={faqBreadcrumbs} />
      </div>
      <div className="flex justify-center items-center">
        <img src={MobileBanner} className="block customResolution:hidden" />
        <img src={DesktopBanner} className="hidden customResolution:block" />
      </div>
      <div className="w-full flex flex-row-reverse justify-center items-center gap-x-1 mt-6">
        <span className="text-[14px]">Filter</span>
        <span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14V16H6V14H0ZM0 2V4H10V2H0ZM10 18V16H18V14H10V12H8V18H10ZM4 6V8H0V10H4V12H6V6H4ZM18 10V8H8V10H18ZM12 6H14V4H18V2H14V0H12V6Z"
              fill="#0C0C0C"
            />
          </svg>
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-4 mt-6">
        {products.map((item, index) => (
          <div key={index}>
            <CartBox
              title={item.title}
              desc={item.desc}
              price={item.price}
              colors={item.color}
              productImg={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
