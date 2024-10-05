import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

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
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    inter.variable
                )}
            >
                <div className="min-h-dvh flex flex-col bg-background">
                    <SiteHeader />
                    <main className="px-8">{children}</main>
                </div>
            </body>
        </html>
    );
}
