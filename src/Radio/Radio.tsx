import React, { ChangeEvent, createContext, useContext } from "react";
import cx from "classnames";
import "./Radio.scss";

export interface Props {
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    value: string;
    children: React.ReactNode;
}

export interface GroupProps {
    className?: string;
    direction?: "horizontal" | "vertical";
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode | React.ReactNode[];
}

const RadioContext = createContext<{
    name: string;
    onChange: (e: ChangeEvent) => void;
}>({ name: "", onChange: () => {} });

const Radio = ({
    className,
    value,
    checked,
    disabled,
    children,
    ...rest
}: Props) => {
    const { name, onChange } = useContext(RadioContext);
    return (
        <label className={cx("my-radio", className, { disabled })}>
            <span className="my-radio-target">
                <input
                    type="radio"
                    value={value}
                    name={name}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                    {...rest}
                    hidden
                />
                <span className="my-radio-target-circle" />
            </span>
            <div>{children}</div>
        </label>
    );
};

export const RadioGroup = ({
    className,
    direction = "horizontal",
    name,
    onChange,
    children,
    ...rest
}: GroupProps) => {
    return (
        <RadioContext.Provider value={{ name, onChange }}>
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
