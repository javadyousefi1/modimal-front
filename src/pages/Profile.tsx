// redux
import { useSelector } from "react-redux";
// store
import { RootState } from "../store/store";
// rrd
import { useNavigate } from "react-router-dom";
import { Tag } from "antd";
import ProfileMenuItem from "@components/profile/ProfileMenuItem";

import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const Profile = () => {
  const { loggedIn, loading, userData } = useSelector(
    (state: RootState) => state.usersSlice
  );

  const profileMenuList = [
    {
      id: 0,
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
            d="M17.98 10.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.924.924 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
            stroke="var(--color-primary)"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21.98 6.79v4c0 2.94-1.35 4.52-4.04 4.75.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79h-6.4c-.26 0-.51.01-.75.04C6.27 3.35 7.86 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
            stroke="var(--color-primary)"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13.495 13.25h.01M9.995 13.25h.01M6.495 13.25h.01"
            stroke="var(--color-primary)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
      title: "Verify Email",
    },
  ];

  const navigate = useNavigate();

  if (!loading && !loggedIn) {
    navigate("/");
    return;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen mt-4">
        <h4 className="text-lg">loading</h4>
      </div>
    );
  }

  if (!userData) {
    navigate("/");
  }

  return (
    <div className="flex flex-col items-start min-h-screen px-6 mt-4">
      {/* detail */}

      {/* profile summery */}
      <div className="flex items-center justify-between w-full">
        {/* user name */}
        <div className="flex flex-col">
          <span>
            {userData?.firstName + " " + userData?.lastName}{" "}
            <span>
              {userData?.isVerify ? (
                <Tag color="success" icon={<CheckCircleOutlined />}>
                  verify
                </Tag>
              ) : (
                <Tag color="error" icon={<CloseCircleOutlined />}>
                  not verify
                </Tag>
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
                stroke-miterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22"
                stroke="var(--color-primary)"
                strokeWidth="1.5"
                stroke-miterlimit="10"
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

      {/*  Drawer */}
      {/* <div className="bg-neutral-300 h-[1px] w-full my-5"></div> */}

      <div className="w-full mt-4">
        {/* menus */}
        {profileMenuList.map((menu) => (
          <ProfileMenuItem
            href={menu.href}
            icon={menu.icon}
            title={menu.title}
            key={menu.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
