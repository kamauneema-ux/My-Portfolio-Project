import { film } from "../../content/academic";

/**
 * The Cheetah Perfume film. Self-hosted so it plays without third-party
 * cookies; `preload="none"` means the 25 MB file only downloads on play.
 */
export default function FilmPlayer() {
  return (
    <video
      className="film-player"
      controls
      preload="none"
      playsInline
      poster={film.poster}
      width={film.width}
      height={film.height}
      aria-label={film.title}
    >
      <source src={film.src} type="video/mp4" />
      Your browser cannot play this video.{" "}
      <a href={film.src}>Download the film</a> instead.
    </video>
  );
}
