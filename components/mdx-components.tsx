"use client";

import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Info from "./markdown/info";
import Warning from "./markdown/warning";
import Danger from "./markdown/danger";
import CodeBlock from "./markdown/code-block";

const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className={cn(
                "text-2xl font-bold text-gray-900 dark:text-dark-high-emphasis sm:text-3xl",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn(
                "leading-tight text-3xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={cn(
                "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={cn(
                "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
            className={cn(
                "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
            className={cn(
                "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
                className
            )}
            {...props}
        />
    ),
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
        <a
            className={cn(
                "font-medium underline underline-offset-4",
                className
            )}
            {...props}
        />
    ),
    p: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLElement>) => (
        <blockquote
            className={cn("mt-6 border-l-2 pl-6 italic", className)}
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={cn("rounded-md", className)} alt={alt} {...props} />
    ),
    hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
        <hr className="my-4 md:my-8" {...props} />
    ),
    table: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto">
            <table
                className={cn(
                    "relative w-full overflow-hidden border-none text-sm",
                    className
                )}
                {...props}
            />
        </div>
    ),
    tr: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr
            className={cn("last:border-b-none m-0 border-b", className)}
            {...props}
        />
    ),
    th: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={cn(
                "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    ),
    td: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={cn(
                "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                className
            )}
            {...props}
        />
    ),
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
        return (
            <pre
                className={cn(
                    "mb-4 mt-6 overflow-x-auto rounded-lg px-2 whitespace-pre-wrap",
                    className
                )}
                {...props}
            />
        );
    },
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className={cn(
                "relative rounded px-[0.8rem] font-mono text-sm inline-code",
                className
            )}
            {...props}
        />
    ),

    Info,
    Warning,
    Danger,
    CodeBlock,
};

interface MDXProps {
    code: string;
}

export function MDXContent({ code }: MDXProps) {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
}
