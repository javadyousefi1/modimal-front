import Input from "@components/user/inputs/Input";
import { Checkbox } from "antd";
import { Controller, FormProvider, useFormContext } from "react-hook-form";

const ColorComponent: React.FC = () => {
  const { control, setValue, getValues } = useFormContext<{
    color: string[];
  }>();
  const content = [
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
  ];

  const handleCheckboxChange = (isChecked: boolean, color: string) => {
    const currentColors = getValues("color") || [];
    let updatedColors;
    if (isChecked) {
      updatedColors = [...currentColors, color];
    } else {
      updatedColors = currentColors.filter((c) => c !== color);
    }
    setValue("color", updatedColors);
  };

  return (
    <>
      <Controller
        control={control}
        name="color"
        render={({ field: { onChange } }) => (
          <div className="mt-4">
            {content.map((item) => (
              <div
                key={item.id}
                className="flex justify-end items-center flex-row-reverse gap-x-1"
                onClick={(e) => e.stopPropagation()}
              >
                <label
                  htmlFor={item.title}
                  className="w-full text-[16px] cursor-pointer"
                >
                  {item.title}
                </label>
                <div
                  className="min-w-4 min-h-4 rounded-full border-[1px] border-neutral-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="w-5">
                  <Checkbox
                  id={item.title}
                    onChange={(e) => {
                      handleCheckboxChange(e.target.checked, item.color);
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

export default ColorComponent;
