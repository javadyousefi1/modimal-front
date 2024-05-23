import Input from "@components/user/inputs/Input";
import { Radio, Space } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const SizeComponent: React.FC = () => {
  const { control } = useFormContext<{ size: string }>();
  const content = [
    { id: "xs", title: "XS / US (0-4)", relationId: 2 },
    { id: "s", title: "S / US (4-6)", relationId: 2 },
    { id: "m", title: "M / US (6-10)", relationId: 2 },
    { id: "l", title: "L / US (10-14)", relationId: 2 },
    { id: "xl", title: "XL / US (12-16)", relationId: 2 },
  ];
  return (
    <>
      <Controller
        control={control}
        name="size"
        render={({ field: { onChange, value } }) => (
          <div className="mt-4">
            <div
              className="flex justify-end items-center flex-row-reverse "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-5">
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
                          value={item.id}
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
          </div>
        )}
      />
    </>
  );
};

export default SizeComponent;
