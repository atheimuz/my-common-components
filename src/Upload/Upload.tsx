import React from "react"
import cx from "classnames"
import "./Upload.scss"

export interface Props {
    children?: React.ReactNode
    className?: string
    checked: boolean
    disabled: boolean
}
export interface itemProps {
    file: File
    status: "error" | "done" | "uploading" | "removed"
    onRemove: () => void
}

export const UploadItem = ({
    status = "removed",
    file,
    onRemove
}: itemProps) => {
    return (
        <li className={cx("my-upload-list-item", status)}>
            <span className="my-upload-file-name">{file.name}</span>
            {onRemove && (
                <button className="my-upload-delete-btn" onClick={onRemove}>
                    X
                </button>
            )}
        </li>
    )
}

const Upload = ({ children, className = "", ...rest }: Props) => {
    return (
        <div className={cx("my-upload", className)}>
            <label className="my-upload-box">
                <input type="file" hidden {...rest} />
                <p>파일 업로드</p>
                <span>업로드할 파일을 드래그해 주세요.</span>
            </label>
            {children && <ul className="my-upload-list">{children}</ul>}
        </div>
    )
}

export default Upload
