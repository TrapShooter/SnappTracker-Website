interface IconProps {
  name: string;
  fill?: boolean;
  size?: number;
  className?: string;
  weight?: number;
  grade?: number;
  opticalSize?: number;
}

export default function Icon({
  name,
  fill = true,
  size = 24,
  className = "",
  weight = 400,
  grade = 0,
  opticalSize = 24,
}: IconProps) {
  return (
    <span
      className={`material-symbols-rounded ${className}`}
      style={{
        fontSize: `${size}px`,
        width: `${size}px`,
        height: `${size}px`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "middle",
        flexShrink: 0,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
