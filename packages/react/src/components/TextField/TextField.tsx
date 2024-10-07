import React, { forwardRef, Ref } from "react"
import cx from "classnames"
import "./TextField.scss"

export interface TextFieldProps {
    label?: React.ReactNode
    errorMsg?: React.ReactNode
    className?: string
    children: React.ReactNode | React.ReactNode[]
}
export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    className?: string
    type?: "text" | "number" | "email" | "password"
    size?: "small" | "middle" | "large"
    status?: "default" | "success" | "error"
    round?: boolean
    children?: React.ReactNode
}

export const TextField = ({
    className,
    children,
    label,
    errorMsg,
    ...rest
}: TextFieldProps) => {
    return (
        <div className={cx("my-input-wrapper", className)} {...rest}>
            {label && <div className="my-input-label">{label}</div>}
            {children}
            {errorMsg && <div className="my-input-error">{errorMsg}</div>}
        </div>
    )
}

export const Addon = ({
    position = "before",
    children
}: {
    position?: "before" | "after"
    children: React.ReactNode
}) => {
    return <div className={cx("my-input-addon", position)}>{children}</div>
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className = "",
            type = "text",
            size = "middle",
            status = "default",
            round,
            children,
            ...rest
        }: InputProps,
        ref: Ref<HTMLInputElement>
    ) => {
        return (
            <div className={cx("my-input-inner", size, status, { round })}>
                <input
                    ref={ref}
                    type={type}
                    className={cx("my-input", className)}
                    {...rest}
                />
                {children}
            </div>
        )
    }
)

TextField.Input = Input
TextField.Addon = Addon

export default TextField
