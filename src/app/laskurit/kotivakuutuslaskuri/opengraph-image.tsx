import { ImageResponse } from 'next/og';

export const alt = 'Kotivakuutuslaskuri — Vakuutusvertailu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
        {/* Decorative house shape */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '80px',
            width: '180px',
            height: '140px',
            backgroundColor: 'rgba(22,163,74,0.12)',
            borderRadius: '8px',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '30px',
            right: '80px',
            width: '0',
            height: '0',
            borderLeft: '90px solid transparent',
            borderRight: '90px solid transparent',
            borderBottom: '60px solid rgba(22,163,74,0.1)',
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
            / Laskurit
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
          <span
            style={{
              backgroundColor: '#16a34a',
              color: 'white',
              fontSize: '16px',
              fontWeight: 600,
              padding: '6px 16px',
              borderRadius: '20px',
              alignSelf: 'flex-start',
              marginBottom: '20px',
            }}
          >
            Ilmainen työkalu
          </span>

          <h1
            style={{
              color: 'white',
              fontSize: '54px',
              fontWeight: 800,
              lineHeight: 1.15,
              margin: '0 0 20px 0',
            }}
          >
            Kotivakuutuslaskuri
          </h1>

          <div
            style={{
              width: '80px',
              height: '5px',
              backgroundColor: '#16a34a',
              borderRadius: '3px',
              marginBottom: '24px',
              display: 'flex',
            }}
          />

          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '26px',
              lineHeight: 1.4,
              margin: 0,
              maxWidth: '750px',
            }}
          >
            Laske kotivakuutuksen hinta kerrostalolle, rivitalolle tai
            omakotitalolle kaikilta Suomen vakuutusyhtiöiltä
          </p>
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
            vakuutusvertailu.fi/laskurit
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
