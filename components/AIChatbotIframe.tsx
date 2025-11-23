export default function AIChatbotIframe() {
    return (
        <iframe
            src="https://pulseai.synapsescode.com?survey=31ab27a7-c37f-42b4-94b0-567dbd5b70f5"
            width="100%"
            height="100%"
            className="border-0 rounded-lg"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            allow="camera *; microphone *; geolocation *"
            title="Webchat Demo"
            loading="lazy"
        />
    );
}