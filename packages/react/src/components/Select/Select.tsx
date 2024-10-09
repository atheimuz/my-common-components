"use client"

import React, { createContext, useContext } from "react"
import cx from "classnames"
import { FaAngleDown } from "react-icons/fa"
import "./Select.scss"

export interface Props {
    className?: string
    size?: "small" | "middle" | "large"
    disabled?: boolean
    value: string | number
    renderedValue?: React.ReactNode
    onChange: (newValue: string | number) => void
    children: React.ReactNode | React.ReactNode[]
}

export interface OptionProps {
    className?: string
    value: Props["value"]
    disabled?: boolean
    children: React.ReactNode | React.ReactNode[]
}

const SelectContext = createContext<{ onChange: Props["onChange"] }>({
    onChange: ({}) => {}
})
const Select = ({
    className,
    size = "middle",
    value,
    renderedValue,
    children,
    disabled,
    onChange,
    ...rest
}: Props) => {
    return (
        <SelectContext.Provider value={{ onChange }}>
            <div
                className={cx("my-select", size, className, { disabled })}
                tabIndex={disabled ? undefined : 0}
                {...rest}
            >
                <div className="my-select-title">{renderedValue || value}</div>
                <FaAngleDown className="my-select-btn" />
                {!disabled && <ul className="my-select-list">{children}</ul>}
            </div>
        </SelectContext.Provider>
    )
}

export const Option = ({
    className,
    value,
    disabled,
    children,
    ...rest
}: OptionProps) => {
    const { onChange } = useContext(SelectContext)

    const onSelectValue = () => {
        if (disabled) return

        ;(document.activeElement as HTMLElement).blur()
        return onChange(value)
    }

    return (
        <li
            className={cx("my-select-option", { disabled })}
            tabIndex={0}
            onClick={onSelectValue}
            {...rest}
        >
            {children}
        </li>
    )
}

Select.Option = Option

export default Select
