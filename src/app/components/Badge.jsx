export function VerifiedBadge({ className = '' }) {
  return <span className={`verified-badge ${className}`} title="Demo verified profile"><span>✓</span></span>;
}

export function Tag({ children, active = false }) {
  return <span className={`tag ${active ? 'tag-active' : ''}`}>{children}</span>;
}
