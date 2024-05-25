import React from "react"
import cx from "classnames"
import "./Input.scss"

export interface Props {
    addonBefore?: React.ReactNode
    addonAfter?: React.ReactNode
    prefix?: React.ReactNode
    suffix?: React.ReactNode
    className?: string
    type: "text" | "number"
    size: "small" | "middle" | "large"
    status: "default" | "error"
}

const Input = ({
    className = "",
    type = "text",
    size = "middle",
    status = "default",
    addonBefore,
    addonAfter,
    prefix,
    suffix,
    ...rest
}: Props) => {
    return (
        <div className={cx("my-input-wrapper", size, status)}>
            {addonBefore && (
                <div className="my-input-addon-before">{addonBefore}</div>
            )}
            <div className="my-input-inner">
                {prefix && <div className="my-input-prefix">{prefix}</div>}
                <input
                    type={type}
                    className={cx("my-input", className)}
                    {...rest}
                />
                {suffix && <div className="my-input-prefix">{suffix}</div>}
            </div>
            {addonAfter && (
                <div className="my-input-addon-after">{addonAfter}</div>
            )}
        </div>
    )
}

export default Input
