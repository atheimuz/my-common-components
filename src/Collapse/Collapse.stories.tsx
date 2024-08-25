import React from "react"
import { Story, Meta } from "@storybook/react"

import Collapse, { PanelProps } from "./Collapse"

export default {
    title: "Example/Collapse",
    component: Collapse
} as Meta

const Template: Story<PanelProps> = (args) => (
    <Collapse>
        <Collapse.Panel {...args}>내용</Collapse.Panel>
        <Collapse.Panel title="타이틀2">내용</Collapse.Panel>
        <Collapse.Panel title="타이틀3">내용</Collapse.Panel>
    </Collapse>
)

export const Default = Template.bind({})
Default.argTypes = {
    title: {
        control: { type: "text" },
        defaultValue: "타이틀1"
    }
}
