import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import type { Guide } from '@/types';

interface GuideCardProps {
  guide: Guide;
}

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <Link
      href={`/oppaat/${guide.slug}`}
      className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-teal/30 hover:shadow-md"
    >
      {/* Icon + category */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5">
          <BookOpen className="h-5 w-5 text-navy" />
        </div>
        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
          Opas
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-base font-semibold text-navy group-hover:text-teal sm:text-lg">
        {guide.title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm text-gray-600 leading-relaxed">
        {guide.description}
      </p>

      {/* Read time */}
      <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-3">
        <span className="text-xs text-gray-400">
          {guide.readTime} min lukuaika
        </span>
      </div>
    </Link>
  );
}
