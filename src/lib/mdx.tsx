import fs from 'fs'
import path from 'path'

const POSTS_PATH: string = path.join(process.cwd(), 'src/content/blog')

type Metadata = {
    title: string
    date: string
    summary: string
}

export function getBlogPosts() {
    return getMDXData(POSTS_PATH)
}

/*
export function formatDate(date: string): string {
    const currentDate = new Date()
}

 */

function getMDXData(dir: string) {
    const mdxFiles: string[] = getMDXFiles(dir)

    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file))
        const slug: string = path.basename(file, path.extname(file))

        return {
            metadata,
            slug,
            content,
        }
    })
}

function getMDXFiles(dir: string): string[] {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(path: string) {
    const rawContent = fs.readFileSync(path, 'utf8')
    return parseFrontmatter(rawContent)
}

function parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
    const match = frontmatterRegex.exec(fileContent)
    const frontMatterBlock = match![1]
    const content = fileContent.replace(frontmatterRegex, '').trim()
    const frontMatterLines = frontMatterBlock.trim().split('\n')
    const metadata: Partial<Metadata> = {}

    frontMatterLines.forEach((line) => {
        const [key, ...valueArr] = line.split(': ')
        let value = valueArr.join(': ').trim()
        value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
        metadata[key.trim() as keyof Metadata] = value
    })

    return { metadata: metadata as Metadata, content }
}

