import { useEffect, useState } from "react";
// sidebar component
import SideBarItem from "./SideBarItem";
// framer-motion
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const menus = [
    {
      id: 0,
      title: "Home",
      href: "/admin",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 18v-3M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01Z"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      id: 1,
      title: "Users",
      href: "/admin/users",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 0 1 .16 8.87ZM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Add Product",
      href: "/admin/create-product",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 0 1 .16 8.87ZM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
    },
  ];

  const toggleMobileMenu = () => setIsOpenMobileMenu((prev) => !prev);


  return (
    <>
      {/* desktop */}
      <section className="h-screen bg-primary-50 w-[400px]  flex-col itens-center px-8 hidden md:flex">
        {/* profile section */}
        <div className="flex flex-col items-center gap-y-2">
          {/* user icon */}
          <div className="flex justify-center mt-10 bg-primary-600 w-[30px] h-[30px] items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.14 21.62c-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15.58 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          {/* header */}
          <h1 className="font-semibold text-md text-primary-800">
            Modimal Admin
          </h1>
        </div>

        {/* map on menu */}
        <div className="flex flex-col items-center mt-12 gap-y-2">
          {menus.map((item) => (
            <SideBarItem
              key={item.id}
              href={item.href}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </section>
      {/* mobile */}
      <header className="fixed top-0 left-0 flex items-center justify-between w-full p-4 bg-primary-50 md:hidden z-40">
        {/* profile section */}
        <div className="flex items-center gap-x-2">
          {/* user icon */}
          <div className="flex justify-center  bg-primary-600 w-[30px] h-[30px] rounded-full items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.14 21.62c-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15.58 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58Z"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          {/* header */}
          <h1 className="text-sm font-semibold text-primary-800">
            Modimal Admin
          </h1>
        </div>
        {/* menu */}
        <button
          className="cursor-pointer"
          type="button"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 7h18M3 12h18M3 17h18"
              stroke="var(--color-primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </header>
      {/* mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpenMobileMenu ? "calc(100vh - 62px)" : "0px",
          opacity: isOpenMobileMenu ? 1 : 0,
        }}
        style={{ overflow: "hidden" }}
        variants={{
          open: { opacity: 1, height: "calc(100vh - 62px)" },
          collapsed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
        className="fixed left-0 w-full top-[62px] bg-primary-50"
      >
        {/* map on menu */}
        <div className="flex flex-col items-center mt-12 gap-y-4">
          {menus.map((item) => (
            <SideBarItem
              key={item.id}
              href={item.href}
              title={item.title}
              icon={item.icon}
              closeMenuMobile={() => setIsOpenMobileMenu(false)}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
