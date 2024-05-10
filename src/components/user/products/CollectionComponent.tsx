import Input from "@components/user/inputs/Input";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

const CollectionComponent: React.FC = () => {
  const { control } = useFormContext<FormData>();
  const content = [
    { id: 1, title: "In stock ", relationId: 4 },
    { id: 2, title: "Out of stock", relationId: 4 },
  ]
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

export default CollectionComponent;
