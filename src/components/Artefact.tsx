type Props = { caption: string; src?: string; alt?: string; note?: string };

// Renders a real artefact once `src` is supplied, otherwise a visible slot to fill.
export default function Artefact({ caption, src, alt, note }: Props) {
  return (
    <figure className="artefact">
      {src ? (
        <img src={src} alt={alt ?? caption} loading="lazy" />
      ) : (
        <div className="artefact__placeholder">
          <span className="artefact__label">Artefact slot</span>
          <span>{caption}</span>
        </div>
      )}
      {src && (
        <figcaption>
          {caption}
          {note && <span className="artefact__note">{note}</span>}
        </figcaption>
      )}
    </figure>
  );
}
