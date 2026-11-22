/**
 * Content for the Academic projects section: one film, told twice.
 * Blog 1 reproduces our group report word for word; Blog 2 reproduces
 * my personal reflection word for word. Wording is kept exactly as
 * submitted, including the originals' small typos.
 */
import cheetahFilm from "../assets/academic/cheetah-perfume.mp4";
import cheetahPoster from "../assets/academic/cheetah-poster.jpg";
import productShoot from "../assets/academic/product-shoot.jpg";
import perfumeBottle from "../assets/academic/reflection-perfume-bottle.jpg";
import groupDiscussion from "../assets/academic/reflection-group-discussion.jpg";
import storyboardReview from "../assets/academic/reflection-storyboard-review.jpg";
import colleagueScene from "../assets/academic/reflection-colleague-scene.jpg";

export type Figure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "figure"; figure: Figure };

export const film = {
  src: cheetahFilm,
  poster: cheetahPoster,
  title: "Cheetah Perfume, group advertisement",
  duration: "01:55",
  width: 1920,
  height: 1080,
} as const;

export const course = "University of Limerick · CS6041 · 2026/27";

const figures = {
  groupDiscussion: {
    src: groupDiscussion,
    width: 606,
    height: 816,
    alt: "Five group members standing around a table in a kitchen and living area, discussing a scene beside a phone mounted on a tripod.",
  },
  productShoot: {
    src: productShoot,
    width: 606,
    height: 456,
    alt: "A Cheetah perfume bottle with a gold cap resting on dark green satin against a warm orange background.",
  },
  perfumeBottle: {
    src: perfumeBottle,
    width: 606,
    height: 662,
    alt: "A square glass perfume bottle with a gold cap and a label showing two cheetahs and the word cheetah, on a wooden surface.",
  },
  storyboardReview: {
    src: storyboardReview,
    width: 531,
    height: 564,
    alt: "Grace reviewing a storyboard on a tablet while a phone on a tripod frames a scene being filmed at the table behind her.",
  },
  colleagueScene: {
    src: colleagueScene,
    width: 1039,
    height: 584,
    alt: "Grace and another actor standing facing each other outside a building entrance while a group member films them with a phone on a tripod.",
  },
};

/** Landing-page copy and the two blog cards. */
export const overview = {
  intro:
    "An exploration of storytelling, collaboration and experience through a film we made together.",
  featuredQuestion:
    "How do you tell the story of a perfume when your audience cannot smell it?",
  featuredTags: ["Academic project", "Collaboration", "Storytelling"],
  twoBlogsIntro:
    "The group story captures how the film was made. My personal reflection explores what I learned while helping bring it to life.",
  cards: [
    {
      number: "01",
      kind: "Group blog",
      title: "The story we made together.",
      summary:
        "Our concept, production choices and final advertisement, presented with the complete group report.",
      cta: "Read Blog 1",
      image: figures.productShoot,
    },
    {
      number: "02",
      kind: "Personal reflection",
      title: "What happened behind the camera.",
      summary:
        "My first person account of shaping the idea, collaborating on set and learning through the process.",
      cta: "Read Blog 2",
      image: figures.storyboardReview,
    },
  ],
  practice: {
    lead: "Exploring creative media alongside my work in",
    focus: "service design, research and experience.",
  },
} as const;

