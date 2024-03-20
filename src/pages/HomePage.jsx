import mainHomePageImg from "../assets/images/mainLandingImg.png";
import Button from "../components/elements/Button";

const HomePage = () => {
  return (
    <>
      <section className="">
        {/* first section */}
        <div className="relative">
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
        </div>
      </section>
    </>
  );
};

export default HomePage;
