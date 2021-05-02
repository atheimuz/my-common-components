import React from "react"
import cx from "classnames"
import "./Switch.scss"

export interface Props {
    className: string
    checked: boolean
}

const Switch = ({ className, checked, ...rest }: Props) => {
    return (
        <div
            className={cx("my-switch", className, { active: checked })}
            tabIndex={0}
            {...rest}
        >
            <div className="my-switch-handle" />
        </div>
    )
}

export default Switch
