import {
  Button,
  Checkbox,
  Image,
  Input,
  InputNumber,
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
import toast from "react-hot-toast";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
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

const AddProduct = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [availableCount, setAvailableCount] = useState<{name: string, value: number}>([]);

  const { handleSubmit, control, getValues, setValue } = useForm();

  const sizeContent = [
    { id: "xs", title: "XS / US (0-4)", relationId: 2 },
    { id: "s", title: "S / US (4-6)", relationId: 2 },
    { id: "m", title: "M / US (6-10)", relationId: 2 },
    { id: "l", title: "L / US (10-14)", relationId: 2 },
    { id: "xl", title: "XL / US (12-16)", relationId: 2 },
  ];

  const colorContent = [
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

  type TagRender = SelectProps["tagRender"];

  const options: SelectProps["options"] = [
    { value: "Top" },
    { value: "Pijamas" },
    { value: "Coat" },
    { value: "Underwear" },
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

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleCheckboxSizeChange = (isChecked: Boolean, size: String) => {
    const currentSizes = getValues("size") || [];
    let updatedSizes;

    if (isChecked) {
      updatedSizes = [...currentSizes, size];
    } else {
      updatedSizes = currentSizes.filter((s: String) => s !== size);
    }

    setValue("size", updatedSizes);
  };

  const handleCheckboxColorChange = (isChecked: boolean, color: string) => {
    const currentColors = getValues("color") || [];
    let updatedColors;
    if (isChecked) {
      updatedColors = [...currentColors, color];
    } else {
      updatedColors = currentColors.filter((c: string) => c !== color);
    }
    setValue("color", updatedColors);
  };

  const handleAvailableSize = (e: any, name) => {

    console.log(e)
    // Create a new array entry with the input's name and value
    const newValue = {
      name: name,
      value: e,
    };

    // Update the state by adding the new value to the existing array
    setAvailableCount(newValue);
  };

  console.log(availableCount)

  const onSubmit = (data) => {
    console.log(getValues())
  };

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
                name="tag"
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

          <Controller
            control={control}
            name="uploadFile"
            render={() => (
              <Upload
                name="uploadFile"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            )}
          />
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
          <div className="w-full border-t-[1px] border-neutral-300 pt-4">
            {/* size */}
            <div className="flex justify-around items-center border-b-[1px] border-neutral-300">
              <h2 className="font-semibold text-[16px]">Size</h2>
              <h2 className="font-semibold text-[16px]">Available</h2>
            </div>
            <div className="mt-4">
              <Controller
                control={control}
                name="size"
                render={({ field: { onChange } }) => (
                  <div className="flex justify-around items-center flex-col gap-y-2">
                    {sizeContent.map((item) => (
                      <div
                        key={item.id}
                        className="w-full flex justify-around items-center"
                      >
                        <div className="w-32 flex justify-end items-center flex-row-reverse gap-x-1">
                          <label
                            htmlFor={item.title}
                            className="w-full text-[16px] cursor-pointer"
                          >
                            {item.title}
                          </label>
                          <div className="w-5">
                            <Checkbox
                              id={item.title}
                              onChange={(e) => {
                                handleCheckboxSizeChange(
                                  e.target.checked,
                                  item.title
                                );
                              }}
                            />
                          </div>
                        </div>
                        <div>
                          <InputNumber
                            placeholder="Count..."
                            min={1}
                            className="h-11"
                            onChange={(e) => handleAvailableSize(e ,item.id)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-start border-t-[1px] border-neutral-300 pt-4">
            {/* color */}
            <div>
              <h2 className="font-semibold text-[16px]">Color</h2>
            </div>
            <div className="flex justify-center items-start">
              <Controller
                control={control}
                name="color"
                render={({ field: { onChange } }) => (
                  <div className="mt-4 flex justify-center flex-wrap gap-4">
                    {colorContent.map((item) => (
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
                              handleCheckboxColorChange(
                                e.target.checked,
                                item.color
                              );
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-x-4 mt-4">
          <Button type="primary" onClick={onSubmit}>
            Product registration
          </Button>
          <Button className="hover:bg-primary-300">Clear All</Button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
