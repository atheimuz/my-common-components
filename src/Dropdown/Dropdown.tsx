import React from "react"
import cx from "classnames"
import "./Dropdown.scss"

export interface Props {
    className?: string
    size: "small" | "middle" | "large"
    disabled: boolean
    value: React.ReactNode
    children: React.ReactNode
}

export interface ItemProps {
    className?: string
    disabled: boolean
    children: React.ReactNode
}

const Dropdown = ({
    className,
    size = "middle",
    value,
    children,
    disabled,
    ...rest
}: Props) => {
    return (
        <div
            className={cx("my-dropdown", size, className, { disabled })}
            tabIndex={disabled ? undefined : 0}
            {...rest}
        >
            <div className="my-dropdown-title">
                {value ||
                    children?.props?.children ||
                    children?.[0]?.props?.children}
            </div>
            {!disabled && <ul className="my-dropdown-list">{children}</ul>}
        </div>
    )
}

export const DropdownItem = ({
    className,
    disabled,
    children,
    ...rest
}: ItemProps) => {
    return (
        <li
            className={cx("my-dropdown-list-item", { disabled })}
            tabIndex={0}
            {...rest}
        >
            {children}
        </li>
    )
}

export default Dropdown
