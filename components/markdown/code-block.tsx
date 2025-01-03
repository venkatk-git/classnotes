import React from "react";

interface CodeBlockProps {
    children: React.ReactNode;
}

function CodeBlock({ children }: CodeBlockProps) {
    return (
        <section className="bg-gray-800/50 my-6 overflow-hidden rounded-lg border text-sm">
            <div className="flex flex-row items-center gap-2 bg-gray-800/60 px-4 border-b py-4">
                <div className="w-3 h-[11px] bg-red-500 rounded-full" />
                <div className="w-3 h-[11px] bg-yellow-500 rounded-full" />
                <div className="w-3 h-[11px] bg-green-500 rounded-full" />
            </div>
            <div>{children}</div>
        </section>
    );
}

export default CodeBlock;
