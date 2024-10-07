import React from "react"
import { StoryObj, Meta } from "@storybook/react"

import Button, { Props } from "./Button"

const baseArgs: Props = {
    theme: "primary",
    size: "middle",
    children: "버튼"
}

const baseArgTypes = {
    theme: {
        control: { type: "select" },
        options: ["primary", "secondary", "tertiary", "dashed", "link"]
    },
    size: {
        control: { type: "select" },
        options: ["small", "middle", "large"]
    },
    children: {
        control: { type: "text" }
    }
}

export default {
    title: "Example/Button",
    component: Button
} as Meta

export const Default: StoryObj = {
    args: baseArgs,
    argTypes: baseArgTypes
}

export const Theme: StoryObj = {
    render: () => {
        const themeArray: Props["theme"][] = [
            "primary",
            "secondary",
            "tertiary",
            "dashed",
            "link"
        ]

        return (
            <>
                {themeArray.map((theme, index) => (
                    <div
                        key={index}
                        style={{ display: "flex", marginBottom: "10px" }}
                    >
                        <Button key={theme} theme={theme}>
                            {theme}
                        </Button>
                        <Button theme={theme} disabled>
                            {theme}
                        </Button>
                    </div>
                ))}
            </>
        )
    }
}
