import BlogPostCard from '@/components/BlogPostCard'

export default function Blog() {
  return (
    <div className="mx-auto my-6 flex max-w-5xl flex-col gap-y-8 sm:gap-y-4">
      {/* Blog Post Card */}
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
    </div>
  )
}
