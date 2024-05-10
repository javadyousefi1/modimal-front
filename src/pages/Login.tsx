// Register page image
import LoginImage from "@assets/images/register.jpg"
// from
import LoginForm from "@components/user/forms/LoginForm";

const Login: React.FC = () => {

    return (<div className="container w-full md:mt-8 md:px-5">
        <div className="flex flex-col items-center justify-center md:flex-row gap-x-32">
            {/* Register page image */}
            <img src={LoginImage} alt="login" className="h-[218px] w-full md:h-[80vh] md:w-[400px]  object-cover" />
            <div className="w-full md:w-max">
                {/* title */}
                <h1 className="mt-6 font-bold text-center text-black md:text-3xl">Log In</h1>
                <div className="px-5 mt-8 max-w-[392px] md:w-[392px]">

                    <LoginForm />


                </div>
            </div>
        </div>
    </div>);
}

export default Login;