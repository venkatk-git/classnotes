import { docsConfig } from "@/config/docs";
import Link from "next/link";

export default function JavaPage() {
    return (
        <main className="pt-10 flex flex-col items-center">
            <main className="flex flex-col gap-4">
                {docsConfig.javaDocs.map((doc, index) => (
                    <div key={`doc-${index}`} className="flex flex-col gap-1">
                        <h4 className="font-bold text-2xl">{`${index + 1}. ${
                            doc.title
                        }`}</h4>
                        <div className="flex flex-col gap-1">
                            {doc.items.map((innerDoc, index) => (
                                <Link
                                    href={innerDoc.href}
                                    key={`link-${index}`}
                                >
                                    &ensp;&ensp;&ensp;
                                    {`${index + 1}. ${innerDoc.title}`}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
        </main>
    );
}
