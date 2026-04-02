'use client';

import { useState, useEffect } from 'react';
import type { TOCItem } from '@/types';

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first visible heading
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className="sticky top-24" aria-label="Sisällysluettelo">
      <h4 className="mb-3 text-sm font-semibold text-navy">Sisällysluettelo</h4>
      <ul className="space-y-1 border-l-2 border-gray-200">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleClick(item.id)}
              className={`block w-full py-1 text-left text-sm transition-colors ${
                item.level === 3 ? 'pl-6' : 'pl-3'
              } ${
                activeId === item.id
                  ? 'border-l-2 -ml-[2px] border-teal font-medium text-teal'
                  : 'text-gray-500 hover:text-navy'
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
