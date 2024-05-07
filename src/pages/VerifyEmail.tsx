import VerifyEmailForm from "@components/forms/VerifyEmailForm";

const VerifyEmail = () => {
  return (
    <div className="px-6">
      <h1 className="mt-4 text-lg font-bold text-center text-primary">
        VerifyEmail
      </h1>
      <p className="text-xs text-center text-neutral-600">
        Please Enter Your Verify Code into this field{" "}
      </p>

      <VerifyEmailForm />
    </div>
  );
};

export default VerifyEmail;
