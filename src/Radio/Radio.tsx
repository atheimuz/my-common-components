import React, { ChangeEvent, createContext, Ref, useContext } from "react";
import cx from "classnames";
import "./Radio.scss";

export interface ItemProps {
    className?: string;
    disabled?: boolean;
    value: string;
    children: React.ReactNode;
    [key: string]: any
}

export interface GroupProps {
    className?: string;
    value: string;
    name: string;
    direction?: "horizontal" | "vertical";
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode | React.ReactNode[];
    [key: string]: any
}

const RadioContext = createContext<{
    selectedValue: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}>({ selectedValue: "", name: "", onChange: () => { } });


const RadioItem = React.forwardRef(({
    className,
    value,
    disabled,
    children,
    ...rest
}: ItemProps, forwardRef: Ref<HTMLInputElement>) => {
    const { selectedValue, name, onChange } = useContext(RadioContext);

    return (
        <label className={cx("my-radio", className, { disabled })}>
            <span className="my-radio-target">
                <input
                    ref={forwardRef}
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
});

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

const Radio = React.forwardRef as unknown as ((
) => React.ReactElement) & {
    Item: typeof RadioItem;
    Group: typeof RadioGroup;
};

Radio.Item = RadioItem;
Radio.Group = RadioGroup;

export default Radio;
