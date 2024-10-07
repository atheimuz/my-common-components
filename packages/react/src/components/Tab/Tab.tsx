import React, { useRef, useEffect } from "react"
import cx from "classnames"
import { TabProvider, useTabContext } from "../../context/TabContext"
import "./Tab.scss"

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

const Tab = ({ className, value, onChange, children }: Props) => {
    return (
        <TabProvider value={value} onChange={onChange}>
            <div className={cx("my-tab", className)} role="tablist">
                <div className="my-tab-items">{children}</div>
            </div>
        </TabProvider>
    )
}

export const TabItem = ({ className, value, children, onClick }: ItemProps) => {
    const tabRef = useRef<HTMLButtonElement | null>(null)
    const { selectedValue, selectValue } = useTabContext()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        selectValue(value)
        onClick?.(e)
    }

    useEffect(() => {
        const activeTab = tabRef.current
        if (selectedValue === value && activeTab) {
            const tabContainer = activeTab.parentElement?.parentElement

            if (tabContainer) {
                const containerWidth = tabContainer.clientWidth
                const tabOffsetLeft = activeTab.offsetLeft
                const tabWidth = activeTab.clientWidth

                const scrollLeftPosition =
                    tabOffsetLeft - containerWidth / 2 + tabWidth / 2

                tabContainer.scrollTo({
                    left: scrollLeftPosition,
                    behavior: "smooth"
                })
            }
        }
    }, [selectValue, value])

    return (
        <button
            ref={tabRef}
            role="tab"
            className={cx("my-tab-item", className, {
                active: selectedValue === value
            })}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

Tab.Item = TabItem

export default Tab
