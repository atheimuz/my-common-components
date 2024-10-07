import { StoryObj, Meta } from "@storybook/react"

import Toast, { Props } from "./Toast"

const baseArgs: Props = {
    isOpen: true,
    status: "success",
    children: "안녕"
}

const baseArgTypes = {
    isOpen: {
        control: { type: "boolean" }
    },
    status: {
        control: { type: "select" },
        options: ["success", "error", undefined]
    },
    children: {
        control: { type: "text" }
    }
}

export default {
    title: "Example/Toast",
    component: Toast
} as Meta

export const Default: StoryObj = {
    args: baseArgs,
    argTypes: baseArgTypes
}
