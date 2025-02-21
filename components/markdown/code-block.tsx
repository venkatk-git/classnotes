import React from "react";

interface CodeBlockProps {
    children: React.ReactNode;
}

function CodeBlock({ children }: CodeBlockProps) {
    return (
        <section className="bg-gray-800/50 my-6 overflow-hidden rounded-lg border text-sm">
            <div className="flex flex-row items-center gap-2 bg-gray-800/60 px-4 border-b py-4">
                <div className="w-3 h-[11px] bg-[#f46b5d] shadow-[0_0_20px_#f46b5d] rounded-full" />
                <div className="w-3 h-[11px] bg-[#f9bd4e] shadow-[0_0_20px_#f9bd4e] rounded-full" />
                <div className="w-3 h-[11px] bg-[#57c353] shadow-[0_0_20px_#57c353] rounded-full" />
            </div>
            <div>{children}</div>
        </section>
    );
}

export default CodeBlock;
