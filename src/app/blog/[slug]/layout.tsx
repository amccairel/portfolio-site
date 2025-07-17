export default function BlogLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <article className="max-w-3xl mx-auto p-6 prose dark:prose-invert">
            {children}
        </article>
    )
}