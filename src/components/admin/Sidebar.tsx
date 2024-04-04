import { useEffect, useState } from "react";
// sidebar component
import SideBarItem from "./SideBarItem";
// framer-motion
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const menus = [{ id: 1, title: "users", href: "/admin/users" }];

  const toggleMobileMenu = () => setIsOpenMobileMenu((prev) => !prev);

  useEffect(() => {
    console.log(isOpenMobileMenu);
  }, [isOpenMobileMenu]);

  return (
    <>
      {/* desktop */}
      <section className="h-screen bg-primary-50 w-[400px]  flex-col itens-center px-8 hidden md:flex">
        {/* profile section */}
        <div className="flex flex-col items-center gap-y-2">
          {/* user icon */}
          <div className="flex justify-center mt-10 bg-primary-600 w-[30px] h-[30px] rounded-full items-center">
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.58 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
        <div className="flex flex-col items-center mt-12">
          {menus.map((item) => (
            <SideBarItem key={item.id} href={item.href} title={item.title} />
          ))}
        </div>
      </section>
      {/* mobile */}
      <header className="fixed top-0 left-0 flex items-center justify-between w-full p-4 bg-primary-50 md:hidden ">
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.58 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
              stroke-width="1.5"
              stroke-linecap="round"
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
        className="fixed bottom-0 left-0 w-full bg-primary-50"
      >
        mobile menu
      </motion.div>
    </>
  );
};

export default Sidebar;
