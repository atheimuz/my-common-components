import React from "react"
import { Story, Meta } from "@storybook/react"

import SongListItem, { Props } from "./SongListItem"

export default {
    title: "Example/SongListItem",
    component: SongListItem
} as Meta

const Template: Story<Props> = (args) => <SongListItem {...args} />

export const Default = Template.bind({})
Default.args = {
    children: "SongListItem",
    data: {
        name: "마.피.아. In the morning",
        singer: "ITZY(있지)",
        image:
            "https://lh3.googleusercontent.com/Sd7HoSb76Z-H-bkyz31mH6YWqA14v_b2of4i71O6FJAsZpCmykstYYVwcIdJeQR4LTL4odvDVYkh1My7=w544-h544-l90-rj"
    }
}
