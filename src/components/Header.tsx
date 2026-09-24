import { useState } from "react";
import logo from "../assets/it-logo.png";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import { Close, Menu, Moon, Sun } from "./icons";

const navItems = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <img src={logo} alt="" width={28} height={28} className="size-7" />
          <span>Ian Taylor</span>
        </a>

        <div className="flex items-center gap-1">
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex items-center gap-1 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "location" : undefined}
                    className="rounded-md px-3 py-2 text-muted transition-colors hover:text-fg aria-[current]:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="grid size-9 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            {theme === "dark" ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg sm:hidden"
          >
            {open ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-line px-4 pb-4 sm:hidden">
          <ul className="flex flex-col pt-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-lg text-muted hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
