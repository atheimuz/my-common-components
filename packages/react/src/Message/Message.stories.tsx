import React from "react"
import { Story, Meta } from "@storybook/react"

import Message, { Props } from "./Message"

export default {
    title: "Example/Message",
    component: Message
} as Meta

const Template: Story<Props> = (args) => <Message {...args} />

export const Default = Template.bind({})
Default.args = {
    children: "Message"
}
Default.argTypes = {
    type: {
        control: {
            type: "select",
            options: ["receive", "send"]
        }
    }
}
