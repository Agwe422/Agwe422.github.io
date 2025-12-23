import { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  className?: string;
};

export default function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-ink/10 bg-sand/80 px-3 py-1 text-xs font-medium text-ink/80 ${
        className ?? ""
      }`}
    >
      {children}
    </span>
  );
}