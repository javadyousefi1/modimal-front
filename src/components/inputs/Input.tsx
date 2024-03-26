import { ChangeEvent } from "react";

interface InputPropType {
    type: "text" | "email",
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    value: string | number
    name: string,
    placeHolder: string,
    className?: string,
    error?: boolean
}
const Input = ({ type, onChange, name, placeHolder, className, value, error }: InputPropType) => {

    const inputStyle = `w-full px-3 py-2.5 text-xs border outline-none border-neutral-700 placeholder-neutral-700 ${className} ${error ? "border-red-400" : "border-neutral-700"}`

    return (<>
        <input placeholder={placeHolder} value={value} type={type} onChange={onChange} name={name} className={inputStyle} />
    </>);
}

export default Input;