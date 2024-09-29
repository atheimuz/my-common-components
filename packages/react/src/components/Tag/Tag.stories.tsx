import React from "react"
import { Story, Meta } from "@storybook/react"

import Tag, { Props } from "./Tag"

const baseArgs: Props = {
    type: "fill",
    color: "gray",
    children: "children"
}

const baseArgTypes = {
    color: {
        control: { type: "select" },
        options: ["red", "orange", "yellow", "green", "blue", "purple", "gray"]
    },
    type: {
        control: { type: "select" },
        options: ["fill", "line"]
    },
    children: {
        control: { type: "text" }
    }
}

export default {
    title: "Example/Tag",
    component: Tag
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
            <div>
                <div style={{ display: "flex", gap: "4px" }}>
                    {colorArray.map((color) => (
                        <Tag color={color} type="line">
                            {color}
                        </Tag>
                    ))}
                </div>
                <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
                    {colorArray.map((color) => (
                        <Tag color={color} type="fill">
                            {color}
                        </Tag>
                    ))}
                </div>
            </div>
        )
    }
}
