import React from "react"
import { Story, Meta } from "@storybook/react"

import Alert, { Props } from "./Alert"
import Button from "../Button"

const baseArgs: Props = {
    position: "center",
    isOpen: true,
    children: <></>
}

const baseArgTypes = {
    position: {
        control: { type: "select" },
        options: ["top", "left", "right", "bottom", "center"]
    },
    isOpen: {
        control: { type: "boolean" }
    }
}

export default {
    title: "Example/Alert",
    component: Alert
} as Meta

export const Default: Story = {
    args: baseArgs,
    argTypes: baseArgTypes,
    render: (args) => (
        <Alert {...args}>
            <Alert.Header>
                타이틀 영역
                <Alert.CloseBtn />
            </Alert.Header>
            <Alert.Content>본문 영역</Alert.Content>
            <Alert.Footer>
                <Button theme="tertiary">취소</Button>
                <Button theme="primary">확인</Button>
            </Alert.Footer>
        </Alert>
    )
}
