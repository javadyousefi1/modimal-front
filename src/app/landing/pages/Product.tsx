import { getProductApi } from "@/api/product";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ProductSwiper from "@/components/user/productOrder/ProductSwiper";
import { Button, Popover, Select } from "antd";
import { useEffect, useState } from "react";

const ProductOrder: React.FC = () => {
  const [productData, setProductData] = useState();
  const [selectedSize, setSelectedSize] = useState("");
  const productTitle = productData?.productName;
  let faqBreadcrumbs = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "Product", href: "/product" },
    { id: 3, text: productTitle, href: "/contact-us" },
  ];
  const selectOptions = productData?.size.map((size) => ({
    value: size,
    label: size,
  }));

  const popOverContent = [
    "  XS: Typically fits sizes 0-2, offering a slim or close fit.",
    "  S: Suitable for sizes 4-6, providing a slightly looser fit than XS.",
    "  M: Generally fits sizes 8-10, offering a regular fit.",
    "  L: Ideal for sizes 10-12, providing a roomier fit.",
    "  XL: Best for sizes 12-14, offering extra room and comfort.",
  ];
  const finalPopOverContent = popOverContent.map((line, index) => (
    <>
      {line}
      <br />
    </>
  ));

  const popOverTitle = "Understand Basic Measurements";

  useEffect(() => {
    getProductApi().then((res) => setProductData(res.data.data));
  }, []);

  const handleSizeChange = (e) => {
    setSelectedSize(e);
  };

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
          <div className="flex justify-center items-start flex-col gap-y-3 px-5">
            <span className="text-[20px] font-bold ">
              {productData?.productName}
            </span>
            <p className="text-[14px]">{productData?.describtion}</p>
            <div className="w-full flex justify-center items-start flex-col gap-y-2">
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
              <div className="mt-5 w-full flex justify-center items-end flex-col">
                <Popover
                  content={finalPopOverContent}
                  title={popOverTitle}
                  trigger="click"
                >
                  <Button className="!border-none text-[14px] !p-0 text-neutral-6">
                    Size Guide
                  </Button>
                </Popover>
                <Select
                  className="h-11 !w-full !rounded-none placeholder:text-black"
                  placeholder="Size"
                  onChange={handleSizeChange}
                  options={selectOptions}
                />
              </div>
              <div className="w-full">
                <Button
                  type="primary"
                  className="w-full mt-2 !shadow-none !rounded-none"
                  htmlType="submit"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductOrder;
