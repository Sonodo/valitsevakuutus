import { ImageResponse } from 'next/og';
import { cities } from '@/data/regions';

export const alt = 'Vakuutukset — Vakuutusvertailu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = cities.find((c) => c.slug === city);

  const title = cityData
    ? `Vakuutukset ${cityData.nameInessive}`
    : 'Vakuutukset';
  const population = cityData
    ? `${(cityData.population / 1000).toFixed(0)} 000 asukasta`
    : '';
  const region = cityData?.region ?? '';
  const autoPrice = cityData?.averageAutoPrice ?? '';
  const homePrice = cityData?.averageHomePrice ?? '';

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
        {/* Map pin decorative element */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            right: '80px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#f59e0b',
            opacity: 0.2,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '120px',
            right: '100px',
            width: '20px',
            height: '30px',
            backgroundColor: '#f59e0b',
            opacity: 0.15,
            display: 'flex',
            clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
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
            / Alueelliset vakuutukset
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
          {/* Region badge */}
          {region && (
            <span
              style={{
                backgroundColor: 'rgba(245,158,11,0.2)',
                color: '#f59e0b',
                fontSize: '16px',
                fontWeight: 600,
                padding: '6px 16px',
                borderRadius: '20px',
                marginBottom: '16px',
                alignSelf: 'flex-start',
              }}
            >
              {region}
            </span>
          )}

          {/* Title */}
          <h1
            style={{
              color: 'white',
              fontSize: '54px',
              fontWeight: 800,
              lineHeight: 1.15,
              margin: '0 0 20px 0',
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
              marginBottom: '28px',
              display: 'flex',
            }}
          />

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {population && (
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
                    fontSize: '14px',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}
                >
                  Asukasluku
                </span>
                <span
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 700,
                  }}
                >
                  {population}
                </span>
              </div>
            )}
            {autoPrice && (
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
                    fontSize: '14px',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}
                >
                  Autovakuutus
                </span>
                <span
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 700,
                  }}
                >
                  {autoPrice}
                </span>
              </div>
            )}
            {homePrice && (
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
                    fontSize: '14px',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}
                >
                  Kotivakuutus
                </span>
                <span
                  style={{
                    color: 'white',
                    fontSize: '20px',
                    fontWeight: 700,
                  }}
                >
                  {homePrice}
                </span>
              </div>
            )}
          </div>
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
            vakuutusvertailu.fi/vakuutukset
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
