import MdxLayout from "@/app/blog/[slug]/layout";
import { getPost } from "@/lib/mdx";

export default async function Page({ params } : { params: { slug: string} }) {
    const { slug } = params
    const { Post } = await getPost(slug)

    return (
        <MdxLayout>
            <Post />
        </MdxLayout>
    )
}

export function generateStaticParams() {
    return [{ slug: 'building-a-portfolio-site'},{ slug: 'moving-averages'}]
}

export const dynamicParams = false