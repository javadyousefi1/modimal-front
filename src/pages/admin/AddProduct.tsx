import {
  Button,
  Image,
  Input,
  Select,
  SelectProps,
  Space,
  Tag,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller, useForm } from "react-hook-form";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const AddProduct = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [size, setSize] = useState([]);
  const [selects, setSelects] = useState([{ id: 1 }]);
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
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

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      toast.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      toast.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChangeUpload: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const addSelect = () => {
    setSelects([...selects, { id: selects.length }]);
  };

  const handleDeleteSelect = (selected : number) => {
    const removeSelect = selects.filter((item) => item.id !== selected)
    const removeSelectValue = size?.filter((item) => item.id !== selected)
    setSelects(removeSelect)
    setSize(removeSelectValue)
  }

  const onSubmit = () => {};

  console.log("size",size);
  console.log("selects",selects)

  return (
    <form
      className="flex justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
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
                  <Input
                    placeholder="Product Title"
                    className="h-11"
                    onChange={onChange}
                    value={value}
                  />
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
                  render={({ field: { onChange, value } }) => (
                    <Select
                      className="h-11 w-72"
                      placeholder="Product Category"
                      onChange={onChange}
                      value={value}
                      options={[
                        { value: "jack", label: "Jack" },
                        { value: "lucy", label: "Lucy" },
                        { value: "Yiminghe", label: "yiminghe" },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
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
                name="brand"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Brand"
                    className="h-11 w-72"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>
            {/* tags */}
            <div className="flex justify-center items-start flex-col">
              <label>Tags</label>
              <Controller
                control={control}
                name="category"
                render={({ field: { onChange, value } }) => (
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
              name="description"
              render={({ field: { onChange, value } }) => (
                <TextArea
                  placeholder="Description ..."
                  allowClear
                  className="h-44 w-full"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
        </div>
        {/* upload image */}
        <div className="border border-white p-10 mt-8">
          <h2 className="font-semibold text-[24px]">Media</h2>

          <div className="w-full  flex justify-center items-start gap-y-4 mt-4">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-circle"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChangeUpload}
              beforeUpload={beforeUpload}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <Image
                wrapperStyle={{ display: "none" }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(""),
                }}
                src={previewImage}
              />
            )}
          </div>
        </div>
        {/* sale information */}
        <div className="w-full border border-white flex justify-center items-start flex-col gap-y-4 p-10 mt-8">
          <h2 className="font-semibold text-[24px]">Sale Information</h2>
          <div className="w-full flex justify-between items-center">
            {/* price */}
            <div>
              <label>Price</label>
              <Controller
                control={control}
                name="price"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Price..."
                    className="h-11"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>
            {/* discount */}
            <div className="flex justify-center items-start flex-col">
              <label>Discount</label>
              <Controller
                control={control}
                name="discount"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Discount"
                    className="h-11 w-72"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>
          </div>
        </div>
        {/* variation */}
        <div className="w-full border border-white flex justify-center items-start flex-col gap-y-4 p-10 mt-8">
          <div className="flex justify-start items-center gap-x-4">
            <span className="font-semibold text-[24px]">Variation</span>
            <span>(sizes and colors)</span>
          </div>
          <div className="w-full flex justify-between items-start border-t-[1px] border-neutral-300 pt-4">
            {/* size */}
            <div>
              <h2>Size</h2>
            </div>
            {/* size */}
            <div className="flex justify-center items-start flex-col">
              {selects.map((item) => (
                <Space wrap className="mt-2" key={item.id}>
                  <Controller
                    control={control}
                    name="size"
                    render={({ field: { value } }) => (
                      <Select
                        className="h-11 w-96"
                        placeholder="Size"
                        onChange={(e) => {
                          let count = 0
                          count += 1
                            setSize(prevSize => [...(prevSize || []), { id: count, value: e }])

                        
                        }}
                        value={value}
                        options={[
                          { value: "small", label: "Small (S)", disabled: size?.includes("small") },
                          { value: "medium", label: "Medium (M)", disabled: size?.includes("medium") },
                          { value: "large", label: "Large (L)", disabled: size?.includes("large") },
                        ]}
                      />
                    )}
                  />
                  {selects.length !== 1 && <Button onClick={() => handleDeleteSelect(item.id)}>+</Button> }
                </Space>
              ))}
              <div className="w-full flex justify-start mt-2">
                <Button
                  color="blue"
                  onClick={addSelect}
                  className="text-blue-500"
                  disabled={selects?.length == 3}
                >
                  Add values
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product status */}
      <div className="w-1/3">chetori</div>
    </form>
  );
};

export default AddProduct;
