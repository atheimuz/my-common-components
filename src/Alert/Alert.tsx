import React, { createContext, useContext } from "react"
import cx from "classnames"
import Overlay from "../Overlay"
import "./Alert.scss"

export interface Props {
    children: React.ReactNode
    className?: string
    isOpen: boolean
    onClose?: () => void
}

type AlertContextType = {
    onClose?: () => void;
};

const AlertContext = createContext<AlertContextType>({})
const Alert = ({ className, children, isOpen, onClose, ...rest }: Props) => {
    if (!isOpen) return null;

    return (
        <AlertContext.Provider value={{ onClose }}>
            <Overlay>
                <div
                    className={cx("my-alert", className)}
                    {...rest}
                >
                    {children}
                </div>
            </Overlay>
        </AlertContext.Provider>
    )
}

const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="my-alert-header">
            {children}
        </div>
    )
}

const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="my-alert-content">
            {children}
        </div>
    )
}

const Footer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="my-alert-footer">
            {children}
        </div>
    )
}


const CloseBtn = () => {
    const { onClose } = useContext(AlertContext);

    return (
        <button
            type="button"
            className="my-alert-close-btn"
            aria-label="닫기"
            onClick={onClose}
        >
            X
        </button>
    )
}

Alert.Header = Header;
Alert.Content = Content;
Alert.Footer = Footer;
Alert.CloseBtn = CloseBtn;

export default Alert
