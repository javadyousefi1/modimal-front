import { Input } from "antd";
// hook form
import { useForm, Controller } from "react-hook-form";
// components
import Button from "@components/shared/Button.tsx";
// schema
import { verifyEmailSchema } from "@lib/yupSchema";
// yup
import { yupResolver } from "@hookform/resolvers/yup";
// toast
import toast from "react-hot-toast";
// api
import { verifyUserEmail } from "../../../api/profile.ts";
// redux
import { useDispatch, useSelector } from "react-redux";
// store
import { AppDispatch, RootState } from "../../../store/store.ts";
// redux fundtion
import { setUserData } from "../../../features/auth.ts";
// rrd
import { useNavigate } from "react-router-dom";

const VerifyEmailForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { userData } = useSelector((state: RootState) => state.usersSlice);
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(verifyEmailSchema),
  });

  const onSubmit = (data: { otp: string }) => {
    // const loading = toast.loading("validating your email...");

    verifyUserEmail({ verifyCode: data.otp, email: userData?.email })
      .then(({ data }) => {
        toast.success("your account verified ");
        dispatch(setUserData(data?.userData));
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:w-[313px] flex flex-col items-center justify-center">
          <Controller
            name="otp"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input.OTP
                formatter={(str) => str.toUpperCase()}
                {...field}
                onChange={(text) => field.onChange(text)}
              />
            )}
          />
          <Button
            theme="primary"
            className="mt-3 "
            type="submit"
            disabled={!isValid}
          >
            Confirm
          </Button>
        </div>
      </form>
    </>
  );
};

export default VerifyEmailForm;
