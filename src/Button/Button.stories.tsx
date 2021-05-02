import React from "react"
import { Story, Meta } from "@storybook/react"

import Button, { Props } from "./Button"

export default {
    title: "Example/Button",
    component: Button
} as Meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    children: "Button"
}
Default.argTypes = {
    theme: {
        control: {
            type: "select",
            options: ["primary", "secondary", "tertiary", "dashed", "link"]
        }
    },
    size: {
        control: { type: "select", options: ["small", "middle", "large"] }
    },
    disabled: {
        control: { type: "boolean" }
    }
}

export const Theme: Story<Props> = () => {
    const themeArray = ["primary", "secondary", "tertiary", "dashed", "link"]

    return (
        <>
            {themeArray.map((theme, index) => (
                <div
                    key={index}
                    style={{ display: "flex", marginBottom: "10px" }}
                >
                    <Button
                        theme={theme}
                        key={index}
                        // style={{ marginRight: "15px" }}
                    >
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
