// elements
import Button from "@components/shared/Button";
// rrd
import { Link } from "react-router-dom";
// silder
import ModiWeekSlider from "@components/user/sliders/ModiWeekSlider";
import BestSellerSlider from "@components/user/sliders/BestSellerSlider";
// mainHomePage image
import mainHomePageImg from "@assets/images/mainLandingImg.png";
// sustainability image
import sustainability from "@assets/images/sustainability.jpg";
// follow us image
import followUs1 from "@assets/images/followUs(1).jfif";
import followUs2 from "@assets/images/followUs(2).jfif";
import followUs3 from "@assets/images/followUs(3).jfif";
import followUs4 from "@assets/images/followUs(4).jfif";
import followUs5 from "@assets/images/followUs(5).jfif";
// collection image
import collection1 from "@assets/images/collection1.jfif";
import collection2 from "@assets/images/collection2.png";
import collection3 from "@assets/images/collection3.png";
import collection4 from "@assets/images/collection4.png";
import ChildrenModal from "@components/user/modal/ChildrenModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const HomePage: React.FC = () => {
  const { userData } = useSelector((state: RootState) => state.usersSlice);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const registerQuery = urlParams.get("register");

  const [IsshowEmailVerification, setIsShowEmailVerification] = useState(
    !!registerQuery
  );

  return (
    <>
      {/* verify modal */}
      {registerQuery && (
        <ChildrenModal
          isVisible={IsshowEmailVerification}
          handleCloseModal={() => {
            setIsShowEmailVerification(false);
          }}
        >
          <div className="max-w-[300px]">
            <h1 className="font-bold text-center text-black">
              Verify your Email
            </h1>
            <p className="mt-4 text-xs font-normal text-center">
              We’ve sent an email to {userData?.email} to verify your email
              address and activate your account. the link in the email will
              expire in 24 hours.
            </p>
            <p className="mt-4 text-xs font-normal text-center">
              <Link to="">
                <span className="text-primary">Click here</span>
              </Link>{" "}
              <span>
                if you did not receive an email or would like to change the
                email address you registered with.
              </span>
            </p>
          </div>
        </ChildrenModal>
      )}

      <main className="">
        {/* first section */}
        <section className="relative">
          {/* main header img */}
          <div className="w-full h-screen md:h-[calc(100vh-91px)]">
            <img
              src={mainHomePageImg}
              alt="main-home-page-image"
              className="object-cover h-full object-[27%_0] w-full"
            />
          </div>

          {/* text & button */}
          <div className="container relative">
            <div className="absolute left-0 flex flex-col items-start p-2 md:left bottom-10 gap-y-8 md:left-[108px]">
              <h2 className="font-normal w-[210px] md:w-[300px] md:text-2xl text-xl italic">
                Elegance in simplicity, Earth’s harmony
              </h2>
              <Button className="w-[93px] !px-3 md:w-[200px]">New In</Button>
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="px-5 mt-5 md:px-[108px] container">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Best Sellers</h1>
            <Link to="">
              <button>
                <span className="hidden text-xs md:block text-primary-600">
                  View All
                </span>
              </button>
            </Link>
          </div>
          <BestSellerSlider />
        </section>

        {/* Collection */}
        <section className="px-5 mt-5 md:px-[108px] container">
          <h1 className="mb-2 text-xl font-bold">Collection</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-between md:gap-y-11 gap-y-4">
              <div className="relative w-full col-span-1 row-span-3">
                <img
                  src={collection3}
                  alt=""
                  className="h-[15vh] md:h-[60vh] w-full object-cover"
                />
                <div className="md:absolute bottom-2 right-2">
                  <Link to="">
                    <Button>Boluses</Button>
                  </Link>
                </div>
              </div>

              <div className="relative w-full col-span-1 row-span-7">
                <img
                  src={collection2}
                  alt=""
                  className="h-[55vh] md:h-[120vh] w-full object-cover"
                />
                <div className="md:absolute bottom-2 right-2">
                  <Link to="">
                    <Button>dresses</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-y-4 md:gap-y-11">
              <div className="relative w-full col-span-1 row-span-3">
                <img
                  src={collection4}
                  alt=""
                  className="h-[55vh] md:h-[120vh] w-full object-cover"
                />
                <div className="md:absolute bottom-2 left-2">
                  <Link to="">
                    <Button>Pants</Button>
                  </Link>
                </div>
              </div>

              <div className="relative w-full col-span-1 row-span-7">
                <img
                  src={collection1}
                  alt=""
                  className="h-[15vh] md:h-[60vh] w-full object-cover"
                />
                <div className="md:absolute bottom-2 right-2">
                  <Link to="">
                    <Button>outwears</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* modi week */}
        <section className="px-5 mt-[88px] md:px-[108px] container">
          <h1 className="mb-4 text-xl font-bold">Modiweek </h1>
          <ModiWeekSlider />
        </section>

        {/* sustainability */}
        <section className="mt-[28px] overflow-hidden">
          <div className="relative w-screen ">
            <img
              src={sustainability}
              alt="sustainability"
              className="object-cover object-right h-[360px] w-full"
            />
            {/* text */}
            <div className="absolute flex flex-col items-center justify-center gap-y-4 md:gap-y-2 bottom-5 md:bottom-2 md:right-10">
              <p className="text-sm text-center text-primary-800 md:text-lg md:w-[450px] md:text-left">
                Stylish sustainability in clothing promotes eco-friendly choices
                for a greater future
              </p>
              <Link to="" className="self-end mr-4">
                <Button>sustainability</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* follow us */}
        <section className="px-5  md:px-[108px] container">
          <h1 className="mt-4 mb-2 text-xl font-bold">Follow us @modimal </h1>

          <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-[minmax(100px,_1fr)_330px_330px] ">
            <div className="hidden col-span-1 row-span-3 lg:block">
              <img
                src={followUs1}
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
            <div>
              <img
                src={followUs5}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src={followUs4}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src={followUs2}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <img
                src={followUs3}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
