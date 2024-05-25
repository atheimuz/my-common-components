import React from "react"
import { Story, Meta } from "@storybook/react"

import Dropdown, { Props, DropdownItem } from "./Dropdown"

export default {
    title: "Example/Dropdown",
    component: Dropdown
} as Meta

const Template: Story<Props> = (args) => (
    <Dropdown {...args}>
        <DropdownItem {...args}>목록1</DropdownItem>
        <DropdownItem>목록2</DropdownItem>
        <DropdownItem>목록3</DropdownItem>
    </Dropdown>
)

export const Default = Template.bind({})
Default.argTypes = {
    disabled: {
        control: { type: "boolean" }
    }
}
