import type { Block, Figure } from "../../content/academic";
import ZoomableFigure from "../../components/ui/ZoomableFigure";

type Props = { blocks: readonly Block[]; numbered?: boolean };

/** One numbered block: a paragraph and any figures that follow it. */
type Group = { text: string; figures: Figure[] };

function groupByParagraph(blocks: readonly Block[]): Group[] {
  const groups: Group[] = [];
  for (const block of blocks) {
    if (block.type === "paragraph") groups.push({ text: block.text, figures: [] });
    else groups[groups.length - 1]?.figures.push(block.figure);
  }
  return groups;
}

function BlockFigure({ figure }: { figure: Figure }) {
  return (
    <ZoomableFigure
      src={figure.src}
      alt={figure.alt}
      width={figure.width}
      height={figure.height}
      caption={figure.caption}
    />
  );
}

/**
 * Renders reproduced blog text in its original order. `numbered` groups each
 * paragraph with the photos that follow it, beside a 01, 02… marker.
 */
export default function BlockList({ blocks, numbered = false }: Props) {
  if (numbered) {
    return (
      <>
        {groupByParagraph(blocks).map((group, index) => (
          <div key={index} className="ac-block">
            <span className="ac-block__count" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="ac-block__content">
              <p>{group.text}</p>
              {group.figures.map((figure) => (
                <BlockFigure key={figure.caption} figure={figure} />
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {blocks.map((block, index) =>
        block.type === "figure" ? (
          <BlockFigure key={index} figure={block.figure} />
        ) : (
          <p key={index}>{block.text}</p>
        ),
      )}
    </>
  );
}
