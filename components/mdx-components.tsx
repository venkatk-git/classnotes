import { useMDXComponent } from "next-contentlayer/hooks";

// const components = {
//     h1: ({ ...props, children }) => (
//         <h1
//             {...props}
//             className="leading-tight text-4xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis"
//         >
//             {children}
//         </h1>
//     ),

//     h2: ({ ...props, children }) => (
//         <h1
//             className="leading-tight text-3xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis"
//             {...props}
//         >
//             {children}
//         </h1>
//     ),

//     h3: ({ ...props, children }) => (
//         <h3
//             {...props}
//             className="leading-snug text-2xl font-semibold mb-4 mt-8"
//         >
//             {children}
//         </h3>
//     ),

//     h4: ({ ...props, children }): JSX.Element => (
//         <h4 {...props} className="leading-none text-xl font-semibold mb-2 mt-6">
//             {children}
//         </h4>
//     ),

//     p: (props): JSX.Element => <p {...props} />,

//     li: ({ children, ...props }): JSX.Element => (
//         <li {...props}>
//             <div className="flex-1">{children}</div>
//         </li>
//     ),

//     inlineCode: (props): JSX.Element => (
//         <code {...props} className="inline-code" />
//     ),

//     a: ({ children, ...props }) => (
//         <a
//             target={
//                 !props.href || props.href.startsWith("#") ? undefined : "_blank"
//             }
//             {...props}
//         >
//             {children}
//         </a>
//     ),

//     pre: ({ children, ...props }) => {
//         return <pre {...props}>{children}</pre>;
//     },
// };

interface MDXProps {
    code: string;
}

export function MDXContent({ code }: MDXProps) {
    const Component = useMDXComponent(code);

    return <Component />;
}
