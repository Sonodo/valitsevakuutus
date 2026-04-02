import { ImageResponse } from 'next/og';
import { blogPosts } from '@/data/blog-posts';

export const alt = 'Blogi — Vakuutusvertailu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const categoryLabels: Record<string, string> = {
  vertailu: 'Vertailu',
  opas: 'Opas',
  uutiset: 'Uutiset',
  vinkit: 'Vinkit',
  lakiasiat: 'Lakiasiat',
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  const title = post?.title ?? 'Blogi';
  const category = post ? (categoryLabels[post.category] ?? post.category) : '';
  const readTime = post ? `${post.readTime} min lukuaika` : '';
  const date = post
    ? new Date(post.publishedAt).toLocaleDateString('fi-FI', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#1a365d',
          padding: '60px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative element */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '60px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '3px solid rgba(8,145,178,0.2)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '100px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '3px solid rgba(8,145,178,0.15)',
            display: 'flex',
          }}
        />

        {/* Site name + section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#0891b2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            V
          </div>
          <span
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '22px',
              fontWeight: 500,
            }}
          >
            Vakuutusvertailu
          </span>
          <span
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '22px',
              fontWeight: 400,
              marginLeft: '4px',
            }}
          >
            / Blogi
          </span>
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          {/* Category + read time badges */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            {category && (
              <span
                style={{
                  backgroundColor: '#0891b2',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 600,
                  padding: '6px 16px',
                  borderRadius: '20px',
                }}
              >
                {category}
              </span>
            )}
            {readTime && (
              <span
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '16px',
                  fontWeight: 500,
                  padding: '6px 16px',
                  borderRadius: '20px',
                }}
              >
                {readTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            style={{
              color: 'white',
              fontSize: '50px',
              fontWeight: 800,
              lineHeight: 1.15,
              margin: '0 0 20px 0',
              maxWidth: '950px',
            }}
          >
            {title}
          </h1>

          {/* Teal accent line */}
          <div
            style={{
              width: '80px',
              height: '5px',
              backgroundColor: '#0891b2',
              borderRadius: '3px',
              marginBottom: '20px',
              display: 'flex',
            }}
          />

          {/* Date */}
          {date && (
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '20px',
                margin: 0,
              }}
            >
              {date}
            </p>
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '20px',
            marginTop: '16px',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '18px',
            }}
          >
            vakuutusvertailu.fi/blogi
          </span>
          <span
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '18px',
            }}
          >
            Vertaa. Säästä. Vakuuta.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
