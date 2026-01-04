import React from "react";
import { motion } from "framer-motion";
import GenericModal from "./GenericModal";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
    bookingDetails?: {
        label: string;
        value: string;
    }[];
    buttonText?: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
    isOpen,
    onClose,
    title = "Booking Successful!",
    message = "Your booking has been confirmed. We've sent a confirmation email to your inbox.",
    bookingDetails,
    buttonText = "Done",
}) => {
    return (
        <GenericModal
            isOpen={isOpen}
            onClose={onClose}
            isCentered={true}
            isCross={true}
            contentClassName="border-0 shadow-2xl"
            bodyClassName="p-6 md:p-8"
        >
            <div className="flex flex-col items-center text-center">
                {/* Success Icon with Animation */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.1,
                    }}
                    className="mb-6"
                >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                        <motion.svg
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="w-12 h-12 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                            />
                        </motion.svg>
                    </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                >
                    {title}
                </motion.h2>

                {/* Message */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-600 mb-6 max-w-md"
                >
                    {message}
                </motion.p>

                {/* Booking Details (Optional) */}
                {bookingDetails && bookingDetails.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-full bg-gray-50 rounded-lg p-4 mb-6 space-y-3"
                    >
                        {bookingDetails.map((detail, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center text-sm"
                            >
                                <span className="text-gray-600 font-medium">{detail.label}</span>
                                <span className="text-gray-900 font-semibold">{detail.value}</span>
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* Action Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    onClick={onClose}
                    className="w-full bg-[var(--bg-dark)] text-[var(--text-light)] py-2 rounded mt-4 cursor-pointer"
                >
                    {buttonText}
                </motion.button>
            </div>
        </GenericModal>
    );
};

export default SuccessModal;