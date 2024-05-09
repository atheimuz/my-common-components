import React from "react"
import cx from "classnames"
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
            <span className="my-checkbox-mark" />
            {children}
        </label>
    )
}

export default Checkbox
