"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TableOfContents } from "@/lib/toc";
import useActiveItem from "@/hooks/use-active-item";

// interface TOCProps {
//     toc: TableOfContents;
// }

export function TOC({ toc }) {
    const itemIds = React.useMemo(
        () =>
            toc.items
                ? toc.items
                      .flatMap((item) => [
                          item.url,
                          item?.items?.map((item) => item.url),
                      ])
                      .flat()
                      .filter(Boolean)
                      .map((id) => id?.split("#")[1])
                : [],
        [toc]
    );

    const activeHeading = useActiveItem(itemIds);

    if (!toc?.items?.length) {
        return null;
    }

    return (
        <div className="space-x-2">
            <TOCTree tree={toc} activeItem={activeHeading} />
        </div>
    );
}

interface TOCTreeProps {
    tree: TableOfContents;
    level?: number;
    activeItem?: string;
}

export function TOCTree({ tree, level = 1, activeItem }: TOCTreeProps) {
    return tree?.items?.length && level < 3 ? (
        <ul className={cn("m-0 list-none text-sm", { "pl-4": level !== 1 })}>
            {tree.items.map((item, idx) => {
                return (
                    <li key={`toc-link-${idx}`} className="mt-0 pt-2">
                        <a
                            href={item.url}
                            className={cn(
                                "inline-block no-underline transition-all dark:hover:text-gray-400 hover:font-medium hover:text-gray-900",
                                item.url === `#${activeItem}`
                                    ? "font-medium text-gray-900 dark:text-gray-400"
                                    : "text-gray-600 dark:text-gray-500"
                            )}
                        >
                            {item.title}
                        </a>
                        {item?.items?.length && (
                            <TOCTree
                                tree={item}
                                level={level + 1}
                                activeItem={activeItem}
                            />
                        )}
                    </li>
                );
            })}
        </ul>
    ) : null;
}
