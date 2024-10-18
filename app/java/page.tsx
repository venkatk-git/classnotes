import { docsConfig } from "@/config/docs";
import { javaInfo } from "@/config/site";
import Link from "next/link";

export default function JavaPage() {
    return (
        <main className="flex flex-col items-center">
            <section className="py-12 sm:py-16 w-full bg-java-red-light dark:bg-java-red-dark mb-4 sm:mb-8 lg:mb-10 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="mb-6 text-5xl md:text-6xl text-center tracking-light leading-10 font-black text-white sm:leading-none">
                        {javaInfo.name}
                    </h1>
                    <p className="text-white text-center mb-8 sm:mb-12 px-4">
                        {javaInfo.description}
                    </p>
                </div>
            </section>
            <section className="flex flex-col gap-4">
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
            </section>
        </main>
    );
}
