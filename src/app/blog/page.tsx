import { getBlogPosts } from "@/lib/mdx";
import Link from "next/link";

export default async function BlogPostsPage() {
    const posts = getBlogPosts()

    return (
        <div className="max-w-3xl mx-auto p-6">
            <ul className={""}>
                {posts.map(post => (
                    <li key={post.metadata.date} className={"m-4 hover:underline"}>
                        <Link href={`/blog/${post.slug}`} className={'m-4 p-6'}>{post.metadata.date} - {post.metadata.title}</Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}