import { getProductApi } from "@/api/product"
import Breadcrumbs from "@/components/shared/Breadcrumbs"
import ProductSwiper from "@/components/user/productOrder/ProductSwiper"
import { useEffect, useState } from "react"

const ProductOrder: React.FC = () => {
const [productData, setProductData] = useState()
const productTitle = productData?.productName
let faqBreadcrumbs = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "Product", href: "/product" },
    { id: 3, text: productTitle, href: "/contact-us" },
  ];

    useEffect(() => {
        getProductApi()
        .then((res) => setProductData(res.data.data))
    }, [])

  return (
    <div className="container ">
        <div className="my-6 px-5">
        <Breadcrumbs items={faqBreadcrumbs} />
      </div>
      <div className="!p-0">
      <ProductSwiper/>
      </div>
    </div>
  )
}

export default ProductOrder