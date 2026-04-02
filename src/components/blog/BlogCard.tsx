import Link from 'next/link';
import type { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface BlogCardProps {
  post: BlogPost;
}

const categoryLabels: Record<string, string> = {
  vertailu: 'Vertailu',
  opas: 'Opas',
  uutiset: 'Uutiset',
  vinkit: 'Vinkit',
  lakiasiat: 'Lakiasiat',
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blogi/${post.slug}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-teal/30 hover:shadow-md"
    >
      {/* Category + read time */}
      <div className="flex items-center gap-3">
        <Badge variant="info">
          {categoryLabels[post.category] || post.category}
        </Badge>
        <span className="text-xs text-gray-400">{post.readTime} min lukuaika</span>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-base font-semibold text-navy group-hover:text-teal sm:text-lg">
        {post.title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm text-gray-600 leading-relaxed">
        {post.description}
      </p>

      {/* Meta */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="text-xs text-gray-400">
          {formatDate(post.publishedAt)}
        </span>
        {post.tags.length > 0 && (
          <div className="flex gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
