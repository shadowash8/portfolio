import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Navbar } from './components/nav'
import "./globals.css";

const font = Lora({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "A S H",
    description: "my website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
        >
            <body className={`${font.className} antialiased max-w-xl mx-4 md:mx-auto my-8`}>
                <main className="flex-auto min-w-0 my-6 flex flex-col px-2 md:px-0">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
