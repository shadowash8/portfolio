import CustomLink from '@/app/components/ui/links'

export function Footer() {
    return (
        <footer className="mt-16">
            <div className="tracking-tight flex flex-col">
                built with love.
                <div className="flex flex-row text-neutral-400">
                    <CustomLink href="https://github.com/shadowash8/portfolio" className="pr-2 hover:underline opacity-60 hover:opacity-100">
                        source
                    </CustomLink>
                    <CustomLink href="/atom.xml" className="pr-2 hover:underline opacity-60 hover:opacity-100">
                        atom
                    </CustomLink>
                </div>
            </div>
        </footer>
    )
}
