import React, { createContext, useContext } from "react"
import { useTab } from "../hooks/useTab"

interface TabContextType {
    selectedValue: string | number
    setIndex: (index: number) => void
    selectValue: (value: string | number) => void
}

const TabContext = createContext<TabContextType | null>(null)

interface TabProviderProps {
    value: string | number
    onChange: (value: string | number) => void
    children: React.ReactNode
}

export const TabProvider = ({
    value,
    onChange,
    children
}: TabProviderProps) => {
    const { selectedValue, setIndex, selectValue } = useTab({
        initialValue: value,
        onChange
    })

    return (
        <TabContext.Provider value={{ selectedValue, setIndex, selectValue }}>
            {children}
        </TabContext.Provider>
    )
}

export const useTabContext = () => {
    const context = useContext(TabContext)
    if (!context) {
        throw new Error("useTabContext must be used within a TabProvider")
    }
    return context
}

export default TabProvider
