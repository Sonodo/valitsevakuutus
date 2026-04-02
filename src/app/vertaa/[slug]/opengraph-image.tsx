import { ImageResponse } from 'next/og';
import { comparisons } from '@/data/comparisons';
import { providers } from '@/data/providers';

export const alt = 'Vertailu — Vakuutusvertailu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);

  const provider1 = comparison
    ? providers.find((p) => p.id === comparison.provider1Id)
    : null;
  const provider2 = comparison
    ? providers.find((p) => p.id === comparison.provider2Id)
    : null;

  const name1 = provider1?.shortName ?? comparison?.provider1Id ?? '?';
  const name2 = provider2?.shortName ?? comparison?.provider2Id ?? '?';
  const color1 = provider1?.color ?? '#0891b2';
  const color2 = provider2?.color ?? '#f59e0b';

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
        {/* Site name */}
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
            / Vertaa
          </span>
        </div>

        {/* VS Battle layout */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
          }}
        >
          {/* Provider 1 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '24px',
                backgroundColor: color1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '52px',
                fontWeight: 800,
              }}
            >
              {name1.charAt(0)}
            </div>
            <span
              style={{
                color: 'white',
                fontSize: '30px',
                fontWeight: 700,
                textAlign: 'center',
                maxWidth: '280px',
              }}
            >
              {name1}
            </span>
            {provider1 && (
              <span
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '18px',
                }}
              >
                {provider1.marketShare}% markkinaosuus
              </span>
            )}
          </div>

          {/* VS badge */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1a365d',
                fontSize: '32px',
                fontWeight: 900,
              }}
            >
              VS
            </div>
          </div>

          {/* Provider 2 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '24px',
                backgroundColor: color2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '52px',
                fontWeight: 800,
              }}
            >
              {name2.charAt(0)}
            </div>
            <span
              style={{
                color: 'white',
                fontSize: '30px',
                fontWeight: 700,
                textAlign: 'center',
                maxWidth: '280px',
              }}
            >
              {name2}
            </span>
            {provider2 && (
              <span
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '18px',
                }}
              >
                {provider2.marketShare}% markkinaosuus
              </span>
            )}
          </div>
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '24px',
            textAlign: 'center',
            margin: '0 0 16px 0',
          }}
        >
          Kumpi on parempi vakuutusyhtiö?
        </p>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '20px',
          }}
        >
          <span
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '18px',
            }}
          >
            vakuutusvertailu.fi/vertaa
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
