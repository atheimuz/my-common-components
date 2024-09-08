import React, { forwardRef, Ref } from "react"
import cx from "classnames"
import "./TextField.scss"

export interface TextFieldProps {
    size?: "small" | "middle" | "large" | undefined
    label?: React.ReactNode
    errorMsg?: React.ReactNode
    children: React.ReactNode | React.ReactNode[]
}
export interface InputProps {
    className?: string
    placeholder?: string
    type?: "text" | "number" | "email" | "password"
    status?: "default" | "success" | "error"
    [key: string]: any
}

export const TextField = ({ size = "middle", children, label, errorMsg, ...rest }: TextFieldProps) => {
    return (
        <div className={cx("my-input-wrapper", size)} {...rest}>
            {label && <div className="my-input-label">{label}</div>}
            {children}
            {errorMsg && (
                <div className="my-input-error">{errorMsg}</div>
            )}
        </div>
    )
}

export const Addon = ({ children }: { children: React.ReactNode }) => {
    return <div className="my-input-addon">{children}</div>
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    className = "",
    type = "text",
    status = "default",
    ...rest
}: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
        <div className={cx("my-input-inner", status)}>
            <input
                ref={ref}
                type={type}
                className={cx("my-input", className)}
                {...rest}
            />
        </div>
    )
})

TextField.Input = Input
TextField.Addon = Addon

export default TextField
