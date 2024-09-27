import { useState, useEffect } from "react"

export interface UseTabProps {
    initialValue: string | number
    onChange: (value: string | number) => void
}

export const useTab = ({ initialValue, onChange }: UseTabProps) => {
    const [selectedValue, setSelectedValue] = useState<string | number>(
        initialValue
    )
    const [index, setIndex] = useState<number>(0)

    const selectValue = (value: string | number) => {
        setSelectedValue(value)
        onChange(value)
    }

    useEffect(() => {
        setSelectedValue(initialValue)
    }, [initialValue])

    return {
        selectedValue,
        index,
        setIndex,
        selectValue
    }
}
