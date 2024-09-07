import React, { useState, useEffect } from "react"
import { Story, Meta } from "@storybook/react"

import Switch, { Props } from "./Switch"

export default {
    title: "Example/Switch",
    component: Switch
} as Meta

const Template: Story<Props> = ({ checked, ...rest }) => {
    const [status, setStatus] = useState<boolean>(checked)

    useEffect(() => {
        setStatus(checked)
    }, [checked])

    return (
        <Switch {...rest} checked={status} onClick={() => setStatus(!status)} />
    )
}

export const Default = Template.bind({})
Default.argTypes = {
    checked: {
        control: {
            type: "boolean"
        }
    }
}
