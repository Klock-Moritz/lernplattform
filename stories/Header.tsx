import React from "react"

export type HeaderLinkItem = {
  href: string,
  title: string,
  selected?: boolean,
}

export type HeaderProps = {
  homepageHref: string,
  links: HeaderLinkItem[],
}

export const Header: React.FC<HeaderProps> = ({
  homepageHref,
  links,
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md">
      <div className="mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <figure className="w-35 h-fit">
          <a href={homepageHref} className="flex items-center gap-2 group min-w-0">
            <img alt="MenschKI!" className="h-full w-full rounded-none" src="https://menschki.org/media/MenschKI-Logo.webp" />
            <span className="sr-only">MenschKI!</span>
          </a>
        </figure>
        <nav className="flex items-center gap-4 text-sm">
          {links.map((link, index) => (
            <a key={`header-link-${index}`} href={link.href}
              className={`${link.selected
                ? "text-primary-500 font-bold"
                : "text-black"
              } hover:text-primary-500 transition-colors`}
              aria-current={link.selected ? "page" : undefined}>
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}