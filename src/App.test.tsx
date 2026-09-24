import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";
import { profile } from "./content/profile";

describe("App", () => {
  it("renders the hero and every nav section", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(profile.name);
    for (const id of ["work", "experience", "about", "contact"]) {
      expect(document.getElementById(id)).toBeInTheDocument();
    }
  });

  it("does not link to Fanbyte, which is retired", () => {
    render(<App />);
    const fanbyte = screen.getByRole("article", { name: "Fanbyte" });
    expect(within(fanbyte).queryAllByRole("link")).toHaveLength(0);
    expect(document.querySelector('a[href*="fanbyte"]')).toBeNull();
  });

  it("opens external links in a new tab without leaking the referrer", () => {
    render(<App />);
    const external = document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]');
    expect(external.length).toBeGreaterThan(0);
    for (const link of external) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    }
  });

  it("toggles the color theme", async () => {
    render(<App />);
    await userEvent.click(screen.getByRole("button", { name: /switch to dark theme/i }));
    expect(document.documentElement.dataset.theme).toBe("dark");
    await userEvent.click(screen.getByRole("button", { name: /switch to light theme/i }));
    expect(document.documentElement.dataset.theme).toBe("light");
  });
});
