import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type ExplorerStage = { id: string; label: string; content: ReactNode };

type Props = { stages: ExplorerStage[]; ariaLabel: string };

export default function StageExplorer({ stages, ariaLabel }: Props) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = stages.length - 1;
    let next = active;

    if (event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="stage-explorer">
      <div
        className="stage-explorer__tabs"
        role="tablist"
        aria-label={ariaLabel}
      >
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`stage-tab-${stage.id}`}
            aria-controls={`stage-panel-${stage.id}`}
            aria-selected={index === active}
            tabIndex={index === active ? 0 : -1}
            className={`stage-explorer__tab${index === active ? " is-active" : ""}`}
            onClick={() => setActive(index)}
            onKeyDown={handleKeyDown}
          >
            <span className="stage-explorer__step">
              {String(index + 1).padStart(2, "0")}
            </span>
            {stage.label}
          </button>
        ))}
      </div>

      <div
        className="stage-explorer__panel"
        role="tabpanel"
        id={`stage-panel-${stages[active].id}`}
        aria-labelledby={`stage-tab-${stages[active].id}`}
        tabIndex={0}
      >
        {stages[active].content}
      </div>
    </div>
  );
}
