import mainHomePageImg from "../assets/images/mainLandingImg.png";
import CartBox from "../components/cart/CartBox";
import Button from "../components/elements/Button";

const HomePage = () => {
  return (
    <>
      <main className="">
        {/* first section */}
        <section className="relative">
          {/* main header img */}
          <div className="w-full h-dvh md:h-[600px]">
            <img
              src={mainHomePageImg}
              alt="main-home-page-image"
              className="object-cover h-full object-[27%_0] w-full"
            />
          </div>
          {/* text & button */}
          <div className="absolute left-0 flex flex-col items-start p-2 md:left bottom-10 gap-y-8 md:left-[108px]">
            <h2 className="font-normal w-[210px] md:w-[300px] md:text-2xl text-xl italic">
              Elegance in simplicity, Earth’s harmony
            </h2>
            <Button>New In</Button>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="px-5 mt-5">
          <h1 className="text-xl font-bold">Best Sellers</h1>
          <div className="mt-2">
            <CartBox
              title="tailored stretch"
              desc="turn it up pants"
              price={180}
              colors={["#748C70", "#7DC3EB", "#0C0C0C"]}
            />
          </div>
        </section>
      </main>

      <div className="h-[400px]"></div>
    </>
  );
};

export default HomePage;
