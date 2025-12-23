import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { ButtonVariant } from "../content/types";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-moss text-sand shadow-soft hover:bg-moss/90 motion-safe:transition-colors",
  secondary:
    "bg-ink text-sand hover:bg-ink/90 motion-safe:transition-colors",
  ghost:
    "border border-ink/15 text-ink hover:border-ink/40 hover:text-ink motion-safe:transition-colors"
};

type ButtonBaseProps = {
  children: string;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonLinkProps = ButtonBaseProps & {
  to: string;
  href?: never;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href">;

type ButtonAnchorProps = ButtonBaseProps & {
  href: string;
  to?: never;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href">;

type ButtonButtonProps = ButtonBaseProps & {
  to?: never;
  href?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

type ButtonProps = ButtonLinkProps | ButtonAnchorProps | ButtonButtonProps;

export default function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className ?? ""}`.trim();

  if ("to" in rest && rest.to) {
    return (
      <Link className={styles} to={rest.to}>
        {children}
      </Link>
    );
  }

  if ("href" in rest && rest.href) {
    const isExternal = rest.href.startsWith("http");
    return (
      <a
        className={styles}
        href={rest.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}
