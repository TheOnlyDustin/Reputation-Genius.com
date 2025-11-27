'use client';

import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import Modal from '@/components/Modal';
import WebchatForm from '@/components/WebchatForm';

interface BookDemoButtonProps {
    className?: string;
    text?: string;
    icon?: React.ReactNode;
    onMobileClick?: () => void;
}

export default function BookDemoButton({
    className = '',
    text = 'Book a Demo',
    icon,
    onMobileClick,
}: BookDemoButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Desktop Button - Opens Modal */}
            <button
                onClick={() => setIsModalOpen(true)}
                className={`!hidden lg:!inline-flex items-center justify-center ${className}`}
            >
                {text}
                {icon}
            </button>

            {/* Mobile Button - Calls Phone */}
            <a
                href="tel:4133142553"
                className={`lg:!hidden !inline-flex items-center justify-center ${className}`}
                onClick={onMobileClick}
            >
                {text}
                {icon || <Phone className="ml-2 h-4 w-4" />}
            </a>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Book a Demo"
            >
                <div className="w-full h-[600px] md:h-[752px]">
                    <WebchatForm />
                </div>
            </Modal>
        </>
    );
}
