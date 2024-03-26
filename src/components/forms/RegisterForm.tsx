// inputs
import PasswordInput from "@components/inputs/PasswordInput";
import Input from "@components/inputs/Input";
// button
import Button from "@components/elements/Button";
// hook form
import { useForm, Controller } from 'react-hook-form';
// yup
import { yupResolver } from '@hookform/resolvers/yup';
// types 
import { RegisterFormType } from "@types/index";
// schema
import { registerFormSchema } from "@lib/yupSchema";
// rrd
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<RegisterFormType>({
        mode: "onChange",
        resolver: yupResolver(registerFormSchema),
    });
    
    const onSubmit = (data: RegisterFormType) => console.log(data)

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field: { name, onChange, value } }) => (
                    <Input value={value} name={name} type="text" error={!!errors.firstName} onChange={onChange} placeHolder="First Name" />
                )}
            />

            <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field: { name, onChange, value } }) => (
                    <Input value={value} name={name} type="text" error={!!errors.lastName} onChange={onChange} placeHolder="Last Name" className="mt-2" />
                )}
            />

            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field: { name, onChange, value } }) => (
                    <Input value={value} name={name} type="text" error={!!errors.email} onChange={onChange} placeHolder="Email" className="mt-2" />
                )}
            />
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field: { name, onChange, value } }) => (
                    <PasswordInput value={value} name={name} error={!!errors.password} onChange={onChange} placeHolder="Password" className="mt-2" />
                )}
            />

            <div className="flex justify-center gap-x-2 mt-7">
                <p className="text-xs text-black">Already Have an account?</p>
                <Link to="">
                    <p className="text-xs text-primary-400">Log In</p>
                </Link>
            </div>

            <Button theme="primary" type="submit" className="mt-8" disabled={!isValid}>Register Now</Button>
        </form>

    </>);
}

export default RegisterForm;