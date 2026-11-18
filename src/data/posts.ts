import perfumeBottle from "../assets/reflection-perfume-bottle.jpg";
import groupDiscussion from "../assets/reflection-group-discussion.jpg";
import storyboardReview from "../assets/reflection-storyboard-review.jpg";
import colleagueScene from "../assets/reflection-colleague-scene.jpg";
import cheetahPerfumeVideo from "../assets/cheetah-perfume.mp4";

export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "figure"; src: string; alt: string; caption: string };

export type PostVideo = {
  src: string;
  title: string;
  width: number;
  height: number;
  duration: string;
};

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  module: string;
  institution: string;
  summary: string;
  video?: PostVideo;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "creating-our-perfume-advertisement",
    title: "Creating Our Perfume Advertisement",
    subtitle: "Personal Reflection on Video Production",
    author: "Grace Muthoni Kamau",
    module: "CS6041 · Interactive Media Project/Workshop 1",
    institution: "University of Limerick · Academic Year 2026/2027",
    summary:
      "A group video production: a comedic perfume advertisement about a wife who investigates an unfamiliar scent. My reflection on ideation, turning my home into a set, acting, and what I would do differently.",
    video: {
      src: cheetahPerfumeVideo,
      title: "Cheetah perfume advertisement",
      width: 1920,
      height: 1080,
      duration: "1 min 55 s",
    },
    body: [
      {
        type: "paragraph",
        text: "For our group video production assignment, we created a perfume advertisement. I suggested the perfume idea because I make perfumes myself and could provide a bottle for filming. After discussing several possibilities, this gave us something practical to build our story around. The challenge was how to communicate the appeal of a scent that viewers could not smell. Once we started filming, I noticed that some ideas were harder to show on camera than they had been to explain in our discussions.",
      },
      {
        type: "figure",
        src: perfumeBottle,
        alt: "A square glass perfume bottle with a gold cap and a label showing two cheetahs and the word cheetah, on a wooden surface.",
        caption: "Figure 1. A photo I took of the perfume during filming.",
      },
      {
        type: "paragraph",
        text: "Another group member suggested a story about suspected cheating and I suggested adding an investigation to make it funny. Together, these became a story about a wife who notices an unfamiliar perfume scent on her husband and investigates her suspicions. Although I introduced the perfume concept and contributed the investigation idea, we developed the storyline together. Everyone brought a different idea, and combining them helped us create something none of us would have come up with individually.",
      },
      {
        type: "paragraph",
        text: "I offered my home as one of our main filming locations and coordinated a time for the group to come and shoot. I cleaned and arranged the space, provided the perfume, furniture and props needed for the scenes, and supplied additional lighting. I also helped choose a time that suited the available light. Getting ready for filming made me think about my home differently. Normally, I wouldn\u2019t think about where someone would stand or what would be visible behind them. For filming, I had to imagine where the actors would be, what the camera would show and whether there was enough room to capture each scene. The house still needed to look like a normal home for the story to feel believable. I had to think about how we would use the space, not just offer it for filming.",
      },
      {
        type: "figure",
        src: groupDiscussion,
        alt: "Five group members standing around a table in a kitchen and living area, discussing a scene beside a phone mounted on a tripod.",
        caption: "Figure 2. Group discussion during production at my home.",
      },
      {
        type: "paragraph",
        text: "When I was not acting, I joined the other team members in watching the scenes and sharing feedback. We discussed our different suggestions and made changes to some scenes. Afterwards, I went back to the storyboard and explained the changes to the team member who had created it so they could update it to match what we filmed. I learnt that we could still update the storyboard as we made changes to the scene.",
      },
      {
        type: "figure",
        src: storyboardReview,
        alt: "Grace reviewing a storyboard on a tablet while a phone on a tripod frames a scene being filmed at the table behind her.",
        caption:
          "Figure 3. Reviewing the storyboard during filming in my home for feedback on a scene.",
      },
      {
        type: "paragraph",
        text: "I acted as the colleague who talks to the husband, leading the wife to investigate whether the perfume scent comes from me. We repeated the scene several times while other group members watched and gave feedback. I have acted in my own content before, but this scene was harder because it was different from what I normally do. I knew what was supposed to happen, but performing it felt less comfortable than I expected. Next time, I would rehearse the scene several times with the other actor before recording so as to be more comfortable.",
      },
      {
        type: "figure",
        src: colleagueScene,
        alt: "Grace and another actor standing facing each other outside a building entrance while a group member films them with a phone on a tripod.",
        caption: "Figure 4. Preparing to film the colleague scene",
      },
      {
        type: "paragraph",
        text: "I wrote the ideation section of the group report, while two other team members wrote the filming and editing sections. They sent their sections to me, and I combined them with mine into one report. I then made a few changes to help the writing flow so as to keep everyone\u2019s contributions.",
      },
      {
        type: "paragraph",
        text: "I learnt that suggesting an idea also meant helping figure out how we would film it. During filming, I noticed the different strengths each person brought to the group. Next time, I would suggest acting out the whole story before recording so we could see what needed changing. I would still suggest ideas based on things I enjoy, but discuss them with the group earlier to work out how to film them and make the story clear to viewers.",
      },
      {
        type: "paragraph",
        text: "I was also supposed to do the voiceover and recorded it several times, but some group members found parts of it difficult to understand because of my accent. Another team member had to record it again at the last minute. This shows that people from different parts of the world can be more familiar with some accents than others. Next time, I would suggest recording a short sample early and listening to it together, so we could check how clearly the message comes across and allow time for any changes.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
