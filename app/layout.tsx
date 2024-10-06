import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import "./globals.css";
import { Providers } from "@/components/providers";
import Head from "next/head";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-pt-[3.5rem]">
            <Head>
                <link
                    rel="icon"
                    href="https://raw.githubusercontent.com/venkatk-git/classnotes/refs/heads/main/app/favicon.ico"
                    sizes="48x48"
                />
            </Head>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    inter.variable
                )}
            >
                <Providers>
                    <div className="min-h-dvh flex flex-col bg-background">
                        <main>{children}</main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
