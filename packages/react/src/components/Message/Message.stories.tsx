import React from "react"
import { Story, Meta } from "@storybook/react"

import Message, { Props } from "./Message"

const baseArgs: Props = {
    children: "children",
    color: "gray"
}

const baseArgTypes = {
    color: {
        control: { type: "select" },
        options: ["red", "orange", "yellow", "green", "blue", "purple", "gray"]
    },
    children: {
        control: { type: "text" }
    }
}

export default {
    title: "Example/Message",
    component: Message
} as Meta

export const Default: Story = {
    args: baseArgs,
    argTypes: baseArgTypes
}

export const Color: Story = {
    render: () => {
        const colorArray = [
            "gray",
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "purple"
        ]
        return (
            <div style={{ display: "flex", gap: "4px" }}>
                {colorArray.map((color) => (
                    <Message color={color}>{color}</Message>
                ))}
            </div>
        )
    }
}
