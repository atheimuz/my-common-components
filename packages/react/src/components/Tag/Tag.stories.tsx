import React from "react"
import { Story, Meta } from "@storybook/react"

import Tag, { Props } from "./Tag"

export default {
    title: "Example/Tag",
    component: Tag
} as Meta

const Template: Story<Props> = (args) => (
    <div style={{ display: "flex", gap: "4px" }}>
        <Tag {...args} />
        <Tag>test</Tag>
    </div>
)

export const Default = Template.bind({})
Default.argTypes = {
    children: {
        control: {
            type: "text"
        },
        defaultValue: "태그1"
    }
}
