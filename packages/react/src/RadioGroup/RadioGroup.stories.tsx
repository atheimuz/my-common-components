import React, { ChangeEvent, useState } from "react";
import { Story, Meta } from "@storybook/react";

import RadioGroup, { ItemProps } from "./RadioGroup";

export default {
    title: "Example/Radio",
    component: RadioGroup.Item,
} as Meta;

const Template: Story<ItemProps> = (args) => {
    const [value, setValue] = useState<string>("yellow");

    return (
        <RadioGroup
            value={value}
            name="test"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
            }
        >
            {[{ label: "초록색", value: "green" }, { label: "노란색", value: "yellow" }].map(item => (
                <RadioGroup.Item
                    {...args}
                    key={item.value}
                    value={item.value}
                >
                    {item.label}
                </RadioGroup.Item>
            ))}
        </RadioGroup>
    );
};

export const Default = Template.bind({});
Default.argTypes = {
    value: {
        defaultValue: "yellow",
        control: { type: "text" },
    },
    direction: {
        defaultValue: "horizontal",
        control: { type: "select", options: ["horizontal", "vertical"] },
    },
    checked: {
        control: { type: "boolean" },
    },
    disabled: {
        control: { type: "boolean" },
    },
};
