"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const lastScroll = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const links = [
    { title: "Home", to: "/" },
    // { title: "About", to: "/about" },
    { title: "Experience", to: "/work-experience" },
    { title: "Projects", to: "/projects" },
  ];

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        headerRef.current?.classList.remove("-translate-y-full");
        return;
      }

      if (
        currentScroll > lastScroll.current &&
        !headerRef.current?.classList.contains("-translate-y-full")
      ) {
        headerRef.current?.classList.add("-translate-y-full");
      } else if (
        currentScroll < lastScroll.current &&
        headerRef.current?.classList.contains("-translate-y-full")
      ) {
        headerRef.current?.classList.remove("-translate-y-full");
      }
      lastScroll.current = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={headerRef} className="fixed top-0 pt-4 transform transition-all">
      <ul className="flex rounded-full px-3 font-medium backdrop-blur bg-zinc-800 text-zinc-200 ring-white/10">
        {links.map((link) => (
          <NavItem key={link.to} href={link.to} isActive={pathname === link.to}>
            <p>{link.title}</p>
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

type NavItemType = {
  href: string;
  children: JSX.Element;
  isActive: boolean;
};
function NavItem({ href, children, isActive }: NavItemType) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive ? "text-teal-500" : "hover:text-teal-500"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500 via-teal-500/60 to-teal-500" />
        )}
      </Link>
    </li>
  );
}
