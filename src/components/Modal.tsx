import Card from "@/components/Card";
import React, { PropsWithChildren, createRef } from "react";
import CloseIcon from "@/public/icon-x.svg"

export const Modal = ({ isOpen, toggleOpen, children }: PropsWithChildren<{ isOpen: boolean, toggleOpen: () => void }>) => {
    const modalRef = createRef<HTMLDivElement>()

    const backgroundClick = (event: any) => {
        if (event.target === event.currentTarget) {
            toggleOpen()
        }
    }

    if (!isOpen) { return null }
    return <div id="modal">
        <div className="modal-bg" onClick={backgroundClick}>
            <div ref={modalRef}>
                <Card>
                    <div className="modal-grid">
                        <button className="close-icon button--plain" onClick={toggleOpen}>
                            <CloseIcon height={12} />
                        </button>
                        {children}
                    </div>
                </Card>
            </div>
        </div>
    </div>
}