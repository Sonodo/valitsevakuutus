'use client';

import { trackAffiliateClick } from '@/lib/analytics';

interface AffiliateCTAProps {
  href: string;
  provider: string;
  productType: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Client wrapper for affiliate (commissionable) outbound links.
 * Fires `affiliate_click` to GA4 + Clarity on click, then lets
 * the browser follow the link normally. Used only when
 * `provider.isAffiliate === true`.
 */
export default function AffiliateCTA({
  href,
  provider,
  productType,
  className,
  children,
}: AffiliateCTAProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      onClick={() => trackAffiliateClick(provider, productType)}
      className={className}
    >
      {children}
    </a>
  );
}
