import { ImageResponse } from 'next/og';
import { guides } from '@/data/guides';

export const alt = 'Opas — Vakuutusvertailu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

const categoryLabels: Record<string, string> = {
  auto: 'Autovakuutus',
  home: 'Kotivakuutus',
  travel: 'Matkavakuutus',
  pet: 'Lemmikkivakuutus',
  life: 'Henkivakuutus',
  accident: 'Tapaturmavakuutus',
  child: 'Lapsivakuutus',
  general: 'Yleisopas',
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  const title = guide?.title ?? 'Vakuutusopas';
  const category = guide
    ? (categoryLabels[guide.category] ?? guide.category)
    : '';
  const readTime = guide ? `${guide.readTime} min lukuaika` : '';

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
        {/* Decorative book shape */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            right: '70px',
            width: '160px',
            height: '200px',
            borderRadius: '8px',
            border: '3px solid rgba(245,158,11,0.2)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '56px',
            right: '80px',
            width: '160px',
            height: '200px',
            borderRadius: '8px',
            border: '3px solid rgba(245,158,11,0.12)',
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
            / Oppaat
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
                  backgroundColor: '#f59e0b',
                  color: '#1a365d',
                  fontSize: '16px',
                  fontWeight: 700,
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
              fontSize: '48px',
              fontWeight: 800,
              lineHeight: 1.15,
              margin: '0 0 20px 0',
              maxWidth: '900px',
            }}
          >
            {title}
          </h1>

          {/* Accent line */}
          <div
            style={{
              width: '80px',
              height: '5px',
              backgroundColor: '#f59e0b',
              borderRadius: '3px',
              marginBottom: '20px',
              display: 'flex',
            }}
          />

          {/* Subtitle description */}
          {guide?.description && (
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '22px',
                lineHeight: 1.4,
                margin: 0,
                maxWidth: '800px',
              }}
            >
              {guide.description.length > 140
                ? guide.description.slice(0, 140) + '...'
                : guide.description}
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
            vakuutusvertailu.fi/oppaat
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
