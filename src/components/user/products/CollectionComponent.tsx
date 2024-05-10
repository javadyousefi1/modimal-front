import Input from "@components/user/inputs/Input";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { Checkbox, Space } from "antd";
import type { CheckboxProps } from "antd";
import { Radio } from "antd";

const CollectionComponent: React.FC = () => {
  const { control } = useFormContext<{ collection: string }>();
  const content = [
    { id: true, title: "In stock ", relationId: 4 },
    { id: false, title: "Out of stock", relationId: 4 },
  ];
  return (
    <>
      <Controller
        control={control}
        name="collection"
        render={({ field: { onChange, value } }) => (
          <div className="mt-4">
            <div
              className="flex justify-end items-center flex-row-reverse "
              onClick={(e) => e.stopPropagation()}
            >
              <Radio.Group onChange={onChange} value={value}>
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
        )}
      />
    </>
  );
};

export default CollectionComponent;
