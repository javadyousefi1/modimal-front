import { useState } from "react";
// import ProductFilterContent from "./ProductFilterContent";
import SortByComponent from "./SortByComponent";
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

const sortBy = {
  id: 1,
  title: "Sort By",
  content: <SortByComponent />,
};

const size = {
  id: 2,
  title: "Size",
  content: <SizeComponent />,
};

const color = {
  id: 3,
  title: "Color",
  content: <ColorComponent />,
}

const collection = {
  id: 4,
  title: "Collection",
  content: <CollectionComponent />,
}

const ProductFilter: React.FC = ({ filterData, handleFilter,handleOpenModalFilter }) => {
  const [openFilter, setOpenFilter] = useState<{ [key: number]: boolean }>({});
  const [resetTrigger, setResetTrigger] = useState(0);

  const methods = useForm();
  // handle each opening of each filter with one state
  const handleClickDropDown = (id: number) => {
    setOpenFilter((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const onSubmit = (data: any) => {
    console.log(methods.getValues());
    handleFilter();
    handleOpenModalFilter()
  };

  const handleClear = () => {
    methods.reset()
    setResetTrigger(prev => prev + 1); // Increment the reset trigger
  };
  
  return (
    <div>
      <div className="font-semibold text-[28px]">Filters</div>
      <div
        className={`${
          openFilter[sortBy.id] ? "border-[1px] border-primary " : "bg-primary"
        } py-2 px-4 mt-4 cursor-pointer transition ease-in-out duration-300`}
        key={sortBy.id}
        onClick={() => handleClickDropDown(sortBy.id)}
      >
        <div className={`w-full ${openFilter[sortBy.id] ? "" : "flex justify-center items-center"} `}>
          <div className="w-full flex justify-between items-center flex-1">
          <span
            className={`${
              openFilter[sortBy.id] ? "text-primary" : "text-white"
            }  font-bold text-[16px]`}
          >
            {sortBy.title}
          </span>
          <span>{openFilter[sortBy.id] ? minusIcon : plusIcon}</span>
          </div>
        <div className={openFilter[sortBy.id] ? "visible" : "invisible h-0 w-0 !flex-none"}>
          {
            <FormProvider {...methods}>
              <form key={resetTrigger}>{sortBy.content}</form>
            </FormProvider>
          }
        </div>
        </div>
      </div>
      <div
        className={`${
          openFilter[size.id] ? "border-[1px] border-primary " : "bg-primary"
        } py-2 px-4 mt-4 cursor-pointer transition ease-in-out duration-300`}
        key={size.id}
        onClick={() => handleClickDropDown(size.id)}
      >
        <div className={`w-full ${openFilter[size.id] ? "" : "flex justify-center items-center"} `}>
          <div className="w-full flex justify-between items-center flex-1">
          <span
            className={`${
              openFilter[size.id] ? "text-primary" : "text-white"
            }  font-bold text-[16px]`}
          >
            {size.title}
          </span>
          <span>{openFilter[size.id] ? minusIcon : plusIcon}</span>
          </div>
        <div className={openFilter[size.id] ? "visible" : "invisible h-0 w-0 !flex-none"}>
          {
            <FormProvider {...methods}>
              <form key={resetTrigger}>{size.content}</form>
            </FormProvider>
          }
        </div>
        </div>
      </div>
      <div
        className={`${
          openFilter[color.id] ? "border-[1px] border-primary " : "bg-primary"
        } py-2 px-4 mt-4 cursor-pointer transition ease-in-out duration-300`}
        key={color.id}
        onClick={() => handleClickDropDown(color.id)}
      >
        <div className={`w-full ${openFilter[color.id] ? "" : "flex justify-center items-center"} `}>
          <div className="w-full flex justify-between items-center flex-1">
          <span
            className={`${
              openFilter[color.id] ? "text-primary" : "text-white"
            }  font-bold text-[16px]`}
          >
            {color.title}
          </span>
          <span>{openFilter[color.id] ? minusIcon : plusIcon}</span>
          </div>
        <div className={openFilter[color.id] ? "visible" : "invisible h-0 w-0 !flex-none"}>
          {
            <FormProvider {...methods}>
              <form key={resetTrigger}>{color.content}</form>
            </FormProvider>
          }
        </div>
        </div>
      </div>
      <div
        className={`${
          openFilter[collection.id] ? "border-[1px] border-primary " : "bg-primary"
        } py-2 px-4 mt-4 cursor-pointer transition ease-in-out duration-300`}
        key={collection.id}
        onClick={() => handleClickDropDown(collection.id)}
      >
        <div className={`w-full ${openFilter[collection.id] ? "" : "flex justify-center items-center"} `}>
          <div className="w-full flex justify-between items-center flex-1">
          <span
            className={`${
              openFilter[collection.id] ? "text-primary" : "text-white"
            }  font-bold text-[16px]`}
          >
            {collection.title}
          </span>
          <span>{openFilter[collection.id] ? minusIcon : plusIcon}</span>
          </div>
        <div className={openFilter[collection.id] ? "visible" : "invisible h-0 w-0 !flex-none"}>
          {
            <FormProvider {...methods}>
              <form key={resetTrigger}>{collection.content}</form>
            </FormProvider>
          }
        </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2 gap-x-2">
        <Button
          type="button"
          className="!min-w-max text-[14px] border-[1px] border-primary-600"
          onClick={handleClear}
        >
          Clear Filter
        </Button>
        <Button
          type="button"
          className="!min-w-max text-[14px]"
          theme="primary"
          onClick={onSubmit}
        >
          Apply Filter
        </Button>
      </div>
    </div>
  );
};

export default ProductFilter;
