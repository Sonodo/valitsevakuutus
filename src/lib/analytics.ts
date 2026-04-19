// ============================================================
// Valitse Vakuutus — Analytics Helpers
// ============================================================
// Thin wrappers over GA4 (gtag) + Microsoft Clarity. Every helper
// is a no-op on the server or when the underlying globals are
// missing, so components can call them unconditionally.
// ============================================================

type GtagFn = (...args: unknown[]) => void;
type ClarityFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === 'undefined') return null;
  const fn = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof fn === 'function' ? fn : null;
}

function getClarity(): ClarityFn | null {
  if (typeof window === 'undefined') return null;
  const fn = (window as unknown as { clarity?: ClarityFn }).clarity;
  return typeof fn === 'function' ? fn : null;
}

/**
 * Fire a GA4 custom event. Silently no-ops if gtag is not available
 * (SSR, ad-blocker, consent denied, etc.).
 */
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  const gtag = getGtag();
  if (!gtag) return;
  try {
    gtag('event', name, params);
  } catch {
    // Swallow analytics errors — never break the UI for telemetry.
  }
}

/**
 * Track an affiliate (commissionable) click. Sent to both GA4
 * (as `affiliate_click`) and Clarity (as a custom event + tag)
 * so we can segment recordings by affiliate intent.
 */
export function trackAffiliateClick(
  provider: string,
  productType: string,
  extras?: Record<string, unknown>,
): void {
  const params: Record<string, unknown> = {
    provider,
    product_type: productType,
    ...extras,
  };

  trackEvent('affiliate_click', params);

  const clarity = getClarity();
  if (clarity) {
    try {
      clarity('event', 'affiliate_click');
      clarity('set', 'affiliate_provider', provider);
    } catch {
      // ignore
    }
  }
}

/**
 * Track a lead event (form submission, calculator completion,
 * newsletter signup). Source identifies the surface.
 */
export function trackLead(source: string, params?: Record<string, unknown>): void {
  trackEvent('lead', { source, ...params });
}

/**
 * Track when a user starts a comparison (picks an insurance type
 * in the calculator). Useful as a funnel anchor.
 */
export function trackBeginCompare(insuranceType?: string): void {
  trackEvent('begin_compare', insuranceType ? { insurance_type: insuranceType } : undefined);
}
