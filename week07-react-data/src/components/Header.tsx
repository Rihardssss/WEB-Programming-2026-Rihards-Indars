import { useState } from "react";
import { Link, NavLink } from "react-router";

interface HeaderProps {
  userName: string;
  userInitials: string;
  course: string;
}

interface NavItem {
  label: string;
  to: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Deadlines", to: "/deadlines" },
];

const navLink =
  "rounded-[10px] px-3 py-[9px] text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

function navClass({ isActive }: { isActive: boolean }): string {
  return `${navLink} ${isActive ? "bg-[#f1f3f8] text-app-text" : "text-app-muted hover:bg-[#f1f3f8] hover:text-app-text"}`;
}

function Header({ userName, userInitials, course }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu(): void {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-app-line/90 bg-white/92 backdrop-blur-[14px]">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1180px] items-center gap-7 px-3.5 sm:px-5">
        <Link
          className="inline-flex items-center gap-2.5 font-extrabold tracking-[-0.02em]"
          to="/"
          onClick={closeMenu}
        >
          <span className="grid h-[38px] w-[38px] place-items-center rounded-xl bg-gradient-to-br from-primary to-[#8a7dff] text-[13px] text-white shadow-badge">
            CF
          </span>
          <span>CampusFlow</span>
        </Link>

        <button
          className="ml-auto grid h-[42px] w-[42px] place-items-center rounded-[10px] p-[9px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-[960px]:hidden"
          id="menuButton"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="block h-0.5 w-full rounded-full bg-app-text"></span>
          <span className="mt-[5px] block h-0.5 w-full rounded-full bg-app-text"></span>
          <span className="mt-[5px] block h-0.5 w-full rounded-full bg-app-text"></span>
        </button>

        <nav
          className={`absolute inset-x-5 top-[72px] z-40 ${isMenuOpen ? "flex" : "hidden"} flex-col items-stretch gap-1 rounded-2xl border border-app-line bg-white p-2.5 shadow-soft min-[960px]:static min-[960px]:z-auto min-[960px]:ml-[18px] min-[960px]:flex min-[960px]:flex-row min-[960px]:items-center min-[960px]:gap-1.5 min-[960px]:rounded-none min-[960px]:border-0 min-[960px]:bg-transparent min-[960px]:p-0 min-[960px]:shadow-none`}
          id="mainNav"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} className={navClass} to={item.to} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-0 flex items-center gap-2.5 min-[960px]:ml-auto">
          <div className="grid h-[38px] w-[38px] place-items-center rounded-full bg-app-text text-xs font-extrabold text-white">
            {userInitials}
          </div>
          <div className="hidden gap-px sm:grid">
            <strong className="text-[13px]">{userName}</strong>
            <span className="text-[11px] text-app-muted">{course}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
