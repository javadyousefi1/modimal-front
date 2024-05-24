import { Button, Checkbox, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller, useForm } from "react-hook-form";

type WriteUSPropType = {
    desktop?: boolean;
  };

const WriteUS: React.FC<WriteUSPropType> = ({desktop}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onsubmit = (data: object) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onsubmit)}>
        {desktop && (
          <div className="py-4 flex justify-center items-start flex-col gap-y-8">
            <div className="flex justify-end items-center flex-row-reverse gap-x-2">
              <h2 className="text-[24px] font-bold">Write Us</h2>
              <div>
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                    fill="#0C0C0C"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-[20px] font-bold">Your Information</h2>
          </div>
        )}
        {/* fullName */}
        <div className="w-full border-b-[1px] border-neutral-7">
          <Controller
            rules={{
              required: {
                value: true,
                message: "Full Name is required",
              },
            }}
            control={control}
            name="fullName"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Full Name"
                className="h-8 placeholder:text-neutral-6 placeholder:text-[12px]"
                onChange={onChange}
                value={value}
                maxLength={30}
                variant="borderless"
              />
            )}
          />
        </div>
        {errors.fullName ? (
          <p className="text-[12px] text-error h-4">
            {!!errors?.fullName?.message}
          </p>
        ) : (
          <p className="h-4"> </p>
        )}
        {/* email */}
        <div className="w-full border-b-[1px] border-neutral-7">
          <Controller
            rules={{
              required: {
                value: true,
                message: "Email is required",
              },
            }}
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Email"
                className="h-8 placeholder:text-neutral-6 placeholder:text-[12px]"
                onChange={onChange}
                value={value}
                maxLength={30}
                variant="borderless"
              />
            )}
          />
        </div>
        {errors.email ? (
          <p className="text-[12px] text-error h-4">{!!errors?.email?.message }</p>
        ) : (
          <p className="h-4"> </p>
        )}
        {/* Order Number */}
        <div className="w-full border-b-[1px] border-neutral-7">
          <Controller
            control={control}
            name="orderNumber"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Order Number"
                className="h-8 placeholder:text-neutral-6 placeholder:text-[12px]"
                onChange={onChange}
                value={value}
                maxLength={30}
                variant="borderless"
              />
            )}
          />
        </div>
        {errors.orderNumber ? (
          <p className="text-[12px] text-error h-4">
            {!!errors?.orderNumber?.message}
          </p>
        ) : (
          <p className="h-4"> </p>
        )}
        {/* message */}
        <div className="w-full border-b-[1px] border-neutral-7">
          <Controller
            rules={{
              required: {
                value: true,
                message: "Message is required",
              },
            }}
            control={control}
            name="message"
            render={({ field: { onChange, value } }) => (
              <TextArea
                placeholder="Message"
                className="h-8 placeholder:text-neutral-6 placeholder:text-[12px]"
                onChange={onChange}
                value={value}
                variant="borderless"
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
            )}
          />
        </div>
        {errors.message ? (
          <p className="text-[12px] text-error h-5">
            {!!errors?.message?.message}
          </p>
        ) : (
          <p className="h-4"> </p>
        )}
        {/* privacy */}
        <div className="w-full flex justify-between items-center flex-row-reverse gap-x-2 md:justify-end">
          <p className="text-[10px]">
            I have read and understood the contact us privacy and policy.
          </p>
          <Controller
            rules={{
              required: {
                value: true,
                message: "accept our privacy",
              },
            }}
            control={control}
            name="privacy"
            render={({ field: { onChange, value } }) => (
              <Checkbox
                className="h-8"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>
        {errors.privacy ? (
          <p className="text-[12px] text-error h-4">
            {!!errors?.privacy?.message}
          </p>
        ) : (
          <p className="h-4"> </p>
        )}
        <div className="w-full md:flex md:justify-end md:items-center">
        <Button
          type="primary"
          className="w-full mt-10 !shadow-none md:w-64 !rounded-none"
          htmlType="submit"
        >
          Send
        </Button>
        </div>
      </form>
    </div>
  );
};

export default WriteUS;
