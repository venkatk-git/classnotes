import { Search } from "@/components/search-docs";
import { SiteHeader } from "@/components/site-header";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col min-h-dvh">
            <SiteHeader />
            <main className="flex-1 flex flex-col">
                <div className="px-4 md:px-6 lg:px-8 bg-gray-100 dark:bg-black relative flex-1 flex flex-col justify-center items-center">
                    <div className="flex-1 mb-8 md:mb-16" />
                    <h1 className="font-black tracking-tight md:text-center text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl mb-6 sm:mb-8">
                        CLASSNOTES
                    </h1>
                    <p className="flex flex-col items-center sm:block sm:text-center text-lg xs:text-xl sm:text-2xl 2xl:text-3xl font-medium leading-snug md:!leading-normal text-gray-800 dark:text-gray-300 mb-8 sm:mb-12">
                        A free collection of curated,{" "}
                        <br className="sm:hidden" />
                        <span className="font-medium bg-gradient-to-r dark:bg-gradient-to-r decoration-clone from-sky-600 to-purple-700 dark:from-sky-400 dark:to-purple-400 text-transparent bg-clip-text">
                            high-quality Java notes
                        </span>{" "}
                        <br className="hidden md:block" />
                        designed to guide for starters.
                    </p>
                    <div className="xs:hidden mb-8">
                        <Search />
                    </div>
                    <Link href={"/java"} className="relative mb-16 sm:mb-28">
                        <div className="absolute -inset-1 dark:-inset-1.5 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg blur opacity-30 dark:opacity-50 -z-1 transition duration-1000 group-hover:opacity-50 dark:group-hover:opacity-75 " />
                        <span className="text-xl bg-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium text-gray-900 relative inline-block">
                            Get Started
                        </span>
                    </Link>

                    <div className="flex-1" />

                    <div className="md:text-xl font-medium text-gray-600 dark:text-gray-400 mb-4 md:mb-8">
                        Created by a{" "}
                        <Link href={"https://venkat-dev.vercel.app"}>
                            student
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
