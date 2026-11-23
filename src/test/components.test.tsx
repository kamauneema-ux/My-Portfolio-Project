import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ZoomableFigure from "../components/ui/ZoomableFigure";
import Disclosure from "../components/ui/Disclosure";

describe("ZoomableFigure", () => {
  const props = {
    src: "small.svg",
    fullSrc: "large.png",
    alt: "Staff journey",
    caption: "Caption text",
    width: 1200,
    height: 450,
  };

  it("opens the full-size image and returns focus when closed", async () => {
    const user = userEvent.setup();
    render(<ZoomableFigure {...props} />);
    const trigger = screen.getByRole("button", {
      name: /view full size image: staff journey/i,
    });

    await user.click(trigger);
    const dialog = screen.getByRole("dialog", { hidden: true });
    expect(dialog).toHaveAttribute("open");
    expect(dialog.querySelector("img")).toHaveAttribute("src", "large.png");

    await user.click(
      screen.getByRole("button", { name: /close/i, hidden: true }),
    );
    expect(dialog).not.toHaveAttribute("open");
    expect(trigger).toHaveFocus();
  });

  it("keeps the caption and alt text for screen readers", () => {
    render(<ZoomableFigure {...props} />);
    expect(screen.getByText("Caption text")).toBeInTheDocument();
    expect(screen.getAllByAltText("Staff journey")[0]).toHaveAttribute(
      "src",
      "small.svg",
    );
  });
});

describe("Disclosure", () => {
  it("starts collapsed and expands when its summary is activated", async () => {
    const user = userEvent.setup();
    render(
      <Disclosure label="Explore the full case study">
        <p>Hidden detail</p>
      </Disclosure>,
    );
    const details = screen
      .getByText("Explore the full case study")
      .closest("details")!;
    expect(details.open).toBe(false);

    // Enter/Space on <summary> is native browser behaviour jsdom does not emulate; verified manually.
    await user.click(screen.getByText("Explore the full case study"));
    expect(details.open).toBe(true);
  });
});
