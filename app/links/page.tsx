import Link from "next/link";

const socialLinks = {
    "https://github.com/shadowash8": {
        name: "github",
        description: "this is where i code",
    },
    "mailto:shadowash8@protonmail.com": {
        name: "email",
        description: "the direct line",
    },
};

const peopleLinks = {
    "https://jvscholz.com/": {
        name: "jvscholz",
    },
    "https://jkwon.co/": {
        name: "jkwon",
    },
    "https://tokisuno.rocks/": {
        name: "tokisuno",
    },
    "https://nibirsan.org/": {
        name: "nibirsan",
    },
}

export default function LinksPage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">links</h1>


            <div className="my-8">
                <h2 className="text-xl mb-4 tracking-tighter">socials</h2>
                <div className="flex flex-col gap-6">
                    {Object.entries(socialLinks).map(([href, { name, description }]) => (
                        <div key={href} className="flex flex-col">
                            <Link
                                href={href}
                                className="hover:underline decoration-neutral-400 underline-offset-4 w-fit"
                            >
                                {name}
                            </Link>
                            <p className="dark:text-neutral-400 text-sm">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


            <div>
                <h2 className="text-xl mb-4 tracking-tighter">cool people</h2>
                <div className="flex flex-row flex-wrap gap-2">
                    {Object.entries(peopleLinks).map(([href, { name }]) => (
                        <Link
                            href={href}
                            key={href}
                            className="hover:underline decoration-neutral-400 underline-offset-4 w-fit"
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
