import React, { useState } from "react"
import { StoryObj, Meta } from "@storybook/react"

import Tab from "./Tab"

export default {
    title: "Example/Tab",
    component: Tab
} as Meta

export const Default: StoryObj = {
    render: () => {
        const [value, setValue] = useState<number>(1)

        return (
            <Tab value={value} onChange={(val) => setValue(val as number)}>
                <Tab.Item value={1}>목록1</Tab.Item>
                <Tab.Item value={2}>목록2</Tab.Item>
                <Tab.Item value={3}>목록3</Tab.Item>
                <Tab.Item value={4}>목록4</Tab.Item>
                <Tab.Item value={5}>목록5</Tab.Item>
                <Tab.Item value={6}>목록6</Tab.Item>
                <Tab.Item value={7}>목록7</Tab.Item>
                <Tab.Item value={8}>목록8</Tab.Item>
            </Tab>
        )
    }
}
