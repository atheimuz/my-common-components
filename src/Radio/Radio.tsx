import React from "react"
import cx from "classnames"
import "./Radio.scss"

export interface Props {
    className: string
    disabled: boolean
    name: string
    value: string
}

export interface GroupProps {
    className: string
    direction: "horizontal" | "vertical"
    name: string
}

const Radio = ({
    className,
    name,
    value,
    disabled,
    children,
    ...rest
}: Props) => {
    return (
        <label className={cx("my-radio", className, { disabled })}>
            <span className="my-radio-target">
                <input
                    type="radio"
                    value={value}
                    name={name}
                    disabled={disabled}
                    {...rest}
                    hidden
                />
                <span className="my-radio-target-inner" />
            </span>
            <div>{children}</div>
        </label>
    )
}

export const RadioGroup = ({
    className,
    direction = "horizontal",
    name,
    children,
    ...rest
}: GroupProps) => {
    return (
        <div className={cx("my-radio-group", className, direction)} {...rest}>
            {children.map((child) => React.cloneElement(child, { name }))}
        </div>
    )
}

export default Radio
