import { ImageResponse } from 'next/og';
import { INSURANCE_TYPES } from '@/lib/constants';

export const alt = 'Vakuutusvertailu — Vakuutusvertailu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return INSURANCE_TYPES.map((t) => ({ insuranceType: t.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ insuranceType: string }>;
}) {
  const { insuranceType } = await params;
  const typeInfo = INSURANCE_TYPES.find((t) => t.slug === insuranceType);

  const title = typeInfo
    ? `${typeInfo.name} vertailu 2026`
    : 'Vakuutusvertailu';
  const subtitle = typeInfo?.description ?? 'Vertaa vakuutuksia ja säästä';
  const keyFact = typeInfo?.keyFact ?? '';
  const avgPrice = typeInfo?.averagePrice ?? '';
  const accentColor = typeInfo?.color ?? '#0891b2';

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
        {/* Background accent circle */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: accentColor,
            opacity: 0.12,
            display: 'flex',
          }}
        />

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
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <h1
            style={{
              color: 'white',
              fontSize: '56px',
              fontWeight: 800,
              lineHeight: 1.15,
              margin: '0 0 20px 0',
              maxWidth: '900px',
            }}
          >
            {title}
          </h1>

          {/* Teal accent line */}
          <div
            style={{
              width: '80px',
              height: '5px',
              backgroundColor: accentColor,
              borderRadius: '3px',
              marginBottom: '24px',
              display: 'flex',
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '26px',
              lineHeight: 1.4,
              margin: '0 0 24px 0',
              maxWidth: '800px',
            }}
          >
            {subtitle}
          </p>

          {/* Stats row */}
          {(avgPrice || keyFact) && (
            <div
              style={{
                display: 'flex',
                gap: '30px',
                marginTop: '8px',
              }}
            >
              {avgPrice && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '14px 22px',
                  }}
                >
                  <span
                    style={{
                      color: '#f59e0b',
                      fontSize: '15px',
                      fontWeight: 600,
                      marginBottom: '4px',
                    }}
                  >
                    Keskihinta
                  </span>
                  <span
                    style={{
                      color: 'white',
                      fontSize: '20px',
                      fontWeight: 700,
                    }}
                  >
                    {avgPrice}
                  </span>
                </div>
              )}
              {keyFact && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '14px 22px',
                    maxWidth: '440px',
                  }}
                >
                  <span
                    style={{
                      color: '#f59e0b',
                      fontSize: '15px',
                      fontWeight: 600,
                      marginBottom: '4px',
                    }}
                  >
                    Tärkeä tieto
                  </span>
                  <span
                    style={{
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: 600,
                    }}
                  >
                    {keyFact}
                  </span>
                </div>
              )}
            </div>
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
            vakuutusvertailu.fi
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
