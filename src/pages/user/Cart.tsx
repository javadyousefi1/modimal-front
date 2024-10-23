import { getAllCartByUser } from "@/api/cart";
import ProtectedRouteWrapper from "@/components/shared/ProtectedRouteWrapper";
import CartBox from "@/components/user/cartPage/CartBox";
import useFetch from "@/hooks/useFetch";
import { Alert, Spin } from "antd";

const Cart = () => {
  // fethc cart data in inital render
  const { data, loading, error } = useFetch(getAllCartByUser);

  const cartData = data?.data?.data;

  // show loading until server response

  return (
    <ProtectedRouteWrapper>
      <section className="px-4">
        {/* title */}
        <h1 className="mt-5 text-xl font-bold text-center">Your cart</h1>
        {loading && (
          <div className="flex flex-col items-center justify-center mt-5 gap-y-4">
            <Spin />
            <p>Getting Cart Info ...</p>
          </div>
        )}
        {/* show message if cart is empty */}
        {cartData?.length === 0 && (
          <Alert message="Your Cart Is Empty" className="mt-5" showIcon />
        )}

        {/* show cart */}

        {cartData?.map((item) => (
          <CartBox
            color={item.color}
            name={item.productName}
            price={item.price}
            bannerUrl={item.bannerUrl}
            count={item.count}
            size={item.size}
          />
        ))}
      </section>
    </ProtectedRouteWrapper>
  );
};

export default Cart;
