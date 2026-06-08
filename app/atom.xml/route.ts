import { getAllPosts } from "@/app/lib/org";
import { Feed } from 'feed'

export async function GET() {
  const posts = await getAllPosts()

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

  for (const post of posts) {
    feed.addItem({
      title: post.title,
      id: `https://shadowash8.netlify.app/posts/${post.slug}`,
      link: `https://shadowash8.netlify.app/posts/${post.slug}`,
      description: post.description || '',
      date: new Date(post.date),
    })
  }

  return new Response(feed.atom1(), {
    headers: { 'Content-Type': 'application/atom+xml' },
  })
}
