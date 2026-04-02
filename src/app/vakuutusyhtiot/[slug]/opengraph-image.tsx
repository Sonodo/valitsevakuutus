import { ImageResponse } from 'next/og';
import { providers } from '@/data/providers';

export const alt = 'Vakuutusyhtiö — Vakuutusvertailu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = providers.find((p) => p.slug === slug);

  const title = provider?.name ?? 'Vakuutusyhtiö';
  const marketShare = provider ? `${provider.marketShare} % markkinaosuus` : '';
  const satisfaction = provider
    ? `${provider.satisfaction}/10 asiakastyytyväisyys`
    : '';
  const description = provider?.description ?? '';
  const providerColor = provider?.color ?? '#0891b2';

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
        {/* Background accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            backgroundColor: providerColor,
            opacity: 0.1,
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
          <span
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '22px',
              fontWeight: 400,
              marginLeft: '4px',
            }}
          >
            / Vakuutusyhtiöt
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
          {/* Provider color badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                backgroundColor: providerColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '28px',
                fontWeight: 800,
              }}
            >
              {title.charAt(0)}
            </div>
            <h1
              style={{
                color: 'white',
                fontSize: '52px',
                fontWeight: 800,
                margin: 0,
              }}
            >
              {title}
            </h1>
          </div>

          {/* Teal accent line */}
          <div
            style={{
              width: '80px',
              height: '5px',
              backgroundColor: '#0891b2',
              borderRadius: '3px',
              marginBottom: '24px',
              display: 'flex',
            }}
          />

          {/* Description */}
          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '24px',
              lineHeight: 1.4,
              margin: '0 0 28px 0',
              maxWidth: '850px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
            }}
          >
            {marketShare && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    color: '#f59e0b',
                    fontSize: '28px',
                    fontWeight: 800,
                  }}
                >
                  {provider?.marketShare}%
                </span>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '18px',
                  }}
                >
                  markkinaosuus
                </span>
              </div>
            )}
            {satisfaction && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    color: '#f59e0b',
                    fontSize: '28px',
                    fontWeight: 800,
                  }}
                >
                  {provider?.satisfaction}/10
                </span>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '18px',
                  }}
                >
                  tyytyväisyys
                </span>
              </div>
            )}
            {provider && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    color: '#f59e0b',
                    fontSize: '28px',
                    fontWeight: 800,
                  }}
                >
                  {provider.insuranceTypes.length}
                </span>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '18px',
                  }}
                >
                  vakuutuslajia
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
