import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

const POSTS_PATH: string = path.join(process.cwd(), 'src/content/blog')

export function getPostsMeta() {
    return getMDXData(POSTS_PATH)
}

export async function getPost(slug: string) {
    const filePath: string = path.join(POSTS_PATH, `${slug}.mdx`)
    const rawContent: string = readMDXFile(filePath)
    const { content } = parseContent(rawContent)

    const { default: Post } = await evaluate(content, {
        ...runtime // Provides JSX transformation for MDX
    })

    return { Post }
}

function getMDXData(dir: string) {
    const mdxFiles: string[] = getMDXFiles(dir)

    return mdxFiles.map((filepath: string) => {
        const rawContent: string = readMDXFile(path.join(dir, filepath))
        const { meta } = parseMetaData(rawContent)

        return { meta }
    })
}

function getMDXFiles(dir: string): string[] {
    return fs.readdirSync(dir).filter((filepath: string): boolean => path.extname(filepath) === '.mdx')
}



function readMDXFile(path: string): string {
    return fs.readFileSync(path, 'utf8')
}

/**
 * Uses gray-matter plugin to read a raw string from an MDX file and parse the frontmatter (aka metadata)
 * as well as the markdown content in the file..
 *
 * @param rawContent - mdx frontmatter and content
 * @return meta - the meta data from the mdx file (e.g. yaml section)
 * @return content - the markdown content of the mdx file
 */
function parseMetaData(rawContent: string) {
    const { data } =  matter(rawContent)

    return { meta: data }
}

function parseContent(rawContent: string) {
    const { content } = matter(rawContent)

    return { content }
}

