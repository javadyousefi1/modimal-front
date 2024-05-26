import { getProductApi } from "@/api/product";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductSwiper from "@/components/user/productOrder/ProductSwiper";
import { useEffect, useState } from "react";

const ProductOrder: React.FC = () => {
  const [productData, setProductData] = useState();
  const productTitle = productData?.productName;
  let faqBreadcrumbs = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "Product", href: "/product" },
    { id: 3, text: productTitle, href: "/contact-us" },
  ];

  useEffect(() => {
    getProductApi().then((res) => setProductData(res.data.data));
  }, []);

  return (
    <div className="container ">
      <div className="my-6 px-5">
        <Breadcrumbs items={faqBreadcrumbs} />
      </div>
      {productData && (
        <>
          <div className="!p-0">
            <ProductSwiper />
          </div>
          <div className="flex justify-center items-start flex-col gap-y-2 px-5">
            <span className="text-[20px] font-bold ">
              {productData?.productName}
            </span>
            <p className="text-[14px]">{productData?.describtion}</p>
            <div className="flex justify-center items-start flex-col gap-y-2">
              <span className="text-[14px]">Color</span>
              <div className="flex justify-center items-center gap-x-2">
                {productData?.color?.map((item, index) => (
                  <div
                    className={`border-[1px] border-neutral-3 rounded-full w-4 h-4`}
                    style={{ backgroundColor: item }}
                    key={index}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductOrder;
