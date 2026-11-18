import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Writing() {
  return (
    <div className="container">
      <section className="section">
        <h2>Blog</h2>
        <p className="lead">
          Reflections on projects and coursework from my MSc in Interaction and
          Experience Design.
        </p>

        <div className="work-list">
          {posts.map((post) => (
            <article key={post.slug} className="work-card">
              <p className="work-card__strapline">{post.module}</p>
              <h3>
                <Link to={`/writing/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="post-subtitle">{post.subtitle}</p>
              <p>{post.summary}</p>
              {post.video && (
                <p className="post-badge">Includes video &middot; {post.video.duration}</p>
              )}
              <Link to={`/writing/${post.slug}`} className="text-link">
                Read and watch &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
