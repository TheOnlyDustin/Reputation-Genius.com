'use client';

import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('@/components/Modal'), {
    loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded" />,
    ssr: false,
});

const WebchatForm = dynamic(() => import('@/components/WebchatForm'), {
    loading: () => <div className="animate-pulse bg-gray-200 h-full rounded" />,
    ssr: false,
});

interface WebchatDemoProps {
    className?: string;
}

export default function WebchatDemo({ className = '' }: WebchatDemoProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={`bg-primary-gradient text-white font-bold px-6 py-3 rounded-lg text-base transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap ${className}`}
            >
                See AI in Action
                <MessageSquare className="ml-2 h-4 w-4" />
            </button>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Experience Our AI Webchat"
            >
                <div className="w-full h-[600px] md:h-[500px]">
                    <WebchatForm />
                </div>
            </Modal>
        </>
    );
}
