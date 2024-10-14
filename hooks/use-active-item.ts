import { throttle } from "lodash";
import React from "react";

export default function useActiveItem(itemIds: string[]) {
    const [activeId, setActiveId] = React.useState(null);

    React.useEffect(() => {
        if (!("IntersectionObserver" in window)) {
            console.warn(
                "Intersection Observer is not supported by your browser :("
            );
            return;
        }

        const observerOptions = {
            rootMargin: `0% 0% -80% 0%`,
        };

        const handleIntersect = throttle((entries) => {
            let foundActive = false;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                    foundActive = true;
                }
            });

            if (!foundActive) {
                setActiveId(null);
            }
        }, 100);

        const observer = new IntersectionObserver(
            handleIntersect,
            observerOptions
        );

        itemIds?.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                observer.observe(el);
            }
        });

        return () => {
            itemIds?.forEach((id) => {
                const el = document.getElementById(id);

                if (el) {
                    observer.unobserve(el);
                }
            });
        };
    }, [itemIds, setActiveId]);

    return activeId;
}
