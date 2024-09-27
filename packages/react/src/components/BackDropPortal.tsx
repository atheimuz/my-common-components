import { createPortal } from "react-dom"

const id = "my-overlay-root"
const BackDropPortal = ({ children }: { children: React.ReactNode }) => {
    const modalRoot = document.getElementById(id)

    if (modalRoot) {
        return createPortal(children, modalRoot)
    } else {
        const rootEl = document.createElement("div")
        rootEl.setAttribute("id", id)
        document.querySelector("body")?.append(rootEl)
        return createPortal(children, rootEl)
    }
}

export default BackDropPortal
