import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"

import Select, { OptionProps } from "./Select"

export default {
    title: "Example/Select",
    component: Select
} as Meta

const Template: Story<OptionProps> = (args) => {
    const [state, setState] = useState<number | React.ReactNode | React.ReactNode[]>(0);

    return (
        <Select {...args} value={state} onChange={({ children }) => setState(children)}>
            <Select.Option value={0}>목록1</Select.Option>
            <Select.Option value={1}>목록2</Select.Option>
            <Select.Option value={2}>목록3</Select.Option>
        </Select>
    )
}

export const Default = Template.bind({})
Default.argTypes = {
    disabled: {
        control: { type: "boolean" }
    }
}
