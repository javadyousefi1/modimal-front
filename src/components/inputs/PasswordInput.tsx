import { ChangeEvent, useState } from "react";

type PasswordInputPropType ={
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    name: string;
    placeHolder: string;
    value: string | number;
    className?: string;
    error?: boolean;
    disabled?: boolean;
}

const hideIcon = (<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00033 3.98385C10.527 3.98385 12.7803 5.40385 13.8803 7.65052C13.487 8.46385 12.9337 9.16385 12.2737 9.73052L13.2137 10.6705C14.1403 9.85052 14.8737 8.82385 15.3337 7.65052C14.1803 4.72385 11.3337 2.65052 8.00033 2.65052C7.15366 2.65052 6.34032 2.78385 5.57366 3.03052L6.67366 4.13052C7.10699 4.04385 7.54699 3.98385 8.00033 3.98385ZM7.28699 4.74385L8.66699 6.12385C9.04699 6.29052 9.35366 6.59719 9.52032 6.97719L10.9003 8.35719C10.9537 8.13052 10.9937 7.89052 10.9937 7.64385C11.0003 5.99052 9.65366 4.65052 8.00033 4.65052C7.75366 4.65052 7.52033 4.68385 7.28699 4.74385ZM1.34033 2.56385L3.12699 4.35052C2.04033 5.20385 1.18033 6.33719 0.666992 7.65052C1.82033 10.5772 4.66699 12.6505 8.00033 12.6505C9.01366 12.6505 9.98699 12.4572 10.8803 12.1039L13.1603 14.3839L14.1003 13.4439L2.28033 1.61719L1.34033 2.56385ZM6.34033 7.56385L8.08033 9.30385C8.05366 9.31052 8.02699 9.31719 8.00033 9.31719C7.08033 9.31719 6.33366 8.57052 6.33366 7.65052C6.33366 7.61719 6.34033 7.59719 6.34033 7.56385ZM4.07366 5.29719L5.24033 6.46385C5.08699 6.83052 5.00033 7.23052 5.00033 7.65052C5.00033 9.30385 6.34699 10.6505 8.00033 10.6505C8.42033 10.6505 8.82032 10.5639 9.18033 10.4105L9.83366 11.0639C9.24699 11.2239 8.63366 11.3172 8.00033 11.3172C5.47366 11.3172 3.22033 9.89719 2.12033 7.65052C2.58699 6.69719 3.26699 5.91052 4.07366 5.29719Z" fill="#606060" />
</svg>

)

const showIcon = (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z" fill="#606060" />
</svg>

)

const PasswordInput: React.FC<PasswordInputPropType> = ({ onChange, name, placeHolder, className, value, error, disabled }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const handleTogglePasswordVisibility = () => setIsPasswordVisible(prev => !prev)

    const inputStyle = `w-full px-3 py-2.5 text-xs border outline-none border-neutral-700 placeholder-neutral-700 transition linear duration-150 ${className} ${error ? "border-red-400 bg-red-50" : "border-neutral-700"}`

    return (<div className="relative">
        <input placeholder={placeHolder} value={value} type={isPasswordVisible ? "text" : "password"} onChange={onChange} name={name} className={inputStyle} disabled={disabled} />
        <button type="button" className="absolute right-3 top-[18px]" onClick={handleTogglePasswordVisibility}>
            {isPasswordVisible ? hideIcon : showIcon}
        </button>
    </div>);
}

export default PasswordInput;