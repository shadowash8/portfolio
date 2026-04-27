import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import parse from 'uniorg-parse';
import uniorg2rehype from 'uniorg-rehype';
import stringify from 'rehype-stringify';
import extractKeywords from 'uniorg-extract-keywords';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function getReadableDate(dateString: String) {
    let formattedDate = null;

    if (dateString) {
        // 1. Remove [ ] brackets
        // 2. Remove the day name (e.g., "Sat") because JS Date() hates it
        const cleaned = dateString
            .replace(/[\[\]]/g, '')           // Remove brackets
            .replace(/[A-Z][a-z]{2}\s/, '');  // Remove "Sat ", "Sun ", etc.

        const dateObj = new Date(cleaned);

        // Check if it's a valid date
        if (!isNaN(dateObj.getTime())) {
            formattedDate = new Intl.DateTimeFormat('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }).format(dateObj);
        } else {
            formattedDate = cleaned; // Fallback to cleaned string if parsing fails
        }
    }

    return formattedDate?.toLowerCase();
}

export async function getPostBySlug(slug: string) {
    try {
        const realSlug = slug.replace(/\.org$/, '');
        const fullPath = path.join(postsDirectory, `${realSlug}.org`);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // The unified processor
        const processor = unified()
            .use(parse)
            .use(extractKeywords)
            .use(uniorg2rehype)
            .use(stringify);

        const result = await processor.process(fileContents);

        return {
            slug: realSlug,
            content: result.value.toString(),
            title: (result.data as any)?.title || realSlug,
            date: getReadableDate((result.data as any)?.date) || null,
        };
    } catch (e) {
        console.error("Error parsing org file:", e);
        return null;
    }
}

export async function getAllPosts() {
    const filenames = fs.readdirSync(postsDirectory);

    const posts = await Promise.all(
        filenames
            .filter((file) => /\.org$/.test(file))
            .map(async (file) => {
                const slug = file.replace(/\.org$/, '');
                return await getPostBySlug(slug);
            })
    );

    return posts
        .filter((post) => post !== null)
        .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
}
