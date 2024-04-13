import { useState } from "react";
interface SubLink {
  id: number;
  link: string;
  title: string;
}

// Define an interface for the props
interface DropDownProps {
  item: {
    id: number;
    title: string;
    subLink: SubLink[];
  };
}

// Use the interface as the generic parameter for React.FC
const DropDown: React.FC<DropDownProps> = ({ item }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const handleOpenDropDown = () => {
    setIsOpenDropDown((prev) => !prev);
  };

  return (
    <>
      <div
        className="w-11/12 border-b-[1px] border-black flex justify-between items-center"
        onClick={handleOpenDropDown}
      >
        <span className="">{item.title}</span>
        {item.subLink !== null ? (
          <div>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform duration-500 ease-in-out ${
                isOpenDropDown ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                d="M1.41 0.294922L6 4.87492L10.59 0.294922L12 1.70492L6 7.70492L0 1.70492L1.41 0.294922Z"
                fill="#0C0C0C"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
      </div>
      {isOpenDropDown &&
        item.subLink &&
        item.subLink.map((item) => (
          <a
            className="flex justify-center items-end gap-y-2 pl-4"
            href={item.link}
            key={item.id}
          >
            {item.title}
          </a>
        ))}
    </>
  );
};

export default DropDown;
