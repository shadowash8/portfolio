import CustomLink from '@/app/components/ui/links'

const navItems = {
    '/': {
        name: 'home',
    },
    '/posts': {
        name: 'posts',
    },
    '/projects': {
        name: 'projects',
    },
    '/links': {
        name: 'links',
    },
}

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 pr-10">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <CustomLink
                                    key={path}
                                    href={path}
                                    className="py-1 px-2 m-1"
                                >
                                    {name}
                                </CustomLink>
                            )
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    )
}
