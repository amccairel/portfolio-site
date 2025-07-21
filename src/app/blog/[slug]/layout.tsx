export default function MdxLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <article className="px-3 prose dark:prose-invert">
            {children}
        </article>
    )
}