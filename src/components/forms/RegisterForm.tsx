import { useState } from "react";
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
import { RegisterFormType } from "@types";
// schema
import { registerFormSchema } from "@lib/yupSchema";
// rrd
import { Link, useNavigate } from "react-router-dom";
// api
import { registerUser } from "../../api/index";
// toast
import toast from "react-hot-toast";

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<RegisterFormType>({
        mode: "onChange",
        resolver: yupResolver(registerFormSchema),
    });

    const onSubmit = (data: RegisterFormType) => {
        setIsLoading(true)

        registerUser(data).then(({ data }) => {
            toast.success(data?.message)
            setTimeout(() => {
                navigate("/")
            }, 500)
        }).catch((err) => {
            toast.error(err?.response?.data?.message)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field: { name, onChange, value } }) => (
                    <Input value={value} name={name} type="text" error={!!errors.firstName} onChange={onChange} placeHolder="First Name" disabled={isLoading} />
                )}
            />

            <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field: { name, onChange, value } }) => (
                    <Input value={value} name={name} type="text" error={!!errors.lastName} onChange={onChange} placeHolder="Last Name" className="mt-2" disabled={isLoading} />
                )}
            />

            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field: { name, onChange, value } }) => (
                    <Input value={value} name={name} type="text" error={!!errors.email} onChange={onChange} placeHolder="Email" className="mt-2" disabled={isLoading} />
                )}
            />
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field: { name, onChange, value } }) => (
                    <PasswordInput value={value} name={name} error={!!errors.password} onChange={onChange} placeHolder="Password" className="mt-2" disabled={isLoading} />
                )}
            />

            <div className="flex justify-center gap-x-2 mt-7">
                <p className="text-xs text-black">Already Have an account?</p>
                <Link to="/login">
                    <p className="text-xs text-primary-400">Log In</p>
                </Link>
            </div>

            <Button theme="primary" type="submit" className="mt-8" disabled={!isValid || isLoading}>Register Now</Button>
        </form>

    </>);
}

export default RegisterForm;