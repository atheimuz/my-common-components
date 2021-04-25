import React from "react"
import { Story, Meta } from "@storybook/react"

import Switch, { Props } from "./Switch"

export default {
    title: "Example/Switch",
    component: Switch
} as Meta

const Template: Story<Props> = (args) => <Switch {...args} />

export const Default = Template.bind({})
Default.argTypes = {
    checked: {
        control: {
            type: "boolean"
        }
    }
}
