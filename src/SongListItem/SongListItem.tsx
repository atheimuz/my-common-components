import React from "react"
import cx from "classnames"
import "./SongListItem.scss"

interface Props {
    data: object
}

const SongListItem = ({ data }: Props) => {
    return (
        <div className={cx("song-list-item")}>
            <div className="song-list-item-image">
                <img src={data.image} alt="노래 커버 사진" />
                <div className="song-list-item-icon" />
            </div>
            <div className="song-list-item-content">
                <p className="song-list-item-title">{data.name}</p>
                <p className="song-list-item-singer">{data.singer}</p>
            </div>
        </div>
    )
}

export default SongListItem
