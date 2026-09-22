import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email)) {
    errors.email =
      "Please enter a valid email address, for example name@example.com.";
  }
  if (values.message.trim().length < 10) {
    errors.message =
      "Please write at least 10 characters so I know what you need.";
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof Fields) => (event: { target: { value: string } }) => {
      setValues((previous) => ({ ...previous, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length === 0) {
      // No backend in Phase 1; submission is confirmed to the user only.
      setSent(true);
      setValues({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="container">
      <section className="section contact">
        <h2>Contact Me</h2>
        <p className="lead">
          I am open to UX research, service design and experience design
          opportunities in Ireland.
        </p>

        <dl className="contact-details">
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </dd>

          <dt>Phone</dt>
          <dd>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
          </dd>

          <dt>Location</dt>
          <dd>{profile.location}</dd>

          <dt>LinkedIn</dt>
          <dd>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.shortName}
            </a>
          </dd>
        </dl>

        <h3>Send me a message</h3>
        <p className="note">
          This form checks your details but does not yet deliver messages — a
          mail service is planned for the next phase. For anything urgent,
          please email me directly at{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>

        {sent && (
          <p className="form-success" role="status">
            Your details passed validation. Delivery is not yet connected, so
            please send this to{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a> and I will
            reply.
          </p>
        )}

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={update("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p className="form-error" id="name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={update("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p className="form-error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={update("message")}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p className="form-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="button button--primary">
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
