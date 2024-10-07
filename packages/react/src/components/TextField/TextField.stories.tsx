import React from "react"
import { StoryObj, Meta } from "@storybook/react"

import TextField, { InputProps } from "./TextField"

const baseArgs: InputProps = {
    size: "middle",
    round: false,
    type: "text",
    status: "default"
}

export const Default: StoryObj = {
    render: (args: InputProps) => {
        return (
            <TextField label="이름" errorMsg="이름을 입력해 주세요.">
                <TextField.Input {...args}>
                    <TextField.Addon position="before">before</TextField.Addon>
                    <TextField.Addon position="after">after</TextField.Addon>
                </TextField.Input>
            </TextField>
        )
    }
}

export default {
    title: "Example/TextField",
    component: TextField,
    args: baseArgs
} as Meta
