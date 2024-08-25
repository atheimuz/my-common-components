import React, { ReactElement } from "react"
import cx from "classnames"
import { FaAngleDown } from "react-icons/fa";
import "./Select.scss"

export interface Props {
    className?: string
    size?: "small" | "middle" | "large"
    disabled?: boolean
    value: string | number
    onChange: (newValue: string | number) => void
    children: any
}

export interface OptionProps {
    className?: string
    value: Props["value"]
    disabled?: boolean
    onChange?: Props["onChange"]
    children: Props["children"]
}

const Select = ({
    className,
    size = "middle",
    value,
    children,
    disabled,
    onChange,
    ...rest
}: Props) => {
    return (
        <div
            className={cx("my-select", size, className, { disabled })}
            tabIndex={disabled ? undefined : 0}
            {...rest}
        >
            <div className="my-select-title">
                {value}
            </div>
            <FaAngleDown className="my-select-btn" />
            {!disabled &&
                <ul className="my-select-list">
                    {children?.map((child: ReactElement) =>
                        React.cloneElement(child, {
                            onChange
                        })
                    )}
                </ul>}
        </div>
    )
}

export const Option = ({
    className,
    value,
    disabled,
    onChange,
    children,
    ...rest
}: OptionProps) => {
    return (
        <li
            className={cx("my-select-option", { disabled })}
            tabIndex={0}
            onClick={() => onChange?.(value)}
            {...rest}
        >
            {children}
        </li>
    )
}

Select.Option = Option

export default Select
