"use client"
import { usePathname } from 'next/navigation'
import CustomLink from '@/app/components/ui/links'

const navItems = {
    '/posts': {
        name: 'posts',
    },
    '/logs': {
        name: 'logs',
    },
    '/projects': {
        name: 'projects',
    },
    '/shots': {
        name: 'shots',
    },
    '/links': {
        name: 'links',
    },
    '/about': {
        name: 'about'
    }

}

export function Navbar() {
    const pathname = usePathname()
    return (
        <aside className="mt-16 mb-8 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="relative md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <CustomLink href="/" className="text-4xl font-semibold">A S H</CustomLink>
                    <div className="flex flex-row gap-4 mt-2">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            const isActive = pathname.startsWith(path)

                            return (
                                <CustomLink
                                    key={path}
                                    href={path}
                                    className={`py-1 transition-all ${isActive
                                        ? "underline decoration-2 underline-offset-4 font-medium"
                                        : "opacity-60 hover:opacity-100"
                                        }`}
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
