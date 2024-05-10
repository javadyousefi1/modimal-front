import Input from "@components/user/inputs/Input";
import { Controller, useFormContext } from "react-hook-form";

const SortByComponent: React.FC = () => {
  const { control } = useFormContext<{sortby:string}>();
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
                className="flex justify-end items-center flex-row-reverse"
                onClick={(e) => e.stopPropagation()}
              >
                <label
                  htmlFor={item.title}
                  className="w-full text-[16px] cursor-pointer"
                >
                  {item.title}
                </label>
                <div className="w-5">
                  <Input
                    value={item.title}
                    type="radio"
                    className="cursor-pointer"
                    id={item.title}
                    name="sortby"
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      />
    </>
  );
};

export default SortByComponent;
