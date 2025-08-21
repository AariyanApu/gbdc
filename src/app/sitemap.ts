import { MetadataRoute } from 'next'
import { getData } from '@/hooks/fetchData'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.gbdcbd.org'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/donate`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/donors`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/activities`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/achievements`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/notice`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/upevents`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  try {
    // Dynamic pages - Blog posts
    const posts = await getData('posts') || []
    const postPages = Array.isArray(posts) ? posts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.createdAt ? new Date(post.createdAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })) : []

    // Dynamic pages - Events
    const events = await getData('events') || []
    const eventPages = Array.isArray(events) ? events.map((event: any) => ({
      url: `${baseUrl}/events/${event.slug}`,
      lastModified: event.createdAt ? new Date(event.createdAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })) : []

    // Dynamic pages - Notices
    const notices = await getData('notice') || []
    const noticePages = Array.isArray(notices) ? notices.map((notice: any) => ({
      url: `${baseUrl}/notice/${notice.slug}`,
      lastModified: notice.createdAt ? new Date(notice.createdAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })) : []

    return [...staticPages, ...postPages, ...eventPages, ...noticePages]
  } catch (error) {
    console.warn('Error generating dynamic sitemap entries:', error)
    return staticPages
  }
}