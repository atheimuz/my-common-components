import React, { ChangeEvent } from "react";
import cx from "classnames";
import "./Radio.scss";

export interface Props {
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
}

export interface GroupProps {
    className?: string;
    direction?: "horizontal" | "vertical";
    children: React.ReactNode | React.ReactNode[];
}

const Radio = ({
    className,
    value,
    name,
    checked,
    disabled,
    onChange,
    children,
    ...rest
}: Props) => {
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
    children,
    ...rest
}: GroupProps) => {

    return (
        <div
            className={cx("my-radio-group", className, direction)}
            {...rest}
        >
            {children}
        </div>
    );
};

Radio.Group = RadioGroup;

export default Radio;
