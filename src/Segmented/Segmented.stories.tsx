import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"

import Segmented, { ItemProps } from "./Segmented"

export default {
    title: "Example/Segmented",
    component: Segmented
} as Meta

const Template: Story<ItemProps> = () => {
    const [index, setIndex] = useState<number>(0)

    return (
        <Segmented index={index}>
            <Segmented.Item onClick={() => setIndex(0)}>
                목록1
            </Segmented.Item>
            <Segmented.Item onClick={() => setIndex(1)}>
                목록2
            </Segmented.Item>
            <Segmented.Item onClick={() => setIndex(2)}>
                목록3
            </Segmented.Item>
        </Segmented>
    )
}

export const Default = Template.bind({})
Default.argTypes = {}
