// Register page image
import RegisterImage from "@assets/images/register.jpg";
// from
import RegisterForm from "@components/user/forms/RegisterForm";
const Register: React.FC = () => {
  return (
    <div className="container md:mt-8 md:px-5">
      <div className="flex flex-col items-center justify-center md:flex-row gap-x-32">
        {/* Register page image */}
        <img
          src={RegisterImage}
          alt="regiser"
          className="h-[218px] w-full md:h-[80vh] md:w-[400px]  object-cover"
        />
        <div>
          {/* title */}
          <h1 className="mt-6 font-bold text-center text-black md:text-3xl">
            Create Account
          </h1>
          <div className="px-5 mt-8 max-w-[392px]">
            <RegisterForm />

            <p className="text-black text-[10px] text-center mt-2 mb-6">
              by clicking register now’’you agree to
              <span className="text-primary text-[10px] ml-1">
                {" "}
                Terms & Conditions
              </span>
              <span className="mx-2">And</span>
              <span className="text-primary text-[10px]">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
