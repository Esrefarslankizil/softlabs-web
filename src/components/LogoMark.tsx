export default function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Desktop Screen / Monitor Frame */}
      <path
        d="M 218 56.5 V 36 C 218 22.7 207.3 12 194 12 H 36 C 22.7 12 12 22.7 12 36 V 153 C 12 166.3 22.7 177 36 177 H 99"
        stroke="currentColor"
        strokeWidth="24.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Keyboard / Desktop Stand Base Line */}
      <line
        x1="12.25"
        y1="242.5"
        x2="99"
        y2="242.5"
        stroke="currentColor"
        strokeWidth="24.5"
        strokeLinecap="round"
      />
      {/* Smartphone / Mobile Screen Outline */}
      <rect
        x="161.25"
        y="123"
        width="81.5"
        height="119"
        rx="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="24.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
