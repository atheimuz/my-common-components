import React, { ChangeEvent, useState } from "react";
import { Story, Meta } from "@storybook/react";

import Radio, { GroupProps } from "./Radio";

export default {
    title: "Example/Radio",
    component: Radio,
} as Meta;

const Template: Story<GroupProps> = (args) => {
    const [value, setValue] = useState<string>("yellow");

    return (
        <Radio.Group
            {...args}
            value={value}
            name="test"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
            }
        >
            {[{ label: "초록색", value: "green" }, { label: "노란색", value: "yellow" }].map(item => (
                <Radio
                    key={item.value}
                    value={item.value}
                >
                    {item.label}
                </Radio>
            ))}
        </Radio.Group >
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
