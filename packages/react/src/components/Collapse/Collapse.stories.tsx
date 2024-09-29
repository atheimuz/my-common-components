import React from "react"
import { Story, Meta } from "@storybook/react"

import Collapse, { PanelProps } from "./Collapse"

const baseArgs: PanelProps = {
    title: "타이틀1",
    children: "내용"
}

const baseArgTypes = {
    title: {
        control: { type: "text" }
    },
    children: {
        control: { type: "text" }
    }
}

export default {
    title: "Example/Collapse",
    component: Collapse
} as Meta

export const Default: Story = {
    args: baseArgs,
    argTypes: baseArgTypes,
    render: (args: PanelProps) => (
        <Collapse>
            <Collapse.Panel {...args}>내용</Collapse.Panel>
            <Collapse.Panel title="타이틀2">내용</Collapse.Panel>
            <Collapse.Panel title="타이틀3">내용</Collapse.Panel>
        </Collapse>
    )
}
