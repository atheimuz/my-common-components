import React from "react"
import { Story, Meta } from "@storybook/react"

import Button, { Props } from "./Button"

export default {
    title: "Example/Button",
    component: Button
} as Meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.argTypes = {
    children: {
        control: {
            type: "text"
        },
        defaultValue: "Button"
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
                        key={theme}
                        theme={theme}
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
