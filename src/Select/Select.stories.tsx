import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"

import Select, { Props } from "./Select"

export default {
    title: "Example/Select",
    component: Select
} as Meta

const Template: Story<Props> = () => {
    const [state, setState] = useState<string | number>(0);

    return (
        <Select value={state} onChange={(newValue) => setState(newValue)}>
            {[{ label: "목록1", value: 1 }, { label: "목록2", value: 2 }, { label: "목록1", value: 3 }].map(item => (
                <Select.Option value={item.value}>{item.label}</Select.Option>
            ))}
        </Select>
    )
}

export const Default = Template.bind({})
Default.argTypes = {
    disabled: {
        control: { type: "boolean" }
    }
}
