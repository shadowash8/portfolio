import CustomLink from '@/app/components/ui/links'

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
        description: "the god himself"
    },
    "https://jkwon.co/": {
        name: "jkwon",
        description: "mini james"
    },
    "https://www.youtube.com/@i_kkoh/": {
        name: "ipl",
        description: "he who too cool for a website",
    },
    "https://tokisuno.rocks/": {
        name: "tokisuno",
        description: "playes too much cs2"
    },
    "https://nibirsan.org/": {
        name: "nibirsan",
        description: "he who does everything"
    },
    "https://venusiam.vercel.app/": {
        name: "afra",
        description: "very hardworking"
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
                            <CustomLink
                                href={href}
                            >
                                {name}
                            </CustomLink>
                            <p className="dark:text-neutral-400 text-sm">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


            <div>
                <h2 className="text-xl mb-4 tracking-tighter">cool people</h2>
                <div className="flex flex-col flex-wrap gap-2">
                    {Object.entries(peopleLinks).map(([href, { name, description }]) => (
                        <div key={href} className="flex flex-col">
                            <CustomLink
                                href={href}
                            >
                                {name}
                            </CustomLink>
                            <p className="dark:text-neutral-400 text-sm">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
