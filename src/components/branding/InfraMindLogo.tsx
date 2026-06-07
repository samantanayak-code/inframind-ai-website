interface InfraMindLogoProps {
  variant?: "horizontal" | "stacked" | "icon";
  className?: string;
}

const BLUE = "#2A6094";
const LIGHT = "#D1D5DB";

function IconMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* I */}
      <rect x="6" y="6" width="4" height="28" rx="1" fill={BLUE} />
      {/* M left leg */}
      <rect x="14" y="6" width="4" height="28" rx="1" fill={BLUE} />
      {/* M diagonal left */}
      <path d="M14 6 L20 16 L18 16 L14 8" fill={BLUE} />
      {/* M diagonal right */}
      <path d="M26 6 L20 16 L22 16 L26 8" fill={BLUE} />
      {/* M right leg */}
      <rect x="26" y="6" width="4" height="28" rx="1" fill={BLUE} />
      {/* Bottom bar */}
      <rect x="6" y="32" width="24" height="3" rx="1" fill={BLUE} />
    </svg>
  );
}

export function InfraMindLogo({ variant = "horizontal", className = "" }: InfraMindLogoProps) {
  if (variant === "icon") {
    return (
      <span className={className}>
        <IconMark size={32} />
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center gap-1 ${className}`}>
        <IconMark size={48} />
        <span className="flex items-baseline gap-1">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ color: LIGHT }}
          >
            InfraMind
          </span>
          <span className="text-xl font-bold" style={{ color: BLUE }}>
            AI
          </span>
        </span>
      </span>
    );
  }

  // horizontal (default)
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <IconMark size={28} />
      <span className="flex items-baseline">
        <span
          className="text-lg font-bold tracking-tight"
          style={{ color: LIGHT }}
        >
          InfraMind
        </span>
        <span className="text-lg font-bold" style={{ color: BLUE }}>
          AI
        </span>
      </span>
    </span>
  );
}

export { IconMark };
