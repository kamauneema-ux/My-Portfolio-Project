import type { Block } from "../../content/academic";
import ZoomableFigure from "../../components/ui/ZoomableFigure";

type Props = { blocks: readonly Block[]; numbered?: boolean };

/**
 * Renders reproduced blog text: paragraphs and figures in their original
 * order. `numbered` adds the 01, 02… paragraph markers from the design board.
 */
export default function BlockList({ blocks, numbered = false }: Props) {
  let paragraphNumber = 0;

  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "figure") {
          return (
            <ZoomableFigure
              key={index}
              src={block.figure.src}
              alt={block.figure.alt}
              width={block.figure.width}
              height={block.figure.height}
              caption={block.figure.caption}
            />
          );
        }
        paragraphNumber += 1;
        return (
          <p key={index} className={numbered ? "numbered" : undefined}>
            {numbered && (
              <span className="numbered__marker" aria-hidden="true">
                {String(paragraphNumber).padStart(2, "0")}
              </span>
            )}
            {block.text}
          </p>
        );
      })}
    </>
  );
}
