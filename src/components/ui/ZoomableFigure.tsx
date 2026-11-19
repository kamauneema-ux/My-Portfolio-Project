import { useRef } from "react";

type Props = {
  /** Image shown on the page (an SVG where available, for crisp text). */
  src: string;
  /** Larger image opened in the viewer. Defaults to `src`. */
  fullSrc?: string;
  alt: string;
  caption?: string;
  /** Small print under the caption, e.g. a source note. */
  note?: string;
  /** Load immediately instead of lazily, for images in the first screen. */
  eager?: boolean;
};

/**
 * A figure that opens full size when clicked or tapped, so dense diagrams stay
 * readable on a phone. Uses the native <dialog> element, which gives a focus
 * trap and Escape-to-close for free; focus returns to the image afterwards.
 */
export default function ZoomableFigure({ src, fullSrc, alt, caption, note, eager }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Older browsers and the test environment lack showModal(); fall back to the open attribute.
  function openViewer() {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closeViewer() {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    triggerRef.current?.focus();
  }

  return (
    <figure className="zoom-figure">
      <button
        ref={triggerRef}
        type="button"
        className="zoom-figure__trigger"
        onClick={openViewer}
        aria-haspopup="dialog"
        // One label that includes the description, so it is not announced twice.
        aria-label={`Open full size image: ${alt}`}
      >
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" />
        <span className="zoom-figure__hint" aria-hidden="true">
          View full size
        </span>
      </button>

      {(caption || note) && (
        <figcaption>
          {caption}
          {note && <small className="zoom-figure__note">{note}</small>}
        </figcaption>
      )}

      <dialog
        ref={dialogRef}
        className="zoom-viewer"
        aria-label={alt}
        onClose={() => triggerRef.current?.focus()}
        // A click on the dimmed backdrop lands on the dialog itself, not its contents.
        onClick={(event) => {
          if (event.target === dialogRef.current) closeViewer();
        }}
      >
        <div className="zoom-viewer__bar">
          <a href={fullSrc ?? src} target="_blank" rel="noopener noreferrer">
            Open in new tab
          </a>
          <button type="button" onClick={closeViewer} className="zoom-viewer__close">
            Close<span className="visually-hidden"> full size image</span>
          </button>
        </div>
        <div className="zoom-viewer__canvas">
          <img src={fullSrc ?? src} alt={alt} />
        </div>
      </dialog>
    </figure>
  );
}
