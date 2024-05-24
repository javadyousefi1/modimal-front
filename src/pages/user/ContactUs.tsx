import Breadcrumbs from "@/components/shared/Breadcrumbs";
import WriteUS from "@/components/user/contact-us/WriteUS";
import { Button, Drawer } from "antd";
import { useState } from "react";

const ContactUs: React.FC = () => {
  // state for opening drawer of write us
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  let faqBreadcrumbs = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "Contact Us", href: "/contact-us" },
  ];

  const contactUsText = `
  We always love hearing from our customers Please do not hesitate to contact us should you have any questions regarding our products and sizing recommendations or inquiries about your current order.
  <br>
  <br>
  Contact our Customer Care team through the contact form below, email us at hello@modimal.com or live chat with us via our chat widget on the bottom right-hand corner of this page.
  <br>
  <br>
  We will aim to respond to you within 1-2 business days.`;

  const handleOpenDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <div className="container px-5">
      <div className="my-6 ">
        <Breadcrumbs items={faqBreadcrumbs} />
      </div>
      <div className="bg-primary-25 px-4 py-2">
        <p
          className="text-[14px]"
          dangerouslySetInnerHTML={{ __html: contactUsText }}
        ></p>
      </div>
      <Button
      type="text"
        className="w-full mt-4 flex justify-between items-center"
        onClick={handleOpenDrawer}
      >
        <div className="flex justify-start items-center gap-x-2">
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
          <p className="text-[14px] font-semibold">Write Us</p>
        </div>
        <div>
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 10L5.5 5L0.5 0V10Z" fill="#0C0C0C" />
          </svg>
        </div>
      </Button>
      <Drawer
      title="Write Us"
        placement="left"
        closable={true}
        onClose={handleOpenDrawer}
        open={isOpenDrawer}
      >
        <WriteUS/>
      </Drawer>
    </div>
  );
};

export default ContactUs;
