import React, {
    ChangeEvent,
    createContext,
    forwardRef,
    useContext
} from "react"
import cx from "classnames"
import "./RadioGroup.scss"

export interface ItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    disabled?: boolean
    value: string
    children: React.ReactNode
}

export interface GroupProps {
    className?: string
    value: string
    name: string
    direction?: "horizontal" | "vertical"
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    children: React.ReactNode
    [key: string]: any
}

interface RadioContextType {
    selectedValue?: string
    name?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioContext = createContext<RadioContextType>({})

const RadioItem = forwardRef<HTMLInputElement, ItemProps>(
    ({ className, value, disabled, children, ...rest }, ref) => {
        const { selectedValue, name, onChange } = useContext(RadioContext)

        return (
            <label className={cx("my-radio", className, { disabled })}>
                <span className="my-radio-target">
                    <input
                        ref={ref}
                        type="radio"
                        value={value}
                        name={name}
                        checked={selectedValue === value}
                        disabled={disabled}
                        onChange={onChange}
                        hidden
                        {...rest}
                    />
                    <span className="my-radio-target-circle" />
                </span>
                <div>{children}</div>
            </label>
        )
    }
)

const RadioGroup = ({
    className,
    value,
    name,
    direction = "horizontal",
    onChange,
    children,
    ...rest
}: GroupProps) => {
    return (
        <RadioContext.Provider value={{ selectedValue: value, name, onChange }}>
            <div
                className={cx("my-radio-group", className, direction)}
                {...rest}
            >
                {children}
            </div>
        </RadioContext.Provider>
    )
}

RadioGroup.Item = RadioItem

export default RadioGroup
