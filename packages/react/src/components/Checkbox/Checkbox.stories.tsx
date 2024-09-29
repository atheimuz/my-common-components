import { Story, Meta } from "@storybook/react"

import Checkbox, { Props } from "./Checkbox"

const baseArgs: Props = {
    checked: true,
    children: "항목"
}

const baseArgTypes = {
    checked: {
        control: { type: "boolean" }
    },
    children: {
        control: { type: "text" }
    }
}
export default {
    title: "Example/Checkbox",
    component: Checkbox
} as Meta

export const Default: Story = {
    args: baseArgs,
    argTypes: baseArgTypes
}
