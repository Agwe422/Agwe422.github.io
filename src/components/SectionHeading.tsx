import { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  subtitle,
  align = "left"
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`space-y-2 ${alignClass}`}>
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <div className="text-base text-ink/80">{subtitle}</div>
      ) : null}
    </div>
  );
}
