import { BlogPost } from "@/lib/blog-post";

const dummyPosts: BlogPost[] = []
dummyPosts.push({title: "Blog Post one", id: 1, author: "big dummy", date: new Date(), content: "hello blog posts nice to see you", slug: "post-one"})
dummyPosts.push({title: "blog post two", id: 2, author: "big smarty", date: new Date(), content: "hello blog post two", slug: "post-two"})
dummyPosts.push({title: "blog post 3", id: 3, author: "big mediocre", date: new Date(), content: "hello blog post three", slug: "post-three"})

export default function getPosts() {
    return dummyPosts
}

export function getPost(slug: string) {
    return dummyPosts.find(post => post.slug === slug)
}