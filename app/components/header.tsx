"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type HeaderLink = {
  route: String;
  text: String;
};

export type HeaderProps = {
  links: HeaderLink[];
};

export function Header(props: HeaderProps) {
  const pathname = usePathname();

  return (
    <>
      <header>
        <nav>
          {props.links.map((link) => (
            <NavLink
              route={link.route}
              text={link.text}
              isActive={link.route == pathname}
            />
          ))}
        </nav>
      </header>
    </>
  );
}

type NavLinkProps = { route: String; text: String; isActive: Boolean };

function NavLink(props: NavLinkProps) {
  return (
    <>
      <li>
        <Link
          className={`nav__link${props.isActive ? "--active" : ""}`}
          href={`${props.route}`}
        >
          {props.text}
        </Link>
      </li>
    </>
  );
}
