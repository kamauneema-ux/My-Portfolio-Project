import { Link } from "react-router-dom";
import {
  beyondTheWork,
  certifications,
  education,
  profile,
  skillGroups,
} from "../data/profile";

export default function About() {
  return (
    <div className="container">
      <section className="section about">
        <h2>A little about me</h2>
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </section>

      <section className="section">
        <h2>{profile.aboutPortfolio.title}</h2>
        {profile.aboutPortfolio.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <p>The projects highlight how I:</p>
        <ul className="check-list">
          {profile.aboutPortfolio.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>{profile.realWorld.title}</h2>
        {profile.realWorld.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <Link to="/experience" className="text-link">
          See my full work history &rarr;
        </Link>
      </section>

      <section className="section">
        <h2>My experience includes</h2>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-card">
              <h3>{group.category}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{beyondTheWork.msc.title}</h2>
        {beyondTheWork.msc.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}

        <h3>Education</h3>
        <ul className="plain-list">
          {education.map((item) => (
            <li key={item.award} className="qualification">
              <h4>{item.award}</h4>
              <p className="qualification__meta">
                {item.institution} &middot; {item.period}
              </p>
              {item.detail && <p>{item.detail}</p>}
            </li>
          ))}
        </ul>

        <h3>Certifications</h3>
        <ul className="tag-list tag-list--large">
          {certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </section>

      <section className="section section--accent">
        <p className="section__eyebrow">Outside the work</p>
        <h2>{beyondTheWork.storytelling.title}</h2>
        {beyondTheWork.storytelling.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <p>
          That experience has strengthened skills I also bring to experience
          design:
        </p>
        <ul className="tag-list tag-list--large">
          {beyondTheWork.storytelling.transferable.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>{beyondTheWork.travel.title}</h2>
        {beyondTheWork.travel.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <p>When I travel, I constantly find myself asking:</p>
        <ul className="question-list">
          {beyondTheWork.travel.questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
        <p>{beyondTheWork.travel.closing}</p>
      </section>

      <section className="section">
        <h2>{beyondTheWork.newUser.title}</h2>
        {beyondTheWork.newUser.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <Link to="/contact" className="text-link">
          Get in touch &rarr;
        </Link>
      </section>
    </div>
  );
}
