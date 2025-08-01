import { getPostsMeta } from "@/lib/mdx";
import Link from "next/link";

export default async function BlogPostsPage() {
    const postsMeta = getPostsMeta().sort(
        (a,b) =>
        new Date(b.meta.date as string).getTime() - new Date(a.meta.date as string).getTime()
    )

    const published =  postsMeta.filter(
        post => post.meta.published === true
    )

    return (
        <div>
            <ul>
                {published.map(post  => (
                    <li key={post.meta.title} className={"m-4"}>
                        <Link href={`/blog/${post.meta.slug}`} className={'text-xl font-semibold hover:underline'}>{post.meta.title}</Link>
                        <p className={'text-sm text-gray-600 dark:text-gray-400'}>{ new Date(post.meta.date).toLocaleDateString() }</p>
                        <p className={'text-sm text-gray-600 dark:text-gray-400'}>{ post.meta.summary }</p>
                    </li>
                ))}
            </ul>
        </div>

    )
}