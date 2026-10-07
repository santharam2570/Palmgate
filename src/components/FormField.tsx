import type { ReactNode } from "react";

export const inputClass =
  "w-full rounded-xl border border-ink-100 bg-ink-50/60 px-4 py-3 text-sm text-ink-950 placeholder:text-ink-400 outline-none transition focus:border-palm-500 focus:bg-white focus:ring-4 focus:ring-palm-400/15";

export function Field({
  label,
  htmlFor,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink-800">
        {label}
      </label>
      {children}
    </div>
  );
}
