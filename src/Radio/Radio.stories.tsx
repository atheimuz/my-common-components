import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"

import Radio, { Props, RadioGroup } from "./Radio"

export default {
    title: "Example/Radio",
    component: Radio
} as Meta

const Template: Story<Props> = ({ direction, ...args }) => {
    const [value, setValue] = useState("yellow")

    return (
        <RadioGroup name="test" direction={direction}>
            <Radio {...args} onClick={() => setValue("yellow")}>
                노란색
            </Radio>
            <Radio
                value="green"
                checked={value === "green"}
                onClick={() => setValue("green")}
            >
                초록색
            </Radio>
            <Radio
                value="blue"
                checked={value === "blue"}
                onClick={() => setValue("blue")}
            >
                파란색
            </Radio>
        </RadioGroup>
    )
}

export const Default = Template.bind({})
Default.argTypes = {
    value: {
        defaultValue: "yellow",
        control: { type: "text" }
    },
    direction: {
        defaultValue: "horizontal",
        control: { type: "select", options: ["horizontal", "vertical"] }
    },
    checked: {
        control: { type: "boolean" }
    },
    disabled: {
        control: { type: "boolean" }
    }
}
