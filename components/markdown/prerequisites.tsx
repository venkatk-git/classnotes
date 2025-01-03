import { allJavas } from "@/.contentlayer/generated";
import Link from "next/link";

interface PrerequisitesProps {
    prerequisitesSlugs: string[];
}

interface Prerequisite {
    title: string;
    href: string;
}

export default function Prerequisites({
    prerequisitesSlugs,
}: PrerequisitesProps) {
    if (prerequisitesSlugs == null || prerequisitesSlugs.length == 0) {
        return <></>;
    }

    const prerequisites: Prerequisite[] = prerequisitesSlugs.map((slug) => {
        const doc = allJavas.find(
            (java) => java.slugAsParams === slug.trimEnd()
        );

        if (!doc) {
            return {
                title: "Unknown Title",
                href: "#",
            };
        }

        return {
            title: doc.title,
            href: doc.slug,
        };
    });

    return (
        <div className="rounded-md bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:p-6">
            <h3 className="text-md leading-5 font-medium text-gray-800 my-0 dark:text-gray-200">
                Prerequisites:
            </h3>
            <div className="text-sm leading-5 text-gray-700 mt-1 no-y-margin dark:text-gray-300">
                <ul className="list-disc list-inside pl-3 space-y-1">
                    {prerequisites.map((prerequisite: Prerequisite) => (
                        <li
                            key={`prerequisite-${prerequisite}`}
                            className="underline text-black dark:text-gray-200"
                        >
                            <Link href={prerequisite.href}>
                                {prerequisite.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
