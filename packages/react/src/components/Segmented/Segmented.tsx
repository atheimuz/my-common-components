import React from "react"
import cx from "classnames"
import { TabProvider, useTabContext } from "../../context/TabContext"
import "./Segmented.scss"

export interface Props {
    className?: string
    value: string | number
    onChange: (value: string | number) => void
    children: React.ReactElement[]
}

export interface ItemProps {
    className?: string
    value: string | number
    children: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Segmented = ({ className, value, onChange, children }: Props) => {
    return (
        <TabProvider value={value} onChange={onChange}>
            <div className={cx("my-segmented", className)} role="tablist">
                <div className="my-segmented-inner">
                    <div
                        className="my-segmented-background"
                        style={{
                            width: `${100 / children.length}%`,
                            transform: `translateX(${100 * children.findIndex((child) => child.props.value === value)}%)`
                        }}
                    />
                    <div className="my-segmented-items">{children}</div>
                </div>
            </div>
        </TabProvider>
    )
}

export const SegmentedItem = ({
    className,
    value,
    children,
    onClick
}: ItemProps) => {
    const { selectedValue, selectValue } = useTabContext()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        selectValue(value)
        onClick?.(e)
    }

    return (
        <button
            role="tab"
            className={cx("my-segmented-item", className, {
                active: selectedValue === value
            })}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

Segmented.Item = SegmentedItem

export default Segmented
