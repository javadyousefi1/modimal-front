import { useState } from "react";
// framer-motion
import { motion } from "framer-motion";
import { Button } from "antd";

type BoxPropType = {
  children?: React.ReactNode;
  title: string;
  icon: JSX.Element;
};

const ContactUSCollapse: React.FC<BoxPropType> = ({
  children,
  title,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const plusIcon = (
    <svg
      width="14"
      height="16"
      viewBox="-2 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6654 8.66683H8.66536V12.6668H7.33203V8.66683H3.33203V7.3335H7.33203V3.3335H8.66536V7.3335H12.6654V8.66683Z"
        fill="#0C0C0C"
      />
    </svg>
  );

  const minIcon = (
    <svg
      width="16"
      height="17"
      viewBox="-4 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 7.8335H12V9.16683H4V7.8335Z" fill="#748C70" />
    </svg>
  );

  return (
    <>
      <div className="w-full cursor-pointer mt-[1px]">
        <div
          className="w-full flex items-center justify-between bg-primary-50 py-4 px-2"
          onClick={handleToggleOpen}
        >
          {/* title */}
          <div className="flex justify-center items-center flex-row-reverse gap-x-2">
            <div className="text-xs md:text-xl md:font-bold font-semibold">
              {title}
            </div>
            <div>{icon}</div>
          </div>
          <div className="flex justify-center items-center">
            <div>{isOpen ? minIcon : plusIcon}</div>
          </div>
        </div>
        {/* children */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : "0px", opacity: isOpen ? 1 : 0 }}
          style={{ overflow: "hidden" }}
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
        >
            <div className="bg-primary-50">
          {children}
            </div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUSCollapse;
