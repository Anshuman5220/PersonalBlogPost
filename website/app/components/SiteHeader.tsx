"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggle from "@/app/components/ThemeToggle";

const links = [
  { href: "/blogs", label: "Blog" },
  { href: "/projects", label: "Case Studies" },
  { href: "/about", label: "About me" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-brand" href="/">
          Anshuman Bhadauria
        </Link>
        <div className="site-header-actions">
          <nav className="site-nav" aria-label="Primary">
            {links.map((link) => {
              const isActive = pathname === link.href;
              const className = isActive ? "site-nav-link site-nav-link-active" : "site-nav-link";

              return (
                <Link key={link.href} className={className} href={link.href} aria-current={isActive ? "page" : undefined}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
