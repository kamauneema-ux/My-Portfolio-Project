import { Link, useParams } from "react-router-dom";
import { getPost } from "../data/posts";
import NotFound from "./NotFound";

export default function WritingPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return <NotFound message="That blog post does not exist." />;
  }

  return (
    <div className="container">
      <article className="section post">
        <header className="post-header">
          <Link to="/writing" className="text-link">
            &larr; Back to blog
          </Link>
          <h2>{post.title}</h2>
          <p className="post-subtitle">{post.subtitle}</p>
          <p className="post-meta">
            {post.author}
            <br />
            {post.module}
            <br />
            {post.institution}
          </p>
        </header>

        {post.video && (
          <figure className="post-video">
            {/* #t=0.1 makes browsers paint the first frame instead of a black box before play */}
            <video
              controls
              preload="metadata"
              playsInline
              width={post.video.width}
              height={post.video.height}
              aria-label={post.video.title}
            >
              <source src={`${post.video.src}#t=0.1`} type="video/mp4" />
              Your browser cannot play this video.{" "}
              <a href={post.video.src}>Download the video</a> instead.
            </video>
            <figcaption>
              {post.video.title} &middot; {post.video.duration}
            </figcaption>
          </figure>
        )}

        <div className="post-body">
          {post.body.map((block, index) =>
            block.type === "paragraph" ? (
              <p key={index}>{block.text}</p>
            ) : (
              <figure key={index} className="artefact">
                <img src={block.src} alt={block.alt} loading="lazy" />
                <figcaption>{block.caption}</figcaption>
              </figure>
            ),
          )}
        </div>
      </article>
    </div>
  );
}
