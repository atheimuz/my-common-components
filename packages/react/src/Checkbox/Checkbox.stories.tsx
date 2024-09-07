import React from "react"
import { Story, Meta } from "@storybook/react"

import Checkbox, { Props } from "./Checkbox"

export default {
    title: "Example/Checkbox",
    component: Checkbox
} as Meta

const Template: Story<Props> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.argTypes = {
    children: {
        control: {
            type: "text"
        },
        defaultValue: "Checkbox"
    }
}
