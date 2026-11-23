export default function Avatar({ src, name, size = 'md', online = false, className = '' }) {
  const sizes = { xs: 'h-8 w-8', sm: 'h-10 w-10', md: 'h-12 w-12', lg: 'h-16 w-16', xl: 'h-24 w-24' };
  return (
    <span className={`relative inline-flex shrink-0 ${sizes[size]} ${className}`}>
      <img src={src} alt={`${name || 'Profile'} avatar`} className="h-full w-full rounded-full object-cover" loading="lazy" />
      {online && <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />}
    </span>
  );
}
