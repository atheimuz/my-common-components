import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"

import Segmented, { ItemProps } from "./Segmented"

export default {
    title: "Example/Segmented",
    component: Segmented
} as Meta

const Template: Story<ItemProps> = () => {
    const [value, setValue] = useState<number>(1)

    return (
        <Segmented value={value} onChange={(val) => setValue(val as number)}>
            <Segmented.Item value={1}>목록1</Segmented.Item>
            <Segmented.Item value={2}>목록2</Segmented.Item>
            <Segmented.Item value={3}>목록3</Segmented.Item>
        </Segmented>
    )
}

export const Default = Template.bind({})
Default.argTypes = {}
