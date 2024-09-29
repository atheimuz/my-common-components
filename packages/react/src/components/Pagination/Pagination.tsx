import React, { useState, useMemo } from "react"
import cx from "classnames"
import "./Pagination.scss"

export interface Props {
    className?: string
    current: number
    unit: number
    total: number
    onChange: (num: number) => void
}

const Pagination = ({
    className = "",
    current = 1,
    unit = 10,
    total = 12,
    onChange,
    ...rest
}: Props) => {
    const [step, setStep] = useState<number>(Math.ceil(current / unit))
    const maxStep = useMemo(() => Math.ceil(total / unit), [total, unit])

    return (
        <ul className={cx("my-pagination", className)} {...rest}>
            {step > 1 && (
                <li className="my-pagination-control">
                    <button
                        type="button"
                        className="my-pagination-control-btn"
                        onClick={() => setStep(step - 1)}
                    >
                        &lt;
                    </button>
                </li>
            )}
            {new Array(unit).fill(1).map((_value, num) => {
                const displayNum = (step - 1) * unit + num + 1

                if (displayNum > total) return null

                return (
                    <li key={displayNum} className="my-pagination-item">
                        <button
                            type="button"
                            className={cx("my-pagination-btn", {
                                active: current === displayNum
                            })}
                            onClick={() => onChange(displayNum)}
                        >
                            {displayNum}
                        </button>
                    </li>
                )
            })}
            {step < maxStep && (
                <li className="my-pagination-control">
                    <button
                        type="button"
                        className="my-pagination-control-btn"
                        onClick={() => setStep(step + 1)}
                    >
                        &gt;
                    </button>
                </li>
            )}
        </ul>
    )
}

export default Pagination
