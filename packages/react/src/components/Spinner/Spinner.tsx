import React from "react"
import cx from "classnames"
import { AiOutlineLoading } from "react-icons/ai";
import "./Spinner.scss"

export interface Props {
    className?: string,
}

const Spinner = ({
    className = "",
    ...rest
}: Props) => {
    return (
        <span className={cx("my-spinner", className)} {...rest}>
            <AiOutlineLoading />
        </span>
    )
}

export default Spinner
