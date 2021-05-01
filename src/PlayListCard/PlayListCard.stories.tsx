import React from "react";
import { Story, Meta } from "@storybook/react";

import PlayListCard, { Props } from "./PlayListCard";

export default {
    title: "Example/PlayListCard",
    component: PlayListCard
} as Meta;

const Template: Story<Props> = (args) => <PlayListCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "PlayListCard",
    data: {
        title: "최신 댄스곡 모음",
        counts: 6,
        image:
            "https://lh3.googleusercontent.com/Sd7HoSb76Z-H-bkyz31mH6YWqA14v_b2of4i71O6FJAsZpCmykstYYVwcIdJeQR4LTL4odvDVYkh1My7=w544-h544-l90-rj"
    }
};
