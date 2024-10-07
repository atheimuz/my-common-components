import React, { ChangeEvent, useState } from "react"
import { StoryObj, Meta } from "@storybook/react"

import RadioGroup, { ItemProps } from "./RadioGroup"

const baseArgs: ItemProps = {
    value: "yellow",
    children: "노란색"
}

const baseArgTypes = {
    disabled: {
        control: { type: "boolean" }
    },
    value: {
        control: { type: "text" }
    }
}
export default {
    title: "Example/Radio",
    component: RadioGroup.Item
} as Meta

export const Default: StoryObj = {
    args: baseArgs,
    argTypes: baseArgTypes,
    render: (args: ItemProps) => {
        const [value, setValue] = useState<string>("yellow")
        return (
            <RadioGroup
                value={value}
                name="test"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                }
            >
                <RadioGroup.Item {...args} />
                {[
                    { label: "초록색", value: "green" },
                    { label: "파란색", value: "blue" }
                ].map((item) => (
                    <RadioGroup.Item
                        key={item.value}
                        value={item.value}
                        name={args.name}
                    >
                        {item.label}
                    </RadioGroup.Item>
                ))}
            </RadioGroup>
        )
    }
}
