import { Story, Meta } from "@storybook/react"

import Toast, { Props } from "./Toast"

const baseArgs: Props = {
    isOpen: true,
    status: "success",
    children: "안녕"
}

export default {
    title: "Example/Toast",
    component: Toast,
    args: baseArgs
} as Meta

export const Default: Story = {}
