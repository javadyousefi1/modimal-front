import Input from "@components/inputs/Input"
import { Controller, useForm } from "react-hook-form"

const ProductFilterContent: React.FC = ({content}) => {

  const {handleSubmit, control} = useForm({})
  return (
    <form>
      <Controller name="sortBy" control={control} render={({ field: { onChange, value } }) => (
        <>
        <label htmlFor="sortBy1"></label>
          <Input onChange={onchange} value={value} type="checkbox"/>
        </>
        )}/>
    </form>
  )
}

export default ProductFilterContent