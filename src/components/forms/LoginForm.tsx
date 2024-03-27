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
import { LoginFormType } from "@types";
// schema
import { loginFormSchema } from "@lib/yupSchema";
// rrd
import { Link } from "react-router-dom";

const LoginForm = () => {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm<LoginFormType>({
        mode: "onChange",
        resolver: yupResolver(loginFormSchema),
    });

    const onSubmit = (data: LoginFormType) => console.log(data)

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>

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

            <Button theme="primary" type="submit" className="mt-8" disabled={!isValid}>Log In</Button>

            <div className="flex justify-center gap-x-2 mt-7">
                <p className="text-xs text-black">New to modimal?</p>
                <Link to="/register">
                    <p className="text-xs text-primary-400">create an account</p>
                </Link>
            </div>
        </form>

    </>);
}

export default LoginForm;