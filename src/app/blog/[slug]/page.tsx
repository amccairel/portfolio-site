import BlogLayout from "@/app/blog/[slug]/layout";

export default async function Page({ params } : { params: Promise<{ slug: string}> }) {
    const { slug } = await params
    const { default : Post } = await import(`@/content/blog/${slug}.mdx`)

    return (
        <BlogLayout>
            <Post />
        </BlogLayout>
    )
}

export function generateStaticParams() {
    return [{ slug: 'why-create-this'},{ slug: 'moving-averages'}]
}

export const dynamicParams = false