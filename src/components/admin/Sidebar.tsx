import SideBarItem from "./SideBarItem";

const Sidebar = () => {
  const menus = [{ id: 1, title: "users", href: "/admin/users" }];

  return (
    <div className="h-screen bg-primary-50 w-[400px] flex flex-col itens-center px-8">
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
      <div className="flex flex-col items-center mt-4">
        {menus.map((item) => (
          <SideBarItem key={item.id} href={item.href} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
