import { useState, type ReactNode } from "react";

type Props = { label: string; children: ReactNode };

/**
 * Collapsed-by-default section for supporting material. Built on native
 * <details>/<summary>, so it works with keyboard and screen readers without
 * extra ARIA; the visible "Show"/"Hide" text makes the state obvious too.
 */
export default function Disclosure({ label, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <details className="disclosure" onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary>
        <span className="disclosure__label">{label}</span>
        <span className="disclosure__state" aria-hidden="true">
          {open ? "Hide" : "Show"}
        </span>
      </summary>
      <div className="disclosure__body">{children}</div>
    </details>
  );
}
