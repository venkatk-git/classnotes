interface InfoProps {
    title: string;
    children: React.ReactNode;
}

export default function Info({ title, children }: InfoProps) {
    return (
        <div className="rounded-md bg-blue-50 dark:bg-blue-700 dark:bg-opacity-25 p-4 mb-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <InfoIcon />
                </div>
                <div className="ml-3 flex-1">
                    <h3 className="text-sm leading-5 font-medium text-blue-800 my-0 dark:text-blue-100">
                        {title}
                    </h3>
                    <div className="text-sm leading-5 text-blue-700 mt-2 no-y-margin dark:text-blue-300 tailwind-alert tailwind-alert--info">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoIcon() {
    return (
        <svg
            className="h-5 w-5 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
            />
        </svg>
    );
}
