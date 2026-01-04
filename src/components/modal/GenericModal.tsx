import React, { useRef, useEffect } from "react";
import { Modal, Button, ModalProps } from "react-bootstrap";

interface GenericModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footerBody?: React.ReactNode;
    className?: string;
    dialogClassName?: string;
    modalProps?: ModalProps;
    isCross?: boolean;
    isCentered?: boolean;
    titleClassName?: string;
    bodyClassName?: string;
    hasTitle?: boolean;
    contentClassName?: string;
}

const GenericModal: React.FC<GenericModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    className,
    titleClassName,
    hasTitle = true,
    dialogClassName,
    bodyClassName,
    isCentered = false,
    footerBody,
    contentClassName,
    modalProps = {},
    isCross = true,
}) => {
    const modalContentRef = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        console.log("Modal closing...");
        onClose();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                modalContentRef.current &&
                !modalContentRef.current.contains(event.target as Node)
            ) {
                console.log("Clicked outside modal");
                handleClose();
            }
        };

        if (isOpen) {
            // Add a slight delay to prevent immediate closing
            setTimeout(() => {
                document.addEventListener("mousedown", handleClickOutside);
            }, 100);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <Modal
            show={isOpen}
            onHide={handleClose}
            centered={isCentered}
            backdrop={modalProps.backdrop ?? true}
            keyboard={modalProps.keyboard ?? true}
            {...modalProps}
            className={`${className} bg-white/10 backdrop-blur-md`}
            dialogClassName={`${dialogClassName || ''} modal-dialog-centered`}
            contentClassName={contentClassName}
        >
            <div ref={modalContentRef}>
                {isCross ? (
                    (title?.length || 0) > 0 ? (
                        <div className="px-3 relative">
                            <div className="flex justify-between items-center pt-4 border-b-[1px] border-[#E5E5E5] pb-2">
                                {title && (
                                    <Modal.Title className={`text-black ${titleClassName || ''}`}>
                                        {title}
                                    </Modal.Title>
                                )}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl cursor-pointer z-50 bg-transparent border-0 p-1"
                                    aria-label="Close"
                                    type="button"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl cursor-pointer z-50 bg-transparent border-0 p-1"
                            aria-label="Close"
                            type="button"
                        >
                            ✕
                        </button>
                    )
                ) : (
                    title && <Modal.Title>{title}</Modal.Title>
                )}
                <Modal.Body className={bodyClassName}>{children}</Modal.Body>
                {footerBody && <Modal.Footer>{footerBody}</Modal.Footer>}
            </div>
        </Modal>
    );
};

export default GenericModal;