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
    {id: 1, image: product1 , title: "product1", off: null, newproduct: false},
    {id: 2, image: product2 , title: "product2", off: "20%", newproduct: true},
    {id: 3, image: product3 , title: "product3", off: null, newproduct: true},
    {id: 4, image: product4 , title: "product4", off: null, newproduct: false},
    {id: 5, image: product5 , title: "product5", off: "30%", newproduct: false},
    {id: 6, image: product6 , title: "product6", off: null, newproduct: false},
  ]

  return (
    <div className="w-full px-5">
      <div className="my-6">
        <Breadcrumbs items={faqBreadcrumbs} />
      </div>
      <div className="flex justify-center items-center">
        <img src={ MobileBanner} className="block customResolution:hidden"/>
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
        {[...Array(9)].map((_, index) => (
          <div key={index}>
            <CartBox
              title="tailored stretch"
              desc="turn it up pants"
              price={180}
              colors={["#7DC3EB", "#0C0C0C", "#748C70"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
