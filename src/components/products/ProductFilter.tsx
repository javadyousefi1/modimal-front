import { useState } from "react";
import ProductFilterContent from "./ProductFilterContent";

const plusIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z"
      fill="white"
    />
  </svg>
);

const minusIcon = (
  <svg
    width="12"
    height="2"
    viewBox="0 0 12 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H12V2H0V0Z" fill="#748C70" />
  </svg>
);

const filter = [
  {
    id: 1,
    title: "Sort By",
    content: [
      { id: 1, title: "Featured", relationId: 1 },
      { id: 2, title: "Best Seller", relationId: 1 },
      { id: 3, title: "Price: Low To Hight", relationId: 1 },
      { id: 4, title: "Price: Hight To Low", relationId: 1 },
    ],
  },
  {
    id: 2,
    title: "Size",
    content: [
      { id: 1, title: "XS / US (0-4)", relationId: 2 },
      { id: 2, title: "S / US (4-6)", relationId: 2 },
      { id: 3, title: "M / US (6-10)", relationId: 2 },
      { id: 4, title: "L / US (10-14)", relationId: 2 },
      { id: 5, title: "XL / US (12-16)", relationId: 2 },
    ],
  },
  {
    id: 3,
    title: "Color",
    content: [
      { id: 1, title: "Black", color: "#0C0C0C", relationId: 3 },
      { id: 2, title: "Red", color: "#CA2929", relationId: 3 },
      { id: 3, title: "Green", color: "#748C70", relationId: 3 },
      { id: 4, title: "Yellow", color: "#909225", relationId: 3 },
      { id: 5, title: "Dark Blue", color: "#19418E", relationId: 3 },
      { id: 6, title: "Purple", color: "#D0A5EA", relationId: 3 },
      { id: 7, title: "Pink", color: "#CA2980", relationId: 3 },
      { id: 8, title: "Light Blue", color: "#7DC3EB", relationId: 3 },
      { id: 9, title: "Orange", color: "#CA6D29", relationId: 3 },
      { id: 10, title: "white", color: "#FFFFFF", relationId: 3 },
    ],
  },
  {
    id: 4,
    title: "Collection",
    content: [
      { id: 1, title: "In stock ", relationId: 4 },
      { id: 2, title: "Out of stock", relationId: 4 },
    ],
  },
  {
    id: 5,
    title: "price",
    content: [
      { id: 1, title: "In stock ", relationId: 5 },
      { id: 2, title: "Out of stock", relationId: 5 },
    ],
  },
];

const ProductFilter: React.FC = () => {
  const [openFilter, setOpenFilter] = useState<{ [key: number]: boolean }>({});

  // handle each opening of each filter with one state
  const handleClickDropDown = (id: number) => {
    setOpenFilter((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className="w-1/4 hidden sm:block">
      <span className="font-semibold text-[28px]">Filters</span>
      {filter.map((item) => {
        return (
          <div
            className={`${
              openFilter[item.id]
                ? "border-[1px] border-primary"
                : "bg-primary"
            } py-2 px-4 mt-4 cursor-pointer`}
            key={item.id}
            onClick={() => handleClickDropDown(item.id)}
          >
            <div className="flex justify-between items-center">
            <span
              className={`${
                openFilter[item.id] ? "text-primary" : "text-white"
              }  font-bold text-[16px]`}
            >
              {item.title}
            </span>
            <span>{openFilter[item.id] ? minusIcon : plusIcon}</span>
            </div>
            {openFilter[item.id] && (
              <ProductFilterContent
                mainFilterId={item.id}
                content={item.content}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductFilter;
