import React from "react"
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io"

import "./Toast.scss"

export interface Props {
    isOpen: boolean
    status?: "success" | "error"
    children: React.ReactNode
}
const Toast = ({ isOpen, status, children }: Props) => {
    if (!isOpen) return null

    return (
        <div className="my-toast">
            {status && (
                <span className={`my-toast-status ${status}`}>
                    {status === "success" && <IoIosCheckmarkCircle />}
                    {status === "error" && <IoIosCloseCircle />}
                </span>
            )}
            {children}
        </div>
    )
}
export default Toast
