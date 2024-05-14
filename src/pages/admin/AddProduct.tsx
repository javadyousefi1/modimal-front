import { Input, Select, SelectProps, Space, Tag } from "antd";

const AddProduct = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  type TagRender = SelectProps["tagRender"];

  const options: SelectProps["options"] = [
    { value: "gold" },
    { value: "lime" },
    { value: "green" },
    { value: "cyan" },
  ];

  const tagRender: TagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginInlineEnd: 4 }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <form className="flex justify-center items-center">
      <div className="w-2/3">
        {/* basic information */}
        <div className="w-full border border-white flex justify-center items-start flex-col gap-y-4 p-2">
          <h2 className="font-semibold text-[24px]">Basic Information</h2>
          <div className="w-full flex justify-between items-center">
            {/* product title */}
            <div>
              <label>Product Title</label>
              <Input placeholder="Product Title" className="h-11" />
            </div>
            {/* product category */}
            <div className="flex justify-center items-start flex-col">
              <label>Product Category</label>
              <Space wrap>
                <Select
                  className="h-11 w-72"
                  placeholder="Product Category"
                  onChange={handleChange}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </Space>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            {/* brand */}
            <div className="flex justify-center items-start flex-col">
              <label>Brand</label>
              <Input placeholder="Product Title" className="h-11 w-72" />
            </div>
            {/* tags */}
            <div className="flex justify-center items-start flex-col">
              <label>Tags</label>
              <Select
                className="h-11 w-72"
                mode="multiple"
                tagRender={tagRender}
                defaultValue={["gold", "cyan"]}
                options={options}
              />
            </div>
          </div>
          <div>
            <label>Description</label>
          </div>
        </div>
      </div>
      {/* product status */}
      <div className="w-1/3">chetori</div>
    </form>
  );
};

export default AddProduct;
