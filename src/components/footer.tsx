import Link from "next/link";

const footerSections = [
  {
    title: "ПОМОЩЬ",
    links: [
      { label: "ЧЗВ/Контакты", href: "#" },
      { label: "Возврат/обмен", href: "#" },
      { label: "Доставка", href: "#" },
      { label: "Статус заказа", href: "#" },
    ],
  },
  {
    title: "МАГАЗИН",
    links: [
      { label: "Мужская обувь", href: "/collections/mens" },
      { label: "Женская обувь", href: "/collections/womens" },
      { label: "Новинки", href: "/collections/new-arrivals" },
      { label: "Бестселлеры", href: "/collections/best-sellers" },
      { label: "Распродажа", href: "/collections/sale" },
    ],
  },
  {
    title: "КОМПАНИЯ",
    links: [
      { label: "О нас", href: "#" },
      { label: "Наши материалы", href: "#" },
      { label: "Экологичность", href: "#" },
      { label: "Карьера", href: "#" },
      { label: "Пресса", href: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X/Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-footer-bg text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        {/* Follow the Flock social section */}
        <div className="mb-12 pb-10 border-b border-white/10">
          <h3 className="text-[12px] font-medium uppercase tracking-[0.8px] text-white/50 mb-4">
            ПОДПИШИТЕСЬ НА НАС
          </h3>
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Email signup — more prominent */}
          <div>
            <h3 className="text-[12px] font-medium uppercase tracking-[0.8px] text-white/50 mb-4">
              ПОДПИШИТЕСЬ
            </h3>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              Узнавайте первыми о новинках, эксклюзивных скидках и многом другом.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full bg-transparent border-b border-white/30 px-0 py-2 text-sm placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="self-start px-6 py-2 text-[11px] font-medium uppercase tracking-wider text-charcoal bg-white rounded-full hover:bg-white/90 transition-colors"
              >
                Подписаться
              </button>
            </form>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[12px] font-medium uppercase tracking-[0.8px] text-white/50 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold italic tracking-tight">FashionHero</span>
            {/* Country selector */}
            <span className="text-xs text-white/40 border border-white/20 px-3 py-1 rounded">
              РУБ (₽)
            </span>
          </div>
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} FashionHero, Inc. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
