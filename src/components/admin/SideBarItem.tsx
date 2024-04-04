import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type SideBarItemProps = {
  href: string;
  title: string;
  icon: ReactNode;
  closeMenuMobile?: () => void;
};

const SideBarItem: React.FC<SideBarItemProps> = ({
  href,
  title,
  icon,
  closeMenuMobile,
}) => {
  return (
    <Link to={href} onClick={closeMenuMobile}>
      <motion.div
        className="py-2 text-white px-4 bg-primary-700 w-[200px] flex gap-x-2 cursor-pointer"
        whileHover={{ scale: 1.03 }} // Scale up by 10% on hover
        transition={{ type: "spring", stiffness: 300, damping: 20 }} // Spring animation
      >
        {/* icon */}
        <span>{icon}</span>
        {/* text */}
        <span className="text-sm">{title}</span>
      </motion.div>
    </Link>
  );
};

export default SideBarItem;
