// api
import { logout } from "@/api";
// antd
import { Tag } from "antd";
import Alert from "antd/es/alert/Alert";
import { Button, Popconfirm } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
// toast
import toast from "react-hot-toast";
// redux
import { AppDispatch, RootState } from "@/store/store";
import { logout as logOutUser } from "@/features/auth";
import { useDispatch, useSelector } from "react-redux";
// rrd
import { useNavigate } from "react-router-dom";
// components
import ProfileMenuItem from "./ProfileMenuItem";

const ProfileSidebar = () => {
  // redux
  const { userData } = useSelector((state: RootState) => state.usersSlice);
  const dispatch = useDispatch<AppDispatch>();
  // rrd
  const navigate = useNavigate();
  // logout handler
  const handleLogOut = () => {
    logout()
      .then(({ data }) => {
        toast.success(data.message);
        dispatch(logOutUser());
        navigate("/");
      })
      .catch(() => toast.error("logout failed"));
  };
  
  const profileMenuList = [
    {
      id: 0,
      href: "/profile/verfiy-email",
      isVisible: !userData?.isVerify,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17.98 10.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
            stroke="var(--color-primary)"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M21.98 6.79v4c0 2.94-1.35 4.52-4.04 4.75.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79h-6.4c-.26 0-.51.01-.75.04C6.27 3.35 7.86 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
            stroke="var(--color-primary)"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M13.495 13.25h.01M9.995 13.25h.01M6.495 13.25h.01"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "Verify Email",
    },
    {
      id: 1,
      href: "/profile/verfiy-email",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M16.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM8.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM9 8h12"
            stroke="var(--color-primary)"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      ),
      title: "My Orders",
    },
  ];

  return (
    <aside className="w-full md:max-w-72">
      {/* detail */}
      {/* profile summery */}
      <div className="flex items-center justify-between w-full">
        {/* user name */}
        <div className="flex flex-col">
          <span>
            {userData?.firstName + " " + userData?.lastName}{" "}
            <span>
              {userData?.isVerify ? (
                <Tag color="success">verify</Tag>
              ) : (
                <Tag color="error">not verify</Tag>
              )}
            </span>
          </span>
          <span className="text-xs text-neutral-500">{userData?.email}</span>
        </div>
        {/* edit profile icon */}
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                stroke="var(--color-primary)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="m19.21 15.74-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z"
                stroke="var(--color-primary)"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22"
                stroke="var(--color-primary)"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.41 22c0-3.87 3.85-7 8.59-7 1.04 0 2.04.15 2.97.43"
                stroke="var(--color-primary)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      {/* is verify warn */}
      {!userData?.isVerify && (
        <Alert
          message="For better user experience it is good to verify your email first"
          banner
          className="mt-4"
        />
      )}
      <div className="w-full mt-4 ">
        {/* menus */}
        {profileMenuList.map((menu, index) => (
          <ProfileMenuItem key={index} {...menu} />
        ))}
      </div>
      {/* logout */}
      <Popconfirm
        title="Log out?"
        description="Are you sure to delete this task?"
        okText="Yes"
        cancelText="No"
        placement="topRight"
        style={{ backgroundColor: "grey", borderColor: "grey" }}
        onConfirm={handleLogOut}
        className="mt-4"
      >
        <Button danger icon={<PoweroffOutlined />}>
          Log out
        </Button>
      </Popconfirm>
    </aside>
  );
};

export default ProfileSidebar;
