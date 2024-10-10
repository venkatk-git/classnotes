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

    p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <p className={cn("mb-[1rem]", className)} {...props} />
    ),

    strong: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <strong className={cn("font-bold", className)} {...props} />
    ),

    table: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <table
            className={cn("text-base border-gray-600", className)}
            {...props}
        />
    ),

    th: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <th className={cn("border py-1 px-3", className)} {...props} />
    ),

    td: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <table className={cn("border py-1 px-3", className)} {...props} />
    ),

    code: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <code className={cn("inline-code", className)} {...props} />
    ),
};

interface MDXProps {
    code: string;
}

export function MDXContent({ code }: MDXProps) {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
}
