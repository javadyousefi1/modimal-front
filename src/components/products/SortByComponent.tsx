import Input from "@components/inputs/Input";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

const SortByComponent: React.FC = () => {
  const { control } = useFormContext<FormData>();
  const content = [
    { id: 1, title: "Featured", relationId: 1 },
    { id: 2, title: "Best Seller", relationId: 1 },
    { id: 3, title: "Price: Low To Hight", relationId: 1 },
    { id: 4, title: "Price: Hight To Low", relationId: 1 },
  ];
  return (
    <>
      <Controller
        control={control}
        name="sortby"
        render={({ field: { onChange, value } }) => (
          <div className="mt-4">
            {content.map((item) => (
              <div
                key={item.id}
                className="flex justify-end items-center flex-row-reverse "
                onClick={(e) => e.stopPropagation()}
              >
                <label
                  htmlFor={item.title}
                  className="w-full text-[16px] cursor-pointer"
                >
                  {item.title}
                </label>
                <Input
                  value={value}
                  type="checkbox"
                  className="w-5 cursor-pointer"
                  id={item.title}
                  name={item.title}
                  onChange={(e) => {
                    // Update the value in the form state
                    onChange(e.target.checked);
                  }}
                />
              </div>
            ))}
          </div>
        )}
      />
    </>
  );
};

export default SortByComponent;