/** Blog 1: the group's production account. */
export const groupProduction = {
  question:
    "How do you tell the story of a perfume when your audience cannot smell it?",
  intro: [
    "That was the challenge behind Cheetah, an academic group project at the University of Limerick. I introduced the perfume idea, and through collaboration, we developed a story that uses curiosity, suspicion and humour to bring the fragrance to life.",
    "What started as a simple idea became an opportunity to explore how people connect with products through emotions, experiences and storytelling.",
    "Sometimes, the best way to communicate an experience is to let people discover it for themselves.",
  ],
  tags: [
    "Creative concept",
    "Storytelling",
    "Collaboration",
    "Video production",
  ],
  reportNote:
    "The production account below reproduces our group report, preserving the group\u2019s original text, images and creative decisions.",
  sections: [
    {
      id: "concept-and-purpose",
      title: "Concept and Purpose",
      blocks: [
        {
          type: "paragraph",
          text: "We developed an advertisement for Cheetah perfume around a wife who notices an unfamiliar scent on her husband and becomes suspicious. The idea began with a perfume that a group member could provide. We included humour and built the story around the wife misunderstanding her husband\u2019s interest in the perfume. The scent causes the suspicion and eventually explains his behaviour. Our aim was to communicate the perfume\u2019s appeal through the characters\u2019 reactions.",
        },
        {
          type: "paragraph",
          text: "We chose a home as a main location because it suited the relationship story and gave us access to furniture, props and space for filming. Working with resources already available to the group made the concept practical and affordable to produce.",
        },
        {
          type: "figure",
          figure: {
            ...figures.groupDiscussion,
            caption: "Figure 1. Group discussion during filming",
          },
        },
      ],
    },
    {
      id: "script-and-storyboard",
      title: "Script and Storyboard",
      blocks: [
        {
          type: "paragraph",
          text: "We organised the script around a setup, an investigation and a reveal. The greeting introduces the unfamiliar scent, the investigation develops the wife\u2019s suspicion, and the ending reveals the husband\u2019s interest in the perfume. It allowed us to build the misunderstanding before explaining it through the product.",
        },
        {
          type: "paragraph",
          text: "The storyboard translates that structure into framing and action. The closer view of the wife noticing the scent directs attention to her expression. Later, the view of the package from her perspective gives the audience access to the clue she sees. The planned ending shows the husband applying the perfume, followed by the wife taking it and a product shot. These choices connect the story back to the item being advertised.",
        },
        {
          type: "paragraph",
          text: "The script recorded the actions and audio, and the storyboard gave us a visual reference during production. We returned to it when part of the sequence seemed unclear thus helped us discuss how adjacent scenes connected.",
        },
      ],
    },
    {
      id: "camera-and-lighting",
      title: "Camera and Lighting",
      blocks: [
        {
          type: "paragraph",
          text: "We used an iPhone 16 Pro and mainly selected the 2x view to frame the subjects more tightly and reduce distractions around them. We also experimented with tighter product details. The filming approach combined wider compositions to establish the setting with closer views to draw attention to the perfume and its branding.",
        },
        {
          type: "paragraph",
          text: "We used a tripod for several shots to keep the framing steady, particularly when working with tighter views. The Blackmagic Camera app allowed us to adjust exposure and shutter speed for different lighting conditions. For outdoor filming, we preferred warmer, softer natural light. Indoors, we checked that the subjects were sufficiently illuminated and used additional lighting when needed. These decisions supported the dramatic, slightly mysterious mood described in our shooting plan while keeping the people and product visible.",
        },
        {
          type: "figure",
          figure: {
            ...figures.productShoot,
            caption: "Figure 2. Cheetah perfume product shoot",
          },
        },
      ],
    },
    {
      id: "editing-and-audio",
      title: "Editing and Audio",
      blocks: [
        {
          type: "paragraph",
          text: "Before editing began, we discussed using sharp cuts instead of extended transitions or fades between scenes. We felt that elaborate transitions would add time without helping explain the story. The initial rough cut was too long, so we reviewed the footage and removed pauses, still frames and sequences that did not communicate their intended meaning clearly.",
        },
        {
          type: "paragraph",
          text: "This review exposed a difference between knowing the story and seeing it communicated on screen. A scene could make sense to us because we knew its purpose yet still be unclear to someone watching. We therefore prioritised the actions needed to reduce the misunderstanding, painting as clear of a picture as possible without filler.",
        },
        {
          type: "paragraph",
          text: "During editing we also added in the musical pieces to better communicate the feelings and emotions of the story. We wanted something that had a bit of a tempo to it during the investigation scenes to give the audience a sense of drama, but then ending with a soft melody upon the reveal of the husband using the perfume on himself. This really added to the story but helping the audience understand what they were supposed to get from each scene. The final addition was the audio clip with our tagline \u201CCheetah for her, makes your husband go wild\u201D to advertise the product but also add a bit of a comedic aspect to it since the husband went wild in the sense that he used the perfume himself.",
        },
      ],
    },
    {
      id: "final-review",
      title: "Final Review",
      blocks: [
        {
          type: "paragraph",
          text: "The main lesson from the production was that a shared idea still needs to be tested through performance, framing and editing. Reviewing the storyboard during filming and questioning the rough cut helped us identify where our intentions were not clear enough. Having audio and music decided upon ahead of time would also be helpful as we could use it during our filming to assist with pacing. A fuller walkthrough before recording would help us resolve those problems earlier in a future production and lessen the strain on the editor.",
        },
      ],
    },
    {
      id: "references",
      title: "References",
      blocks: [
        {
          type: "paragraph",
          text: "Music references and links attached separately.",
        },
      ],
    },
  ] satisfies { id: string; title: string; blocks: Block[] }[],
};

