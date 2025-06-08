// Dummy imports
import getPosts from "@/api/blog-posts";
import BlogPosts from '@/ui/blog-posts'
import { BlogPost } from "@/lib/blog-post";

export default async function BlogPage() {
    const posts: BlogPost[] = getPosts()

    return (
        <BlogPosts posts={posts} />
    )
}