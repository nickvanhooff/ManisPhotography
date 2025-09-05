import { readFile, readdir } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'

export default defineEventHandler(async (event) => {
  try {
    const contentDir = join(process.cwd(), 'content', 'portfolio')
    const files = await readdir(contentDir)
    
    const portfolioItems = await Promise.all(
      files
        .filter(file => file.endsWith('.md'))
        .map(async (file) => {
          const filePath = join(contentDir, file)
          const fileContent = await readFile(filePath, 'utf-8')
          const { data } = matter(fileContent)
          return {
            ...data,
            slug: file.replace('.md', '')
          }
        })
    )

    // Sort by order, then by title
    portfolioItems.sort((a, b) => {
      if (a.order !== b.order) {
        return (a.order || 0) - (b.order || 0)
      }
      return a.title.localeCompare(b.title)
    })

    return {
      data: portfolioItems
    }
  } catch (error) {
    console.error('Error reading portfolio content:', error)
    return {
      data: []
    }
  }
})
