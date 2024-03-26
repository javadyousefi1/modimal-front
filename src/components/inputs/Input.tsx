import { ChangeEvent } from "react";

interface InputPropType {
    type: "text" | "email",
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    name: string,
    placeHolder: string,
}
const Input = ({ type, onChange, name, placeHolder }: InputPropType) => {

    const inputStyle = ""

    return (<>
        <input placeholder={placeHolder} type={type} onChange={onChange} name={name} className="w-full px-2 border py-1.5 border-neutral-700 placeholder-neutral-700 outline-none" />
    </>);
}

export default Input;