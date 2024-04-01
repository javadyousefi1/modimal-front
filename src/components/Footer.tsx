import Input from "./inputs/Input";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center flex-col bg-neutral-8 mt-6 py-8 px-5">
        <p className="text-center text-white text-[14px] min-w-max">
          Join our club, get 15% off for your Birthday
        </p>
        <div className="w-full">
          <div className="w-full relative">
            <Input
              placeHolder="Enter Your Email Address"
              name="joinClubEmailAddress"
              type="email"
              className="w-full h-10 bg-transparent border-[1px] border-primary-50 mt-4 placeholder:text-[12px] placeholder:text-neutral-4"
            />
            <div className="absolute top-7 right-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99935 2.66699L7.05935 3.60699L10.7793 7.33366H2.66602V8.66699H10.7793L7.05935 12.3937L7.99935 13.3337L13.3327 8.00033L7.99935 2.66699Z"
                  fill="#D1D9CF"
                />
              </svg>
            </div>
          </div>
          <div></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
