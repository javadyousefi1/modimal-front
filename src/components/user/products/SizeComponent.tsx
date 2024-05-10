import Input from "@components/user/inputs/Input";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

const SizeComponent: React.FC = () => {
  const { control } = useFormContext<{size:string}>();
  const content = [
    { id: 1, title: "XS / US (0-4)", relationId: 2 },
    { id: 2, title: "S / US (4-6)", relationId: 2 },
    { id: 3, title: "M / US (6-10)", relationId: 2 },
    { id: 4, title: "L / US (10-14)", relationId: 2 },
    { id: 5, title: "XL / US (12-16)", relationId: 2 },
  ];
  return (
    <>
      <Controller
        control={control}
        name="size"
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
                <div className="w-5">
                  <Input
                    value={value}
                    type="checkbox"
                    className="cursor-pointer"
                    id={item.title}
                    name={item.title}
                    onChange={(e) => {
                      // Update the value in the form state
                      onChange(e.target.checked);
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

export default SizeComponent;
