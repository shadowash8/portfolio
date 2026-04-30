import Link from "next/link";

interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export default function CustomLink({ href, className, children }: LinkProps) {
    return (
        <Link
            href={href}
            className={`hover:underline decoration-neutral-400 underline-offset-4 w-fit ${className}`}
        >
            {children}
        </Link>
    );
}
