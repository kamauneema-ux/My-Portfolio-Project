import { Link } from "react-router-dom";

type NotFoundProps = { message?: string };

export default function NotFound({ message }: NotFoundProps) {
  return (
    <div className="container">
      <section className="section not-found">
        <p className="not-found__code">404</p>
        <h2>Page not found</h2>
        <p>
          {message ??
            "The page you were looking for has moved or never existed."}
        </p>
        <Link to="/" className="button button--primary">
          Back to home
        </Link>
      </section>
    </div>
  );
}
