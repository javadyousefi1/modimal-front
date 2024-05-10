// framer motion
import { motion, AnimatePresence } from "framer-motion";
// types
import { ReactNode } from "react";

type ChildrenModalPropType = {
    isVisible: boolean;
    handleCloseModal: () => void;
    children: ReactNode
}

const ChildrenModal: React.FC<ChildrenModalPropType> = ({ isVisible, handleCloseModal, children }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed top-0 left-0 z-50 w-full h-full backdrop-blur-sm bg-black/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="flex items-center justify-center w-full h-full"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.5 }}
                    >
                        <motion.div
                            className="relative p-8 bg-white max-w-[300px] md:max-w-[600px]"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                            {/* navbar */}
                            <div className="flex flex-col">
                                {/* cross icon */}
                                <button type="button" onClick={() => handleCloseModal()} className="absolute top-2 left-2">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#0C0C0C" />
                                    </svg>
                                </button>
                                <div className="mt-2 ">{children}</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ChildrenModal;
