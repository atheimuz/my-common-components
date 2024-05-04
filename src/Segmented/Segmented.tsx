import React, { useState, useEffect } from "react"
import cx from "classnames"
import "./Segmented.scss"

export interface Props {
    className: string
    children: React.ReactNode
}

export interface ItemProps {
    className: string
    checked: boolean
    setActiveIndex: () => void
    children: React.ReactNode
}

const Segmented = ({ className, children, ...rest }: Props) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className={cx("my-segmented", className)} {...rest}>
            <div className="my-segmented-inner">
                <div
                    className="my-segmented-background"
                    style={{
                        width: `${100 / children?.length}%`,
                        transform: `translateX(${100 * activeIndex}%)`
                    }}
                />
                <ul className="my-segmented-items">
                    {children.map((child, index) =>
                        React.cloneElement(child, {
                            setActiveIndex: () => setActiveIndex(index)
                        })
                    )}
                </ul>
            </div>
        </div>
    )
}

export const SegmentedItem = ({
    className,
    setActiveIndex,
    checked,
    children,
    ...rest
}: ItemProps) => {
    useEffect(() => {
        if (checked) {
            setActiveIndex()
        }
    }, [checked])

    return (
        <li className={cx("my-segmented-item")} tabIndex={0} {...rest}>
            {children}
        </li>
    )
}

export default Segmented
