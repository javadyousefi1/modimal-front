import VerifyEmailForm from "@components/user/forms/VerifyEmailForm";
// Register page image
import verifyEmail from "@assets/images/register.jpg";
// redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Spin } from "antd";
import ProtectedRouteWrapper from "@/components/shared/ProtectedRouteWrapper";
import { resendEmailVerifyCode } from "@/api";
import toast from "react-hot-toast";
import Button from "@/components/shared/Button";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { userData, loading } = useSelector(
    (state: RootState) => state.usersSlice
  );

  const handleResendEmail= () => {
    resendEmailVerifyCode({email: userData?.email})
    .then((data) => {
      toast(data)
    })
    .catch((e) => toast(e))
  }

  // redirect user to profile page if is user already verify
  // useEffect(() => {
  //   if (userData?.isVerify) {
  //     navigate("/profile");
  //   }
  // }, [userData,loading]);

  // dont show any jsx and show loading if user already verify
  // if (loading || !userData?.isVerify) {
  //   return (
  //     <div className="container flex flex-col items-start min-h-screen px-6 mt-4 bg-red-400 max-w-7xl md:px-0">
  //       <Spin spinning={loading} fullscreen />
  //     </div>
  //   );
  // }
  // console.log(loading, "loading");
  // console.log(userData?.isVerify, "userData?.isVerify");

  return (
    <ProtectedRouteWrapper>
      <div className="container md:mt-8 md:px-5">
        <div className="flex flex-col items-center justify-center md:flex-row gap-x-32">
          {" "}
          <img
            src={verifyEmail}
            alt="regiser"
            className="h-[218px] w-full md:h-[80vh] md:w-[400px]  object-cover "
          />
          <div className="flex flex-col items-center justify-center px-6">
            {/* icon */}
            <div className="flex justify-center mt-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.98 10.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21.98 6.79v4c0 2.94-1.35 4.52-4.04 4.75.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79h-6.4c-.26 0-.51.01-.75.04C6.27 3.35 7.86 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M13.495 13.25h.01M9.995 13.25h.01M6.495 13.25h.01"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
            {/* title */}
            <h1 className="mt-1 text-lg font-bold text-center text-primary">
              VerifyEmail
            </h1>
            <p className="text-xs text-center text-neutral-600">
              Please Enter Your Verify Code into this field{" "}
            </p>
            <div className="mt-4">
              <VerifyEmailForm />
            </div>
              <Button className="hover:text-primary-200" onClick={handleResendEmail}>
                if your verification is not success, click here
              </Button>
          </div>
        </div>
      </div>
    </ProtectedRouteWrapper>
  );
};

export default VerifyEmail;
