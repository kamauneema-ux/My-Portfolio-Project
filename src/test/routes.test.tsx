import { Suspense } from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "../App";

/** Renders the whole app at a given address, as a visitor arriving there would see it. */
function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </MemoryRouter>,
  );
}

describe("routing", () => {
  it("shows the home page with all three projects, each with one link", async () => {
    renderAt("/");
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: /services behind everyday transactions/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view capa case study/i }),
    ).toHaveAttribute("href", "/work/capa");
    expect(
      screen.getByRole("link", { name: /view sacco case study/i }),
    ).toHaveAttribute("href", "/work/digital-sacco");
    expect(
      screen.getByRole("link", { name: /view m-pesa case study/i }),
    ).toHaveAttribute("href", "/work/mpesa-one-app");
  });

  it.each([
    [
      "/work/capa",
      /redesigning how safaricom business handled billing complaints/i,
    ],
    ["/work/digital-sacco", /one digital sacco app/i],
    ["/work/mpesa-one-app", /hard to activate while roaming/i],
    ["/about", /designing with people/i],
    ["/academic-projects", /ideas don.t stay/i],
    ["/academic-projects/group-production", /bringing a scent/i],
    ["/academic-projects/personal-reflection", /creating our perfume/i],
  ])("renders %s", async (path, heading) => {
    renderAt(path);
    expect(
      await screen.findByRole("heading", { level: 1, name: heading }),
    ).toBeInTheDocument();
  });

  it("sets a distinct browser-tab title per page", async () => {
    renderAt("/work/capa");
    await screen.findByRole("heading", { level: 1 });
    expect(document.title).toMatch(/^Redesigning how Safaricom Business/);
  });

  it("forwards Phase 1 addresses instead of breaking them", async () => {
    renderAt("/writing/creating-our-perfume-advertisement");
    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: /creating our perfume/i,
      }),
    ).toBeInTheDocument();
  });

  it("shows a not-found page for unknown addresses", async () => {
    renderAt("/no-such-page");
    expect(
      await screen.findByRole("heading", { level: 1, name: /page not found/i }),
    ).toBeInTheDocument();
  });

  it("no longer publishes the CV career history", async () => {
    renderAt("/experience");
    await screen.findByRole("heading", { level: 1 });
    expect(
      screen.queryByText(/M-PESA Holding Governance Lead/i),
    ).not.toBeInTheDocument();
  });
});
