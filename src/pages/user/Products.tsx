import Breadcrumbs from "@components/shared/Breadcrumbs";
// componenet
import CartBox from "@components/user/cart/CartBox";
import ProductFilter from "@components/user/products/ProductFilter";
// SVG
import MobileBanner from "@/assets/images/productswiper3.png";
import DesktopBanner from "@/assets/images/productswiper4.png";
import product1 from "@/assets/images/productImg(1).png";
import { useState } from "react";
import ChildrenModal from "@/components/user/modal/ChildrenModal";
const Products: React.FC = () => {
  const [filterData, setFilterData] = useState([]);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  let faqBreadcrumbs = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "shopAll", href: "/products" },
  ];

  // product data
  const products = [
    {
      id: 1,
      image: product1,
      title: "chill wrap top",
      off: null,
      newproduct: false,
      color: ["#CA2929"],
      price: 160,
      oldPrice: null,
      desc: "Turn it up Top ",
    },
    {
      id: 2,
      image: product1,
      title: "Essential T-shirt",
      off: "20%",
      newproduct: true,
      color: ["#0C0C0C", "#7DC3EB", "#748C70"],
      price: 95,
      oldPrice: 120,
      desc: "Turn it up T-shirt",
    },
    {
      id: 3,
      image: product1,
      title: "Shirt Dress",
      off: null,
      newproduct: true,
      color: ["#0C0C0C", "#7DC3EB", "#748C70"],
      price: 245,
      oldPrice: null,
      desc: "Turn it up Dress",
    },
    {
      id: 4,
      image: product1,
      title: "Rule zip Jacket",
      off: null,
      newproduct: false,
      color: ["#909225", "#CA6D29"],
      price: 199,
      oldPrice: null,
      desc: "Turn it up Jacket",
    },
    {
      id: 5,
      image: product1,
      title: "New Age Linen",
      off: "30%",
      newproduct: false,
      color: ["#0C0C0C", "#19418E", "#748C70"],
      price: 180,
      oldPrice: 240,
      desc: "Turn it up Pants",
    },
    {
      id: 6,
      image: product1,
      title: "Boss Pullover",
      off: null,
      newproduct: false,
      color: ["#0C0C0C", "#748C70"],
      price: 280,
      oldPrice: 350,
      desc: "Turn it up Pullover",
    },
  ];

  const handleOpenModalFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const handleFilter = () => {};

  return (
    <div className="w-full">
      <div className="my-6 px-5">
        <Breadcrumbs items={faqBreadcrumbs} />
      </div>
      {/* banner */}
      <div className="w-full flex justify-center items-center">
        <img
          src={MobileBanner}
          className="w-full block customResolution:hidden"
        />
        <img
          src={DesktopBanner}
          className="w-full hidden customResolution:block"
        />
      </div>
      {/*mobile filter */}
      <div
        className="w-full flex flex-row-reverse justify-center items-center gap-x-1 mt-6 md:hidden"
        onClick={handleOpenModalFilter}
      >
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
      {isOpenFilter && (
        <div className="w-full h-full overflow-y-auto overflow-x-hidden pt-4 px-10 sm:px-28 fixed top-0 z-50 bg-white">
          <div onClick={handleOpenModalFilter} className="absolute top-8 right-10 sm:right-28">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="#0C0C0C"
              />
            </svg>
          </div>
          <ProductFilter handleOpenModalFilter={handleOpenModalFilter}/>
        </div>
      )}
      {/* product */}
      <div className="sm:flex sm:justify-center sm:items-start sm:gap-x-6 mt-12 px-5 container">
        {/* desktop filter */}
        <div className="md:w-1/3 xl:w-1/3 hidden md:block">
          <ProductFilter filterData={filterData} handleFilter={handleFilter} />
        </div>
        <div className="md:w-2/3 xl:w-2/3 px-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-x-4">
            {products.map((item, index) => (
              <div key={index}>
                <CartBox
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  colors={item.color}
                  productImg={item.image}
                  alt={item.title}
                  newProduct={item.newproduct}
                  oldPrice={item.oldPrice}
                />
              </div>
            ))}
          </div>
          {/* button */}
          <div className="w-full flex justify-center items-center">
            <button className="min-w-max flex justify-center items-center py-5 px-10 h-4 border-[1px] border-primary-600 text-[14px] text-primary-600 transition ease-in-out duration-300 hover:bg-primary-600 hover:text-white">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
