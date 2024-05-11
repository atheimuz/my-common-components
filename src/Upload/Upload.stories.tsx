import React, { useState } from "react"
import { Story, Meta } from "@storybook/react"

import Upload, { Props, UploadItem } from "./Upload"

export default {
    title: "Example/Upload",
    component: Upload
} as Meta

const Template: Story<Props> = (args) => {
    const [files, setFiles] = useState([])

    const onAddFiles = (e) => {
        const newFiles = e.target.files
        setFiles((prev) => [...prev, ...newFiles])
    }

    return (
        <Upload {...args} multiple onChange={onAddFiles}>
            {files.map((item) => (
                <UploadItem file={item} />
            ))}
        </Upload>
    )
}

export const Default = Template.bind({})
Default.argTypes = {
    children: {
        control: {
            type: "text"
        },
        defaultValue: "Upload"
    }
}
