import RegisterImage from "@assets/images/register.jpg"
import Input from "@components/inputs/Input";
import { useState } from "react";
const Register = () => {

    const [value, setValue] = useState("")

    return (<>
        <img src={RegisterImage} alt="regiser" className="h-[218px] w-full object-cover" />
        <h1 className="mt-6 font-bold text-center text-black">Create Account</h1>
        <div className="px-5 mt-8">

            <Input name="login" type="text" onChange={(e) => setValue(e.target.value)} placeHolder="First Name" />
        </div>
    </>);
}

export default Register;