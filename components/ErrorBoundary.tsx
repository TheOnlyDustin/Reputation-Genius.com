'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-center">
                        <div className="text-6xl mb-4">⚠️</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Something went wrong
                        </h3>
                        <p className="text-gray-600 mb-4">
                            This content couldn't be loaded. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => this.setState({ hasError: false, error: undefined })}
                            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;