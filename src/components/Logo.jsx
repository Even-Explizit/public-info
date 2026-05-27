import React, { useId } from "react";

/**
 * Vector logo — no image file. Uses currentColor for dark/light theme.
 */
export default function Logo({ className = "h-11 w-auto", showTagline = true }) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 240 90"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Explizit AS"
      color="currentColor"
    >
      <defs>
        <linearGradient id={`${uid}-taper-l`} x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${uid}-taper-r`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Arrow — left-pointing, aligned to wordmark width */}
      <g className="logo-arrow transition-transform duration-300 ease-out group-hover:-translate-x-0.5">
        {/* Head: sharp triangle, base flush with shaft */}
        <path
          fill="currentColor"
          stroke="none"
          d="M8 14 L28 7 L28 21 Z"
        />
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="miter"
        >
          {/* Shaft to tail junction */}
          <line x1="28" y1="14" x2="204" y2="14" />
          {/* Classic V fletching */}
          <line x1="204" y1="14" x2="222" y2="5.5" />
          <line x1="204" y1="14" x2="222" y2="22.5" />
          {/* Short nock past feathers */}
          <line x1="204" y1="14" x2="232" y2="14" />
        </g>
      </g>

      {/* Wordmark: E + custom X + PLIZIT */}
      <text
        x="44"
        y="58"
        fill="currentColor"
        fontFamily="Syne, system-ui, sans-serif"
        fontWeight="700"
        fontSize="26"
        letterSpacing="0.14em"
      >
        E
      </text>

      <g
        transform="translate(68, 34)"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      >
        <line x1="1" y1="1" x2="11" y2="21" />
        <line x1="17" y1="1" x2="7" y2="21" />
        <line x1="1" y1="21" x2="11" y2="1" />
        <line x1="17" y1="21" x2="7" y2="1" />
      </g>

      <text
        x="98"
        y="58"
        fill="currentColor"
        fontFamily="Syne, system-ui, sans-serif"
        fontWeight="700"
        fontSize="26"
        letterSpacing="0.14em"
      >
        PLIZIT
      </text>

      {showTagline && (
        <g opacity="0.72">
          <rect x="72" y="75" width="36" height="1.2" fill={`url(#${uid}-taper-l)`} />
          <rect x="132" y="75" width="36" height="1.2" fill={`url(#${uid}-taper-r)`} />
          <text
            x="120"
            y="80"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="Syne, system-ui, sans-serif"
            fontWeight="500"
            fontSize="11"
            letterSpacing="0.35em"
          >
            AS
          </text>
        </g>
      )}
    </svg>
  );
}
