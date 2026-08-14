import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md";
  icon?: ReactNode;
}

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  primary: "bg-[var(--primary)] text-[var(--background)]",
  outline:
    "border border-[var(--border)] bg-transparent text-[var(--foreground)]",
  ghost: "bg-[var(--surface)] text-[var(--muted)]",
};

const sizes: Record<NonNullable<BadgeProps["size"]>, string> = {
  sm: "gap-1.5 px-2.5 py-1 text-[9px]",
  md: "gap-2 px-3.5 py-1.5 text-[11px]",
};

export function Badge({
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex w-fit items-center rounded-full font-medium uppercase tracking-wider",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon ? (
        <span aria-hidden="true" className="shrink-0">
          {icon}
        </span>
      ) : null}
      {children}
    </span>
  );
}
