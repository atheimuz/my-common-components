import React from "react"
import { Story, Meta } from "@storybook/react"

import TextField, { InputProps } from "./TextField"

export default {
    title: "Example/Input",
    component: TextField
} as Meta

const Template: Story<InputProps> = (args) => {
    return (
        <TextField size="middle">
            <TextField.Label>이름</TextField.Label>
            <TextField.Input {...args} addonBefore={"kg"} />
            <TextField.Error>이름을 입력해 주세요.</TextField.Error>
        </TextField>
    )

}

export const Default = Template.bind({})
Default.argTypes = {}