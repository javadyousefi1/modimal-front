// type
import { type ReactNode } from "react";
// rrd
import { Link } from "react-router-dom";
import { Badge, } from 'antd';

const ProfileMenuItem: React.FC<{
  href: string;
  title: string;
  icon: ReactNode;
}> = ({ title, icon, href }) => {
  return (
    <Link to={href} className="w-full">
      <div className="border-b-[1px] border-neutral-300 py-3 flex items-center gap-x-2">
        {/* icon */}
        <span>{icon}</span>
        {/* text */}
        <span className="text-xs">{title}</span>
        {/* arrow */}
        <span className="flex-1">
          <svg
            className="float-right"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="var(--color-neutral-6)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1.5"
              d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
            ></path>
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default ProfileMenuItem;
