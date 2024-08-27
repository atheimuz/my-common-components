import React, { ChangeEvent, createContext, useContext } from "react";
import cx from "classnames";
import "./Radio.scss";

export interface Props {
    className?: string;
    disabled?: boolean;
    value: string | number;
    children: React.ReactNode;
    [key: string]: any
}

export interface GroupProps {
    className?: string;
    value: Props["value"];
    name: string;
    direction?: "horizontal" | "vertical";
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode | React.ReactNode[];
}

const RadioContext = createContext<{
    selectedValue: Props["value"];
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}>({ selectedValue: "", name: "", onChange: () => { } });

const Radio = ({
    className,
    value,
    disabled,
    children,
    ...rest
}: Props) => {
    const { selectedValue, name, onChange } = useContext(RadioContext);

    return (
        <label className={cx("my-radio", className, { disabled })}>
            <span className="my-radio-target">
                <input
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
    );
};

export const RadioGroup = ({
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
    );
};

Radio.Group = RadioGroup;

export default Radio;
