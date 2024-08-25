import React from "react"
import cx from "classnames"
import { FaCheckCircle } from "react-icons/fa";
import "./Checkbox.scss"

export interface Props {
    children?: React.ReactNode
    className?: string
    checked: boolean
    disabled: boolean
}

const Checkbox = ({ children, className = "", ...rest }: Props) => {
    return (
        <label className={cx("my-checkbox", className)}>
            <input type="checkbox" hidden {...rest} />
            <FaCheckCircle className="my-checkbox-mark" />
            {children}
        </label>
    )
}

export default Checkbox
