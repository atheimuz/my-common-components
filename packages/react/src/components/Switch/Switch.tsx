import React, { InputHTMLAttributes } from "react"
import cx from "classnames"
import "./Switch.scss"

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    checked: boolean
}

const Switch = ({ className, checked, ...rest }: Props) => {
    return (
        <label className={cx("my-switch", className, { active: checked })}>
            <input type="checkbox" checked={checked} hidden {...rest} />
            <div className="my-switch-handle" />
        </label>
    )
}

export default Switch
