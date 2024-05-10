import Input from "@components/user/inputs/Input";
import { Radio, Space } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const SortByComponent: React.FC = () => {
  const { control } = useFormContext<{ sortby: string }>();
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
            <div
              className="flex justify-end items-center flex-row-reverse"
              onClick={(e) => e.stopPropagation()}
            >
              <Radio.Group
                onChange={(e) => {
                  onChange(e.target.value);
                }}
                value={value}
              >
                <Space direction="vertical">
                  {content.map((item) => {
                    return (
                      <Radio
                        value={item.title}
                        className="min-w-max font-normal text-[16px]"
                      >
                        {item.title}
                      </Radio>
                    );
                  })}
                </Space>
              </Radio.Group>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default SortByComponent;
