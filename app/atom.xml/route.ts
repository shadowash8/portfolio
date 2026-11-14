import { getAllEntries } from "@/app/lib/org";
import { Feed } from 'feed'

export async function GET() {
    const entries = await getAllEntries()

    const feed = new Feed({
        title: 'A S H',
        description: 'my website',
        id: 'https://shadowash8.netlify.app/',
        link: 'https://shadowash8.netlify.app/',
        feedLinks: {
            atom: 'https://shadowash8.netlify.app/atom.xml',
        },
        author: {
            name: 'shadowash8',
        },
    })

    for (const entry of entries) {
        const url = `https://shadowash8.netlify.app/${entry.section}/${entry.slug}`

        feed.addItem({
            title: entry.title,
            id: url,
            link: url,
            description: entry.description || '',
            date: new Date(entry.date ?? new Date()),
        })
    }

    return new Response(feed.atom1(), {
        headers: { 'Content-Type': 'application/atom+xml' },
    })
}
