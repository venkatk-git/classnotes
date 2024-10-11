import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer2/hooks";

const components = {
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn(
                "leading-tight text-3xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis",
                className
            )}
            {...props}
        />
    ),

    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={cn(
                "leading-none text-xl font-semibold mb-2 mt-6",
                className
            )}
            {...props}
        />
    ),

    p: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className={cn("mb-[1rem]", className)} {...props} />
    ),

    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
        <pre
            className={cn(
                "break-all whitespace-pre-wrap rounded-md max-w-full overflow-x-auto",
                className
            )}
            {...props}
        />
    ),

    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <strong className={cn("font-bold", className)} {...props} />
    ),

    table: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
        <table
            className={cn("text-base border-gray-600", className)}
            {...props}
        />
    ),

    th: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
        <th className={cn("border py-1 px-3", className)} {...props} />
    ),

    td: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableDataCellElement>) => (
        <td className={cn("border py-1 px-3", className)} {...props} />
    ),

    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code className={cn("p-2", className)} {...props} />
    ),
};

interface MDXProps {
    code: string;
}

export function MDXContent({ code }: MDXProps) {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
}
