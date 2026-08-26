export function BuildingIcon({ className = 'size-4.5', strokeWidth = 1.7 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M5.25 21V8.25L12 3.75l6.75 4.5V21M9 21v-6h6v6M9.75 10.5h.008v.008H9.75V10.5Zm4.5 0h.008v.008h-.008V10.5Z"
      />
    </svg>
  )
}

const toneStyles = {
  brand: {
    wrap: 'border-secondary bg-white/70 text-primary shadow-[0_4px_20px_rgba(13,27,61,0.06)] backdrop-blur-sm',
    iconWrap: 'bg-secondary text-primary',
    icon: 'text-primary',
  },
  light: {
    wrap: 'border-white/55 bg-white/10 text-white backdrop-blur-sm',
    iconWrap: 'bg-white/15 text-white',
    icon: 'text-white',
  },
  soft: {
    wrap: 'border-primary/10 bg-white text-primary shadow-[0_8px_30px_rgba(13,27,61,0.08)]',
    iconWrap: 'bg-secondary text-primary',
    icon: 'text-primary',
  },
}

export default function SectionBadge({
  children,
  icon: Icon = BuildingIcon,
  iconSrc,
  tone = 'brand',
}) {
  const styles = toneStyles[tone] ?? toneStyles.brand

  return (
    <div
      className={[
        'inline-flex items-center gap-3 rounded-full border px-3 py-1.5 sm:px-4 sm:py-2',
        styles.wrap,
      ].join(' ')}
    >
      <span
        className={[
          'flex size-8 shrink-0 items-center justify-center rounded-full sm:size-9',
          iconSrc ? 'bg-secondary text-primary' : styles.iconWrap,
        ].join(' ')}
      >
        {iconSrc ? (
          <img
            src={iconSrc}
            alt=""
            aria-hidden="true"
            className="size-4 object-contain brightness-0 sm:size-4.5"
            width={18}
            height={18}
          />
        ) : (
          <Icon className={['size-4 sm:size-4.5', styles.icon].join(' ')} />
        )}
      </span>
      <span className="font-display text-[15px] font-semibold leading-none tracking-[0.01em] sm:text-[17px]">
        {children}
      </span>
    </div>
  )
}
