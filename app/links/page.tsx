import CustomLink from '@/app/components/ui/links'
import Heading from '@/app/components/ui/heading';

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
            <Heading>links</Heading>


            <div className="my-8">
                <Heading level={2}>socials</Heading>
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

            <hr className="my-8 h-px border-0 bg-neutral-800" />

            <div>
                <Heading level={2}>cool people</Heading>
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
