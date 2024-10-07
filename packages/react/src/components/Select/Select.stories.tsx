import React, { useState } from "react"
import { StoryObj, Meta } from "@storybook/react"

import Select, { Props } from "./Select"

const baseArgTypes = {
    disabled: {
        control: { type: "boolean" }
    }
}

export default {
    title: "Example/Select",
    component: Select
} as Meta

export const Default: StoryObj = {
    argTypes: baseArgTypes,
    render: () => {
        const [state, setState] = useState<string | number>(1)

        return (
            <Select
                value={state}
                renderedValue={<>선택한 값은 {state}</>}
                onChange={(newValue) => setState(newValue)}
            >
                {[
                    { label: "목록1", value: 1 },
                    { label: "목록2", value: 2 },
                    { label: "목록3", value: 3 }
                ].map((item) => (
                    <Select.Option value={item.value}>
                        {item.label}
                    </Select.Option>
                ))}
            </Select>
        )
    }
}
