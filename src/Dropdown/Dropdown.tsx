import React from "react"
import cx from "classnames"
import "./Dropdown.scss"

export interface Props {
    className: string
    checked: boolean
}

export interface ItemProps {
    className: string
    disabled: boolean
}

const Dropdown = ({ className, children, ...rest }: Props) => {
    return (
        <div className={cx("my-dropdown", className)} {...rest}>
            <div className="my-dropdown-title" tabIndex={0}>
                타이틀 영역
            </div>
            <ul className="my-dropdown-list">{children}</ul>
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
        <li className={cx("my-dropdown-list-item", { disabled })} tabIndex={0}>
            {children}
        </li>
    )
}

export default Dropdown
