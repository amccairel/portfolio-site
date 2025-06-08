import Link from 'next/link';
import  { BlogPost } from "@/lib/blog-post";

export default async function BlogPosts({posts}: {posts: BlogPost[]}) {

    return (
        <ul>
            {posts.map(post => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}