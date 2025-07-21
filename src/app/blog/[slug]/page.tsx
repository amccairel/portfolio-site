import MdxLayout from "@/app/blog/[slug]/layout";
import { getPost } from "@/lib/mdx";

export default async function Page({ params } : { params: Promise<{ slug: string}> }) {
    const { slug } = await params
    const { Post } = await getPost(slug)

    return (
        <MdxLayout>
            <Post />
        </MdxLayout>
    )
}

export function generateStaticParams() {
    return [{ slug: 'why-create-this'},{ slug: 'moving-averages'}]
}

export const dynamicParams = false