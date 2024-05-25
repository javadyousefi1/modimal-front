// antd
import {
  Button,
  Checkbox,
  GetProp,
  Image,
  Input,
  InputNumber,
  Select,
  Spin,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
// hook form
import { Controller, useForm } from "react-hook-form";
// react
import { useState } from "react";
// react hot toast
import toast from "react-hot-toast";
// api
import { addProductApi } from "@/api/product";

// define type for upload button
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
  const [fileList, setFileList] = useState<UploadFile[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resetTrigger, setResetTrigger] = useState(0);

  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

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

  // define condition for image that gonna be upload
  const handleBeforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      toast.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      toast.error("Image must smaller than 2MB!");
    }
    if (fileList && fileList.length > 0) {
      toast.error("Only one image can be uploaded.");
    }
    return false;
  };

  const handleChangeUpload: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);
    setValue("uploadFile", newFileList);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleClear = () => {
    reset();
    setFileList([]);
    setResetTrigger((prev) => prev + 1);
  };

  const onsubmit = () => {
    const data = getValues();
    const requestData = {
      banner: data.uploadFile[0].originFileObj,
      description: data.description,
      price: data.price,
      count: data.count,
      productName: data.title,
      size: JSON.stringify(data.size),
      color: JSON.stringify(data.color),
    };

    for (let element in requestData) {
      if (requestData[element] === null || requestData[element] === undefined) {
        return;
      }
    }

    const formData = new FormData();

    for (let key in requestData) {
      formData.append(key, requestData[key]);
    }

    addProductApi(formData);
    setIsLoading(true)
      .then((res) => {
        toast.success(res.data.message);
        handleClear();
      })
      .catch((error) => toast.error(error?.response?.data?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      className=" w-full md:w-2/3 container"
      onSubmit={handleSubmit(onsubmit)}
      key={resetTrigger}
    >
        {/* basic information */}
        <div className="w-full border border-white flex justify-center items-start flex-col gap-y-4 p-4 sm:p-14 md:p-10">
          <h2 className="font-semibold text-[24px]">Basic Information</h2>
          <div className="w-full flex justify-between items-center flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-4">
            {/* product title */}
            <div className="w-full">
              <label>Product Title</label>
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Product Title is required",
                  },
                }}
                control={control}
                name="title"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Product Title ..."
                    className="h-11"
                    onChange={onChange}
                    value={value}
                    maxLength={30}
                  />
                )}
              />
              {errors.title ? (
                <p className="text-[12px] text-error h-4">
                  {!!errors?.title?.message}
                </p>
              ) : (
                <p className="h-4"> </p>
              )}
            </div>
            {/* product category */}
            <div className="w-full flex justify-center items-start flex-col">
              <label>Product Category</label>
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Product Category is required",
                  },
                }}
                control={control}
                name="category"
                render={({ field: { onChange, value } }) => (
                  <Select
                    className="h-11 w-full"
                    placeholder="Product Category"
                    onChange={onChange}
                    value={value}
                    options={[
                      { value: "jacket", label: "jacket" },
                      { value: "pants", label: "pants" },
                      { value: "blouse", label: "blouse" },
                      { value: "shorts", label: "shorts" },
                      { value: "hat", label: "hat" },
                    ]}
                  />
                )}
              />
              {errors.category ? (
                <p className="text-[12px] text-error h-4">
                  {!!errors?.category?.message}
                </p>
              ) : (
                <p className="h-4"> </p>
              )}
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-x-4">
            {/* brand */}
            <div className="w-full flex justify-center items-start flex-col">
              <label>Brand</label>
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Brand is required",
                  },
                }}
                control={control}
                name="brand"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Brand"
                    className="h-11"
                    onChange={onChange}
                    value={value}
                    maxLength={30}
                  />
                )}
              />
              {errors.brand ? (
                <p className="text-[12px] text-error h-4">
                  {!!errors?.brand?.message}
                </p>
              ) : (
                <p className="h-4"> </p>
              )}
            </div>
            {/* count */}
            <div className="w-full flex justify-center items-start flex-col">
              <label>Count</label>
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Count is required",
                  },
                }}
                control={control}
                name="count"
                render={({ field: { onChange, value } }) => (
                  <InputNumber
                    placeholder="count"
                    maxLength={5}
                    className="h-11 w-full"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
              {errors.count ? (
                <p className="text-[12px] text-error h-4">
                  {!!errors?.count?.message}
                </p>
              ) : (
                <p className="h-4"> </p>
              )}
            </div>
          </div>
          {/* description */}
          <div className="w-full">
            <label>Description</label>
            <Controller
              rules={{
                required: {
                  value: true,
                  message: "Description is required",
                },
              }}
              control={control}
              name="description"
              render={({ field: { onChange, value } }) => (
                <TextArea
                  placeholder="Description ..."
                  allowClear
                  className="h-44 w-full"
                  onChange={onChange}
                  value={value}
                  maxLength={400}
                />
              )}
            />
            {errors.description ? (
              <p className="text-[12px] text-error h-4">
                {!!errors?.description?.message}
              </p>
            ) : (
              <p className="h-4"> </p>
            )}
          </div>
        </div>
        {/* upload image */}
        <div className="border border-white p-10 sm:p-14 mt-8 flex items-center justify-between">
          <h2 className="font-semibold text-[24px]">Media</h2>

          <Controller
            rules={{
              required: {
                value: true,
                message: "Image of product is required",
              },
            }}
            control={control}
            name="uploadFile"
            render={() => (
              <Upload
                listType="picture-circle"
                fileList={fileList}
                beforeUpload={handleBeforeUpload}
                onPreview={handlePreview}
                onChange={handleChangeUpload}
              >
                {fileList && fileList.length >= 1 ? null : uploadButton}
              </Upload>
            )}
          />
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
        {errors.uploadFile ? (
          <p className="text-[12px] text-error h-4">
            {!!errors?.uploadFile?.message}
          </p>
        ) : (
          <p className="h-4"> </p>
        )}
        {/* sale information */}
        <div className="w-full border border-white flex justify-center items-start flex-col gap-y-4 p-4 mt-8 sm:p-14 md:p-10">
          <h2 className="font-semibold text-[24px]">Sale Information</h2>
          <div className="w-full flex justify-between items-center flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-4">
            {/* price */}
            <div className="w-full">
              <label>Price</label>
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Price is required",
                  }
                }}
                control={control}
                name="price"
                render={({ field: { onChange, value } }) => (
                  <InputNumber
                    placeholder="Price..."
                    className="h-11 w-full"
                    maxLength={8}
                    onChange={onChange}
                    value={value}
                    formatter={(value) =>
                      `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={(value) =>
                      value?.replace(/\$\s?|(,*)/g, "") as unknown as number
                    }
                  />
                )}
              />
              {errors.price ? (
                <p className="text-[12px] text-error h-4">
                  {!!errors?.price?.message}
                </p>
              ) : (
                <p className="h-4"> </p>
              )}
            </div>
            {/* discount */}
            <div className="w-full flex justify-center items-start flex-col">
              <label>Discount</label>
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "Discount Price is required",
                  },
                  validate: value => {
                    if (isNaN(value)) {
                      return "Discount must be a number";
                    }
                    if (value >= getValues("price")) {
                      return "Discount Price must be less than Price";
                    }
                    return true;
                  }
                }}
                control={control}
                name="discount"
                render={({ field: { onChange, value } }) => (
                  <InputNumber
                    placeholder="Discount"
                    className="h-11 w-full"
                    onChange={onChange}
                    maxLength={8}
                    value={value}
                    formatter={(value) =>
                      `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                    parser={(value) =>
                      value?.replace(/\$\s?|(,*)/g, "") as unknown as number
                    }
                  />
                )}
              />
              {errors.discount ? (
                <p className="text-[12px] text-error h-4">
                  {!!errors?.discount?.message}
                </p>
              ) : (
                <p className="h-4"> </p>
              )}
            </div>
          </div>
        </div>
        {/* variation */}
        <div className="w-full border border-white flex justify-center items-start flex-col gap-y-4 p-4 mt-8 sm:p-14 md:p-10">
          <div className="flex justify-start items-center gap-x-4">
            <span className="font-semibold text-[20px] md:text-[24px]">
              Variation
            </span>
            <span>(sizes and colors)</span>
          </div>
          <div className="w-full border-t-[1px] border-neutral-300 pt-4">
            {/* size */}
            <div className="flex justify-start items-start flex-col lg:items-center lg:flex-row">
              <h2 className="font-semibold text-[16px]">Size</h2>
            </div>
            <div className="mt-4">
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "should be choose a Size",
                  },
                }}
                control={control}
                name="size"
                render={() => (
                  <div className="flex justify-center items-center flex-wrap gap-y-4 lg:flex-row lg:gap-y-0 gap-x-2">
                    {sizeContent.map((item) => (
                      <div
                        key={item.id}
                        className="w-32 flex justify-start items-center"
                      >
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
                                item.id
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
          <div className="w-full flex justify-between items-start border-t-[1px] border-neutral-300 pt-4">
            {/* color */}
            <div>
              <h2 className="font-semibold text-[16px]">Color</h2>
            </div>
            <div className="flex justify-center items-start">
              <Controller
                rules={{
                  required: {
                    value: true,
                    message: "should be choose a Color",
                  },
                }}
                control={control}
                name="color"
                render={({ field: { onChange } }) => (
                  <div className="mt-4 flex justify-center items-center flex-wrap gap-4">
                    {colorContent.map((item) => (
                      <div
                        key={item.id}
                        className="max-w-96 flex justify-end items-center flex-row-reverse gap-x-1"
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
        {errors.color ? (
          <p className="text-[12px] text-error h-4">{!!errors?.color?.message}</p>
        ) : (
          <p className="h-4"> </p>
        )}
        {errors.size ? (
          <p className="text-[12px] text-error h-4">{!!errors?.size?.message}</p>
        ) : (
          <p className="h-4"> </p>
        )}
        <div className="w-full flex justify-start items-center flex-row-reverse gap-x-4 mt-4">
          <Spin
            spinning={isLoading}
            style={{ backgroundColor: "var(--color-primary)", borderRadius: "4px" }}
          >
            <Button type="primary" htmlType="submit" disabled={isLoading}>
              Create Product
            </Button>
          </Spin>
          <Button className="hover:bg-primary-300" onClick={handleClear}>
            Clear All
          </Button>
        </div>
    </form>
  );
};

export default AddProduct;
