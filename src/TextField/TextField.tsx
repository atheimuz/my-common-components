import React from "react"
import cx from "classnames"
import "./TextField.scss"

export interface TextFieldProps {
    size?: "small" | "middle" | "large" | undefined
    children: React.ReactNode | React.ReactNode[]
}
export interface InputProps {
    className?: string
    placeholder?: string
    type?: "text" | "number" | "email" | "password"
    status?: "default" | "success" | "error"
    addonBefore?: React.ReactNode | React.ReactNode[],
    addonAfter?: React.ReactNode | React.ReactNode[],
    [key: string]: any
}

export const TextField = ({ size, children, ...rest }: TextFieldProps) => {
    return (
        <div className={cx("my-input-wrapper", size)} {...rest}>
            {children}
        </div>
    )
}

export const Label = ({ children }: { children: React.ReactNode }) => {
    return <div className="my-input-label">{children}</div>
}

export const Addon = ({ children }: { children: React.ReactNode }) => {
    return <div className="my-input-addon">{children}</div>
}

export const Error = ({ children }: { children: React.ReactNode }) => {
    return <div className="my-input-error">{children}</div>
}

const Input = ({
    className = "",
    addonBefore,
    addonAfter,
    type = "text",
    status = "default",
    ...rest
}: InputProps) => {
    return (
        <div className={cx("my-input-inner", status)}>
            {addonBefore && <div className="my-input-addon-before">{addonBefore}</div>}
            <input
                type={type}
                className={cx("my-input", className)}
                {...rest}
            />
            {addonAfter && <div className="my-input-addon-after">{addonAfter}</div>}
        </div>
    )
}

TextField.Label = Label
TextField.Input = Input
TextField.Addon = Addon
TextField.Error = Error

export default TextField
