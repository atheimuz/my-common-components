import React from "react"
import cx from "classnames"
import "./Segmented.scss"

export interface Props {
    className?: string
    index: number
    children: React.ReactNode[]
}

export interface ItemProps {
    className?: string
    onClick: () => void
    children: React.ReactNode
}

const Segmented = ({ className, index, children, ...rest }: Props) => {
    return (
        <div className={cx("my-segmented", className)} {...rest}>
            <div className="my-segmented-inner">
                <div
                    className="my-segmented-background"
                    style={{
                        width: `${100 / children?.length}%`,
                        transform: `translateX(${100 * index}%)`
                    }}
                />
                <ul className="my-segmented-items">
                    {children}
                </ul>
            </div>
        </div>
    )
}

export const SegmentedItem = ({
    className,
    onClick,
    children,
    ...rest
}: ItemProps) => {
    return (
        <li className={cx("my-segmented-item")} tabIndex={0} onClick={onClick} {...rest}>
            {children}
        </li>
    )
}

Segmented.Item = SegmentedItem

export default Segmented
