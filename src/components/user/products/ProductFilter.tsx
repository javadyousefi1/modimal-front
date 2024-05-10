import { useState } from "react";
// import ProductFilterContent from "./ProductFilterContent";
import SortByComponent from "./SortByComponent"
import { FormProvider, useForm } from "react-hook-form";
import SizeComponent from "./SizeComponent";
import ColorComponent from "./ColorComponent";
import CollectionComponent from "./CollectionComponent";
import Button from "@components/shared/Button";

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
    content: <SortByComponent/>
  },
  {
    id: 2,
    title: "Size",
    content: <SizeComponent/>
  },
  {
    id: 3,
    title: "Color",
    content: <ColorComponent/>
  },
  {
    id: 4,
    title: "Collection",
    content: <CollectionComponent/>
  },
  {
    id: 5,
    title: "price",
    content: ""
  },
];

const ProductFilter: React.FC = ({filterData}) => {
  const [openFilter, setOpenFilter] = useState<{ [key: number]: boolean }>({});
  const methods = useForm()

  // handle each opening of each filter with one state
  const handleClickDropDown = (id: number) => {
    setOpenFilter((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const onSubmit = (data) => {
console.log("data", data)
  }
  return (
    <div>
      <div className="font-semibold text-[28px]">Filters</div>
      {/* <div className="flex justify-center items-center">
      <Button
      type="button"
      className= "min-w-max text-[14px]"
    >
      Clear Filter
    </Button>
    <Button
      type="submit"
      className="min-w-max text-[14px]"
      theme
    >
      Apply Filter
    </Button>
      </div> */}
      {filter.map((item) => {
        return (
          <div
            className={`${
              openFilter[item.id]
                ? "border-[1px] border-primary"
                : "bg-primary"
            } py-2 px-4 mt-4 cursor-pointer transition ease-in-out duration-300`}
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
              <FormProvider {...methods} >
              <form onSubmit={methods.handleSubmit(onSubmit)}>
              {item.content}
              </form>
            </FormProvider>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductFilter;
