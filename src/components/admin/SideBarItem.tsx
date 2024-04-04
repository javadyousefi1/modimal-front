import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

type SideBarItemProps = {
  href: string;
  title: string;
};

const SideBarItem: React.FC<SideBarItemProps> = ({ href, title }) => {
  return (
    <Link to={href}>
      <motion.div
        className="py-2 text-white px-4 bg-primary-700 w-[200px] flex gap-x-2 cursor-pointer"
        whileHover={{ scale: 1.03 }} // Scale up by 10% on hover
        transition={{ type: "spring", stiffness: 300, damping: 20 }} // Spring animation
      >
        {/* icon */}
        <span>
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
        </span>
        {/* text */}
        <span className="text-sm">{title}</span>
      </motion.div>
    </Link>
  );
};

export default SideBarItem;
