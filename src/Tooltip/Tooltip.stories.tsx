import React from "react"
import { Story, Meta } from "@storybook/react"

import Tooltip, { Props } from "./Tooltip"

export default {
    title: "Example/Tooltip",
    component: Tooltip
} as Meta

const Template: Story<Props> = (args) => (
    <Tooltip {...args} style={{ display: "inline-flex", margin: "100px" }}>
        <div>텍스트</div>
    </Tooltip>
)

export const Default = Template.bind({})
Default.argTypes = {
    title: {
        control: {
            type: "text"
        },
        defaultValue: "추가 설명"
    }
}
