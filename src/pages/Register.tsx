// Register page image
import RegisterImage from "@assets/images/register.jpg"
// from
import RegisterForm from "@components/forms/RegisterForm";
const Register = () => {


    return (<>
        {/* Register page image */}
        <img src={RegisterImage} alt="regiser" className="h-[218px] w-full object-cover" />
        {/* title */}
        <h1 className="mt-6 font-bold text-center text-black">Create Account</h1>
        <div className="px-5 mt-8">

            <RegisterForm />

            <p className="text-black text-[10px] text-center mt-2 mb-6">
                by clicking register now’’you agree to
                <span className="text-primary text-[10px] ml-1"> Terms & Conditions</span>
                <span className="mx-2">And</span>
                <span className="text-primary text-[10px]">Privacy Policy</span>
            </p>

        </div>
    </>);
}

export default Register;