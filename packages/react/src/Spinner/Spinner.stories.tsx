import React from "react"
import { Story, Meta } from "@storybook/react"

import Spinner, { Props } from "./Spinner"

export default {
    title: "Example/Spinner",
    component: Spinner
} as Meta

const Template: Story<Props> = (args) => <Spinner {...args} />

export const Default = Template.bind({})