import { useState } from "react";
// framer-motion
import { motion } from 'framer-motion';

type FaqBoxPropType = {
    answer: string;
    question: string;
}

const FaqBox: React.FC<FaqBoxPropType> = ({ answer, question }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggleOpen = () => {
        setIsOpen(prev => !prev)
    }

    const plusIcon = (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6654 8.66683H8.66536V12.6668H7.33203V8.66683H3.33203V7.3335H7.33203V3.3335H8.66536V7.3335H12.6654V8.66683Z" fill="#0C0C0C" />
    </svg>)

    const minIcon = (<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7.8335H12V9.16683H4V7.8335Z" fill="#748C70" />
    </svg>
    )

    return (<>
        <div className="w-full py-4 border-b cursor-pointer border-neutral-400">
            <div className="flex items-center justify-between">
                {/* answer */}

                <div className={`text-xs md:text-xl md:font-bold font-semibold ${isOpen ? "text-primary" : "text-black"}`}>{question}</div>
                <div><button data-testid="openButton" type="button" onClick={handleToggleOpen}>
                    {isOpen ? minIcon : plusIcon}
                </button></div>
            </div>
            {/* question */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : "0px", opacity: isOpen ? 1 : 0 }}
                style={{ overflow: 'hidden' }}
                variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                exit={{ opacity: 0, }}
            >
                <span className={`mt-2 text-xs font-semibold md:text-sm`}>{answer}</span>
            </motion.div>
        </div>
    </>);
}

export default FaqBox;