import { useState } from "react";
// inputs
import PasswordInput from "@components/user/inputs/PasswordInput";
import Input from "@components/user/inputs/Input";
// button
import Button from "@components/shared/Button";
// hook form
import { useForm, Controller } from "react-hook-form";
// yup
import { yupResolver } from "@hookform/resolvers/yup";
// types
import { LoginFormType } from "@types";
// schema
import { loginFormSchema } from "@lib/yupSchema";
// rrd
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/index";
// toast
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../features/auth";
import { AppDispatch } from "src/store/store";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormType>({
    mode: "onChange",
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginFormType) => {
    setIsLoading(true);

    loginUser(data)
      .then(({ data }) => {
        // save user data in redux
        dispatch(setUserData(data.data));
        // show toast
        toast.success(data?.message);
        // redirect user
        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { name, onChange, value } }) => (
            <Input
              value={value}
              name={name}
              type="text"
              error={!!errors.email}
              onChange={onChange}
              placeHolder="Email"
              className="w-full mt-2"
              disabled={isLoading}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { name, onChange, value } }) => (
            <PasswordInput
              value={value}
              name={name}
              error={!!errors.password}
              onChange={onChange}
              placeHolder="Password"
              className="w-full mt-2"
              disabled={isLoading}
            />
          )}
        />

        <Button
          theme="primary"
          type="submit"
          className="mt-8"
          disabled={!isValid || isLoading}
        >
          Log In
        </Button>

        <div className="flex justify-center gap-x-2 mt-7">
          <p className="text-xs text-black">New to modimal?</p>
          <button type="button" disabled={isLoading}>
            <Link to="/register">
              <p className="text-xs text-primary-400">create an account</p>
            </Link>
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
