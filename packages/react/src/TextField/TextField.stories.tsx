import React from "react"
import { Story, Meta } from "@storybook/react"

import TextField, { InputProps } from "./TextField"

export default {
    title: "Example/TextField",
    component: TextField
} as Meta

const Template: Story<InputProps> = (args) => {
    return (
        <TextField size="middle" label="이름" errorMsg="이름을 입력해 주세요.">
            <TextField.Input {...args} />
        </TextField>
    )

}

export const Default = Template.bind({})
Default.argTypes = {}