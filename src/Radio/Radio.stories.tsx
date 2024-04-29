import React from "react"
import { Story, Meta } from "@storybook/react"

import Radio, { Props, RadioGroup } from "./Radio"

export default {
    title: "Example/Radio",
    component: Radio
} as Meta

const Template: Story<Props> = (args) => (
    <RadioGroup name="test">
        <Radio {...args}>목록1</Radio>
        <Radio>목록2</Radio>
        <Radio>목록3</Radio>
    </RadioGroup>
)

export const Default = Template.bind({})
Default.argTypes = {
    value: {
        control: { type: "string" }
    },
    disabled: {
        control: { type: "boolean" }
    }
}
