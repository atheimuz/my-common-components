"use client"

import React from "react"
import { AiOutlineLoading } from "react-icons/ai"
import "./Spinner.scss"

const Spinner = () => {
    return (
        <span className="my-spinner">
            <AiOutlineLoading />
        </span>
    )
}

export default Spinner
