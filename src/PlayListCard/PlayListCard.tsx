import React from "react";
import cx from "classnames";
import "./PlayListCard.scss";

export interface Props {
    data: any;
}

const PlayListCard = ({ data }: Props) => {
    return (
        <div
            className={cx("my-play-list-card")}
            style={{
                backgroundImage: `url(${data.image})`
            }}
        >
            <div className="play-list-image-shadow" />
            <div className="play-list-content">
                <p className="play-list-title">{data.title}</p>
                <div className="play-list-counts">총 {data.counts || 0}곡</div>
            </div>
        </div>
    );
};

export default PlayListCard;
