import Input from "@components/inputs/Input"
import { Controller, useForm } from "react-hook-form"

const ProductFilterContent: React.FC = ({content}) => {

  const {handleSubmit, control} = useForm({})
  return (
    <form>
      <Controller name="sortBy" control={control} render={({ field: { onChange, value } }) => (
        <>
        
        </>
        )}/>
    </form>
  )
}

export default ProductFilterContent