import { StoryObj, Meta } from "@storybook/react"

import Switch, { Props } from "./Switch"

export default {
    title: "Example/Switch",
    component: Switch
} as Meta

const baseArgs: Props = {
    checked: false
}

const baseArgTypes = {
    theme: {
        control: { type: "boolean" }
    }
}

export const Default: StoryObj = {
    args: baseArgs,
    argTypes: baseArgTypes
}
