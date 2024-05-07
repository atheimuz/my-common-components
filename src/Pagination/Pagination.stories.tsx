import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"

import Pagination, { Props } from "./Pagination"

export default {
    title: "Example/Pagination",
    component: Pagination
} as Meta

const Template: Story<Props> = ({ current, ...args }) => {
    const [index, setIndex] = useState(current)
    return (
        <Pagination
            {...args}
            current={index}
            onChange={(val) => setIndex(val)}
        />
    )
}

export const Default = Template.bind({})
Default.argTypes = {
    total: {
        control: {
            type: "number"
        }
    }
}
