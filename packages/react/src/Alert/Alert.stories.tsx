import React from "react"
import { Story, Meta } from "@storybook/react"

import Alert, { Props } from "./Alert"
import Button from "../Button"

export default {
    title: "Example/Alert",
    component: Alert
} as Meta

const Template: Story<Props> = (args) => {
    return (
        <Alert {...args}>
            <Alert.Header>타이틀 영역<Alert.CloseBtn /></Alert.Header>
            <Alert.Content>본문 영역</Alert.Content>
            <Alert.Footer>
                <Button theme="tertiary">취소</Button>
                <Button theme="primary">확인</Button>
            </Alert.Footer>
        </Alert>
    )
}

export const Default = Template.bind({})
Default.args = {
    children: "다시 시도해주세요."
}
