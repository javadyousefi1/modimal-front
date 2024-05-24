import { Button, Checkbox, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller, useForm } from "react-hook-form";

const WriteUS: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onsubmit)}>
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
              {errors?.fullName?.message}
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
            <p className="text-[12px] text-error h-4">
              {errors?.email?.message}
            </p>
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
              {errors?.orderNumber?.message}
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
              {errors?.message?.message}
            </p>
          ) : (
            <p className="h-4"> </p>
          )}
        {/* privacy */}
        <div className="w-full flex justify-between items-center flex-row-reverse gap-x-2">
          <p className="text-[10px]">I have read and understood the contact us privacy and policy.</p>
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
                maxLength={30}
                variant="borderless"
              />
            )}
          />
        </div>
          {errors.privacy ? (
            <p className="text-[12px] text-error h-4">
              {errors?.privacy?.message}
            </p>
          ) : (
            <p className="h-4"> </p>
          )}
        <Button type="primary" className="w-full mt-10 !shadow-none" htmlType="submit">Send</Button>
      </form>
    </div>
  );
};

export default WriteUS;
