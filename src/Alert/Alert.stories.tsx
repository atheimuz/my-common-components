import React from "react"
import { Story, Meta } from "@storybook/react"

import Alert, {Props} from "./Alert"

export default {
    title: "Example/Alert",
    component: Alert
} as Meta

const Template: Story<Props> = (args) => <Alert {...args} />

export const Default = Template.bind({})
Default.args = {
    children: "다시 시도해주세요."
}
Default.argTypes = {
    status: {
        control: {
            type: "boolean"
        }
    }
}
