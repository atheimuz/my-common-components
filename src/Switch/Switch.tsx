import React from "react"
import cx from "classnames"
import "./Switch.scss"

export interface Props {
    className: string
    checked: boolean
}

const Switch = ({ className, checked, ...rest }: Props) => {
    return (
        <label
            className={cx("my-switch", className, { active: checked })}
            {...rest}
        >
            <input type="checkbox" checked={checked} hidden />
            <div className="my-switch-handle" />
        </label>
    )
}

export default Switch
