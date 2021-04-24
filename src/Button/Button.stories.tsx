import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { Props } from "./Button";

export default {
    title: "Example/Button",
    component: Button
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Button"
};
Default.argTypes = {
    theme: {
        control: {
            type: "select",
            options: ["primary", "secondary", "dashed", "text", "link"]
        }
    },
    size: {
        control: { type: "select", options: ["small", "middle", "large"] }
    },
    disabled: {
        control: { type: "boolean" }
    }
};