/** Blog 2: my personal reflection on the same production. */
export const personalReflection = {
  title: "Creating Our Perfume Advertisement",
  subtitle: "Personal Reflection on Video Production",
  meta: [
    "Grace Muthoni Kamau",
    "CS6041 · Interactive Media Project / Workshop 1",
    "University of Limerick · 2026/2027",
  ],
  hero: {
    ...figures.groupDiscussion,
    alt: "The group discussing production decisions on set",
    caption: "On set / The process in motion",
  },
  pullQuote:
    "The challenge was how to communicate the appeal of a scent that viewers could not smell.",
  account:
    "A personal reflection on collaboration, preparation, filming and the things I would approach differently next time.",
  blocks: [
    {
      type: "paragraph",
      text: "For our group video production assignment, we created a perfume advertisement. I suggested the perfume idea because I make perfumes myself and could provide a bottle for filming. After discussing several possibilities, this gave us something practical to build our story around. The challenge was how to communicate the appeal of a scent that viewers could not smell. Once we started filming, I noticed that some ideas were harder to show on camera than they had been to explain in our discussions.",
    },
    {
      type: "figure",
      figure: {
        ...figures.perfumeBottle,
        caption: "Figure 1. A photo I took of the perfume during filming.",
      },
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
      figure: {
        ...figures.groupDiscussion,
        caption: "Figure 2. Group discussion during production at my home.",
      },
    },
    {
      type: "paragraph",
      text: "When I was not acting, I joined the other team members in watching the scenes and sharing feedback. We discussed our different suggestions and made changes to some scenes. Afterwards, I went back to the storyboard and explained the changes to the team member who had created it so they could update it to match what we filmed. I learnt that we could still update the storyboard as we made changes to the scene.",
    },
    {
      type: "figure",
      figure: {
        ...figures.storyboardReview,
        caption:
          "Figure 3. Reviewing the storyboard during filming in my home for feedback on a scene.",
      },
    },
    {
      type: "paragraph",
      text: "I acted as the colleague who talks to the husband, leading the wife to investigate whether the perfume scent comes from me. We repeated the scene several times while other group members watched and gave feedback. I have acted in my own content before, but this scene was harder because it was different from what I normally do. I knew what was supposed to happen, but performing it felt less comfortable than I expected. Next time, I would rehearse the scene several times with the other actor before recording so as to be more comfortable.",
    },
    {
      type: "figure",
      figure: {
        ...figures.colleagueScene,
        caption: "Figure 4. Preparing to film the colleague scene",
      },
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
  ] satisfies Block[],
};
