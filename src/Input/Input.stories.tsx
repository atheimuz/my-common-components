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

export const Addon: Story<Props> = () => {
    return (
        <>
            <Input addonBefore="https://" addonAfter=".com" />
            <br />
            <Input
                addonBefore={
                    <Dropdown>
                        <DropdownItem>http://</DropdownItem>
                        <DropdownItem>https://</DropdownItem>
                    </Dropdown>
                }
                addonAfter=".com"
            />
        </>
    )
}

export const PrefixAndSuffix: Story<Props> = () => {
    return <Input value={100} prefix="￦" suffix="원" />
}
