"use client"

import React, { createContext, ReactNode, useCallback, useState } from "react"
import BackDropPortal from "../BackDropPortal"
import Toast from "./Toast" // Adjust the import path as necessary

interface ToastMessage {
    id: number
    status?: "success" | "error"
    content: ReactNode
}

export interface ToastContextType {
    showToast: ({
        content,
        status
    }: {
        content: ReactNode
        status: "success" | "error"
    }) => void
}

export const ToastContext = createContext<ToastContextType | undefined>(
    undefined
)

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
    children
}: {
    children: ReactNode
}) => {
    const [toasts, setToasts] = useState<ToastMessage[]>([])
    const [nextId, setNextId] = useState<number>(0)

    const showToast = useCallback(
        ({
            content,
            status
        }: {
            content: ReactNode
            status?: "success" | "error"
        }) => {
            const id = nextId
            setToasts((prevToasts: ToastMessage[]) => [
                ...prevToasts,
                { id, content, status }
            ])
            setNextId((prevId: number) => prevId + 1)

            setTimeout(() => {
                setToasts((prevToasts: ToastMessage[]) =>
                    prevToasts.filter((toast) => toast.id !== id)
                )
            }, 6000)
        },
        [nextId]
    )

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toasts.length > 0 && (
                <BackDropPortal>
                    <div className="my-toast-overlay">
                        {toasts.map((toast: ToastMessage) => (
                            <Toast
                                key={toast.id}
                                isOpen={true}
                                status={toast.status}
                            >
                                {toast.content}
                            </Toast>
                        ))}
                    </div>
                </BackDropPortal>
            )}
        </ToastContext.Provider>
    )
}
