'use client';

import React, { useState, useCallback } from 'react';
import { Phone } from 'lucide-react';
import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('@/components/Modal'), {
    loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded" />,
    ssr: false,
});

const WebchatForm = dynamic(() => import('@/components/WebchatForm'), {
    loading: () => <div className="animate-pulse bg-gray-200 h-full rounded" />,
    ssr: false,
});

interface BookDemoButtonProps {
    className?: string;
    text?: string;
    icon?: React.ReactNode;
    onMobileClick?: () => void;
}

const BookDemoButton = React.memo<BookDemoButtonProps>(function BookDemoButton({
    className = '',
    text = 'Book a Demo',
    icon,
    onMobileClick,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <>
            {/* Desktop Button - Opens Modal */}
            <button
                onClick={openModal}
                className={`!hidden lg:!inline-flex items-center justify-center ${className}`}
            >
                {text}
                {icon}
            </button>

            {/* Mobile Button - Calls Phone */}
            <a
                href="tel:+14133142553"
                className={`lg:!hidden !inline-flex items-center justify-center ${className}`}
                onClick={onMobileClick}
            >
                {text}
                {icon || <Phone className="ml-2 h-4 w-4" />}
            </a>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title="Book a Demo"
            >
                <div className="w-full h-[600px] md:h-[752px]">
                    <WebchatForm />
                </div>
            </Modal>
        </>
    );
});

BookDemoButton.displayName = 'BookDemoButton';

export default BookDemoButton;
