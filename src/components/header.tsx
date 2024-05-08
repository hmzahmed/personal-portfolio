"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const links = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Experience", to: "/work-experience" },
    { title: "Projects", to: "/projects" },
  ];

  return (
    <nav className="fixed">
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
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0" />
        )}
      </Link>
    </li>
  );
}
