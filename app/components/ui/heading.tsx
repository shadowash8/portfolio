type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
    level?: HeadingLevel;
    children: React.ReactNode;
}

export default function Heading({ level = 1, children }: HeadingProps) {
    const Tag = `h${level}` as `h${HeadingLevel}`;

    const sizes: Record<HeadingLevel, string> = {
        1: 'text-2xl',
        2: 'text-xl',
        3: 'text-lg',
        4: 'text-base',
        5: 'text-sm',
        6: 'text-sm',
    };

    return (
        <Tag className={`${sizes[level]} font-semibold mb-8 tracking-tighter`}>
            {children}
        </Tag>
    );
}
