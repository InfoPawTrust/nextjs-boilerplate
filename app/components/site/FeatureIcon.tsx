/** PawTrust editorial icons: gently asymmetric contours, one warm accent per motif. */
export function FeatureIcon({index}:{index:number}) {
  return <svg viewBox="0 0 64 64" aria-hidden="true" className="pt-feature-icon" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
    {index===0 ? <>
      <path d="M15 9c-2 6-3 13-1 19 2 5 6 8 11 8s10-4 11-9c1-6 0-12-1-17"/>
      <path d="m13 9 5-1m14 1 5 1M25 36c-1 11 3 19 12 19 9 0 15-7 14-17"/>
      <path d="M45 26c-5-5-12 3 5 13 16-12 8-19 3-13l-3 3Z" fill="var(--pt-apricot)"/>
      <path d="M18 28c2 3 5 4 8 3" strokeWidth="1.5"/>
    </> : index===1 ? <>
      <path d="M13 10c8-1 17-1 25 0l10 11c1 8 1 19 0 30l-6-3-6 4-6-3-6 4-6-3-5 3c-1-15-1-28 0-43Z"/>
      <path d="M38 10c-1 4-1 8 0 11l10 0M20 21l9-1M20 29l17-1M20 37h8"/>
      <path d="M43 34c7-2 14 3 14 10s-5 13-12 12c-7 0-12-5-11-12 0-5 4-9 9-10Z" fill="var(--pt-apricot)"/>
      <path d="m40 44 4 4 7-8"/>
    </> : index===2 ? <>
      <path d="M11 17c7-2 16-2 24-1l1 26c-8 2-16 2-24 1-2-8-2-17-1-26Z"/>
      <path d="M28 23c8-2 17-1 24 0 1 9 1 18-1 26-8 1-16 1-24-1-1-8-1-17 1-25Z" fill="var(--pt-apricot)"/>
      <path d="M44 30c-7-3-12 1-12 7 0 6 5 9 11 6M29 35h12m-12 4h10M16 23h5m-5 5h4"/>
      <path d="M35 10c8-3 15 0 19 6m-1-5 1 5-5 1"/>
    </> : <>
      <path d="M32 7c7 4 14 6 22 7 1 20-6 34-22 43C16 49 9 34 11 15c8-1 15-4 21-8Z"/>
      <path d="M32 27c-6-10-19-5-13 5 3 5 8 9 13 12 6-4 12-9 14-14 3-9-9-12-14-3Z" fill="var(--pt-apricot)"/>
      <path d="M16 19c0 7 1 11 3 15" strokeWidth="1.5"/>
    </>}
  </svg>;
}
