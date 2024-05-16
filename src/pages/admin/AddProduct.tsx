import { Image, Input, Select, SelectProps, Space, Tag, Upload, } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller, useForm } from "react-hook-form";

const AddProduct = () => {
  const { handleSubmit, control } = useForm();
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

  const onSubmit = () => {};

  return (
    <form
      className="flex justify-center items-center"
      onSubmit={handleChange(onSubmit)}
    >
      <div className="w-2/3">
        {/* basic information */}
        <div className="w-full border border-white flex justify-center items-start flex-col gap-y-4 p-10">
          <h2 className="font-semibold text-[24px]">Basic Information</h2>
          <div className="w-full flex justify-between items-center">
            {/* product title */}
            <div>
              <label>Product Title</label>
              <Controller
              control={control}
                name="title"
                render={({ field: { onChange, value } }) => (
                  <Input placeholder="Product Title" className="h-11" onChange={onChange} value={value} />
                )}
              />
            </div>
            {/* product category */}
            <div className="flex justify-center items-start flex-col">
              <label>Product Category</label>
              <Space wrap>
              <Controller
              control={control}
              name="category"
              render={({field: {onChange, value}}) => (
                <Select
                  className="h-11 w-72"
                  placeholder="Product Category"
                  onChange={onChange}
                  value={value}
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              )}
              />
              </Space>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            {/* brand */}
            <div className="flex justify-center items-start flex-col">
              <label>Brand</label>
              <Controller
              control={control}
                name="title"
                render={({ field: { onChange, value } }) => (
                  <Input placeholder="Product Title" className="h-11 w-72" onChange={onChange} value={value}/>
                )}
              />
            </div>
            {/* tags */}
            <div className="flex justify-center items-start flex-col">
              <label>Tags</label>
              <Controller
              control={control}
              name="category"
              render={({field: {onChange, value}}) => (
                <Select
                onChange={onChange}
                value={value}
                className="h-11 w-72"
                mode="multiple"
                tagRender={tagRender}
                defaultValue={["gold", "cyan"]}
                options={options}
              />
              )}
              />
            </div>
          </div>
          {/* description */}
          <div className="w-full">
            <label>Description</label>
            <Controller
              control={control}
                name="title"
                render={({ field: { onChange, value } }) => (
                  <TextArea placeholder="Product Title" allowClear className="h-44 w-full" onChange={onChange} value={value}/>
                )}
              />
          </div>
        </div>
        {/* upload image */}
        <div>
        <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
        </div>
      </div>
      {/* product status */}
      <div className="w-1/3">chetori</div>
    </form>
  );
};

export default AddProduct;
