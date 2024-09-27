import React, { useState, useEffect, createContext, useContext } from "react"
import cx from "classnames"
import "./Segmented.scss"

export interface Props {
    className?: string
    value: string | number
    children: React.ReactElement[]
    onChange: (value: string | number) => void
}

export interface ItemProps {
    className?: string
    value: string | number
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    changeIndex?: () => void
    children: React.ReactNode
}

interface SegmentedContextType {
    selectedValue: string | number
    selectValue: (value: string | number) => void
    setIndex: (index: number) => void
}

const SegmentedContext = createContext<SegmentedContextType | null>(null)

const Segmented = ({
    className,
    value,
    children,
    onChange,
    ...rest
}: Props) => {
    const [index, setIndex] = useState<number>(0)

    const onHandleChange = (value: string | number) => {
        onChange(value)
    }

    return (
        <SegmentedContext.Provider
            value={{
                selectedValue: value,
                selectValue: onHandleChange,
                setIndex
            }}
        >
            <div
                className={cx("my-segmented", className)}
                role="tablist"
                {...rest}
            >
                <div className="my-segmented-inner">
                    <div
                        className="my-segmented-background"
                        style={{
                            width: `${100 / children?.length}%`,
                            transform: `translateX(${100 * index}%)`
                        }}
                    />
                    <div className="my-segmented-items">
                        {children.map((child, childIndex) =>
                            React.cloneElement(child, {
                                changeIndex: () => setIndex(childIndex)
                            })
                        )}
                    </div>
                </div>
            </div>
        </SegmentedContext.Provider>
    )
}

export const SegmentedItem = ({
    className,
    value,
    children,
    onClick,
    changeIndex,
    ...rest
}: ItemProps) => {
    const context = useContext(SegmentedContext)

    if (!context) {
        throw new Error(
            "SegmentedItem must be used within a Segmented component"
        )
    }

    const { selectedValue, selectValue } = context

    const onSelectValue = (e: React.MouseEvent<HTMLButtonElement>) => {
        selectValue(value)
        onClick?.(e)
    }

    useEffect(() => {
        if (value === selectedValue) {
            changeIndex?.()
        }
    }, [value, selectedValue, changeIndex])

    return (
        <button
            role="tab"
            className={cx("my-segmented-item", className)}
            onClick={onSelectValue}
            {...rest}
        >
            {children}
        </button>
    )
}

Segmented.Item = SegmentedItem

export default Segmented
