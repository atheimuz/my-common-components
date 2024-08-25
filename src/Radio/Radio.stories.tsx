import React, { ChangeEvent, useState } from "react";
import { Story, Meta } from "@storybook/react";

import Radio, { Props } from "./Radio";

export default {
    title: "Example/Radio",
    component: Radio,
} as Meta;

const Template: Story<Props> = ({ ...args }) => {
    const [value, setValue] = useState<string>("yellow");

    return (
        <Radio.Group
            name="test"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
            }
        >
            <Radio {...args}>노란색</Radio>
            <Radio value="green" checked={value === "green"}>
                초록색
            </Radio>
            <Radio value="blue" checked={value === "blue"}>
                파란색
            </Radio>
        </Radio.Group>
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
