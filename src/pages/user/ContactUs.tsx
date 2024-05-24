import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CollapseContent from "@/components/user/contact-us/CollapseContent";
import ContactUSCollapse from "@/components/user/contact-us/ContactUSCollapse";
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

  const collapseBox = [
    {
      id: 1,
      title: "Chat With Us/Extend",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2H18V14H3.17L2 15.17V2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0H2ZM4 10H12V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z"
            fill="#0C0C0C"
          />
        </svg>
      ),
      button: "Start Chat",
      description: "We are here and ready to chat",
      click: () => alert("biaaaaaaaa")
    },
    {
      id: 2,
      title: "Call Us",
      icon: (
        <svg
          width="21"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H22C23.1 18 23.99 17.1 23.99 16L24 2C24 0.9 23.1 0 22 0ZM22 16H2V2H22V16ZM19.01 14.99L21 13L19.49 11H17.85C17.63 10.37 17.5 9.7 17.5 9C17.5 8.3 17.63 7.63 17.85 7H19.49L21 5L19.01 3.01C17.7 3.99 16.73 5.38 16.28 7C16.1 7.64 16 8.31 16 9C16 9.69 16.1 10.36 16.28 11C16.73 12.61 17.7 14.01 19.01 14.99ZM9 9C10.65 9 12 7.65 12 6C12 4.35 10.65 3 9 3C7.35 3 6 4.35 6 6C6 7.65 7.35 9 9 9ZM9 5C9.55 5 10 5.45 10 6C10 6.55 9.55 7 9 7C8.45 7 8 6.55 8 6C8 5.45 8.45 5 9 5ZM15 13.59C15 11.09 11.03 10.01 9 10.01C6.97 10.01 3 11.09 3 13.59V15H15V13.59ZM5.48 13C6.22 12.5 7.7 12 9 12C10.3 12 11.77 12.49 12.52 13H5.48Z"
            fill="#0C0C0C"
          />
        </svg>
      ),
      button: "+1(929)460-3208",
      description: "We're here to Talk to You",
      click: () => alert("biaaaaaaaa")
    },
    {
      id: 3,
      title: "Email Us",
      icon: (
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
      ),
      button: "Send Email",
      description: "You are welcome to send us an email",
      click: () => alert("biaaaaaaaa")
    },
  ];

  const handleOpenDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  const handleChat = () => {
    alert("biaaaaaaaaaaaaaaaa");
  };

  return (
    <div className="container px-5">
      <div className="my-6 ">
        <Breadcrumbs items={faqBreadcrumbs} />
      </div>
      <h1 className="text-[24px] font-bold">Contact US</h1>
      <div className="bg-primary-25 px-4 py-2 mt-2">
        <p
          className="text-[14px]"
          dangerouslySetInnerHTML={{ __html: contactUsText }}
        ></p>
      </div>
      {/* write us for mobile design */}
      <Button
        type="text"
        className="w-full mt-4 flex justify-between items-center !py-5 !px-2 !rounded-none md:hidden"
        onClick={handleOpenDrawer}
      >
        <div className="flex justify-start items-center gap-x-2">
          {/* write us icon */}
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
        {/* arrow icon */}
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
      {/* drawer of write us for mobile design */}
      <Drawer
        title="Write Us"
        placement="left"
        closable={true}
        onClose={handleOpenDrawer}
        open={isOpenDrawer}
      >
        <WriteUS />
      </Drawer>
      {/* write us for desktop */}
      <div className="w-full hidden mt-5 md:flex md:justify-center md:items-center">

      <div className="w-3/4 pb-20">
        <WriteUS desktop/>
      </div>
      </div>
      {/* mobile design of collapses */}
      <div className="md:hidden">
      {collapseBox.map((item) => (
    <ContactUSCollapse
        icon={item.icon}
        title={item.title}
        key={item.id}
    >
        <CollapseContent button={item.button} description={item.description} onClick={item.click} />
    </ContactUSCollapse>
))}
      </div>
      {/* desktop design of boxes */}
      <div className="hidden md:flex w-full justify-center items-center gap-x-6">
      {collapseBox.map((item) => (
    <div className="w-full flex justify-center items-center flex-col gap-y-4 bg-primary-25 p-4">
    <div>{item.icon}</div>
        <p className="text-[16px] font-bold">{item.title}</p>
        <CollapseContent button={item.button} description={item.description} onClick={item.click} />
    </div>
))}
      </div>
    </div>
  );
};

export default ContactUs;
