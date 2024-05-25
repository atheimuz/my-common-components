import React from "react"
import { Story, Meta } from "@storybook/react"

import Input, { Props } from "./Input"
import Dropdown, { DropdownItem } from "../Dropdown"

export default {
    title: "Example/Input",
    component: Input
} as Meta

const Template: Story<Props> = (args) => {
    return <Input {...args} />
}

export const Default = Template.bind({})
Default.argTypes = {}
