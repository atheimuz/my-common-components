import React from "react";
import BackDropPortal from "../BackDropPortal";
import "./Overlay.scss";

const Overlay = ({ children }: { children: React.ReactNode }) => {
    return (
        <BackDropPortal>
            <div className="my-overlay">
                {children}
            </div>
        </BackDropPortal>
    )
}

export default Overlay
