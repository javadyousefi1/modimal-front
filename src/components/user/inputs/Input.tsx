import { ChangeEvent } from "react";

type InputPropType ={
    type: "text" | "email" | "checkbox" | "radio",
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    value?: string | number
    name?: string,
    placeHolder?: string,
    className?: string,
    error?: boolean,
    disabled?: boolean,
    id?: string
}
const Input: React.FC<InputPropType> = ({ type, onChange, name, placeHolder, className, value, error, disabled, id }) => {

    const inputStyle = `w-full px-3 py-2.5 text-xs border outline-none border-neutral-700 placeholder-neutral-700 transition linear duration-150 ${className} ${error ? "border-red-400 bg-red-50" : "border-neutral-700"}`

    return (<>
        <input placeholder={placeHolder} value={value} type={type} onChange={onChange} name={name} className={inputStyle} disabled={disabled} id={id}/>
    </>);
}

export default Input;