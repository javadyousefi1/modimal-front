import image from "@assets/images/register.jpg";
const Main = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <img src={image} className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-cover" />
        <h1 className="mt-4 font-bold text-center text-black text-md md:text-lg">
          welcome To Modimal Panel Admin
        </h1>
      </div>
    </>
  );
};

export default Main;
