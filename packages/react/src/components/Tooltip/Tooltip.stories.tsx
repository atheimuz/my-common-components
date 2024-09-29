import { Story, Meta } from "@storybook/react"

import Tooltip, { Props } from "./Tooltip"

const baseArgs: Props = {
    type: "keep",
    direction: "bottom",
    title: "메시지",
    children: "내용"
}

const baseArgTypes = {
    type: {
        control: { type: "select" },
        options: ["keep", "hover", "click"]
    },
    direction: {
        control: { type: "select" },
        options: ["top", "bottom", "left", "right"]
    },
    title: {
        control: { type: "text" }
    },
    children: {
        control: { type: "text" }
    }
}

export default {
    title: "Example/Tooltip",
    component: Tooltip
} as Meta

export const Default: Story = {
    args: baseArgs,
    argTypes: baseArgTypes
}
