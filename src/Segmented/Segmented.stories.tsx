import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"

import Segmented, { Props, SegmentedItem } from "./Segmented"

export default {
    title: "Example/Segmented",
    component: Segmented
} as Meta

const Template: Story<Props> = (args) => {
    const [index, setIndex] = useState(0)
    return (
        <Segmented>
            <SegmentedItem
                {...args}
                checked={index === 0}
                onClick={() => setIndex(0)}
            >
                목록1
            </SegmentedItem>
            <SegmentedItem checked={index === 1} onClick={() => setIndex(1)}>
                목록2
            </SegmentedItem>
            <SegmentedItem checked={index === 2} onClick={() => setIndex(2)}>
                목록3
            </SegmentedItem>
        </Segmented>
    )
}

export const Default = Template.bind({})
Default.argTypes = {}
