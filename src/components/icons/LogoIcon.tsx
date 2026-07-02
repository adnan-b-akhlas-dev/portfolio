interface LogoIconProps {
  className?: string;
  size?: number;
}

export default function LogoIcon({ className, size = 24 }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={(size * 392) / 453}
      viewBox="0 0 453 392"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M403.783 391.718L226.16 84.0753L150.161 215.068H247.85L271.473 257.179H77.037L226.248 0L452.414 391.718H403.783Z"
        fill="currentColor"
      />
      <path
        d="M337.871 317.597H91.4249L48.6345 391.718H1.04486e-05L67.1161 275.473H314.255L337.871 317.597Z"
        fill="currentColor"
      />
    </svg>
  );
}
