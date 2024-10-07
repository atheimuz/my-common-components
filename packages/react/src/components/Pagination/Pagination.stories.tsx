import { StoryObj, Meta } from "@storybook/react"

import Pagination, { Props } from "./Pagination"

const baseArgs: Props = {
    current: 1,
    unit: 10,
    total: 30,
    onChange: (number) => console.log(number)
}

const baseArgTypes = {
    current: {
        control: { type: "number" }
    },
    unit: {
        control: { type: "number" }
    },
    total: {
        control: { type: "number" }
    }
}

export default {
    title: "Example/Pagination",
    component: Pagination
} as Meta

export const Default: StoryObj = {
    args: baseArgs,
    argTypes: baseArgTypes
}
