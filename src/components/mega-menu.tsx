"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { CloseIcon } from "./icons";

type MenuKey = "МУЖЧИНЫ" | "ЖЕНЩИНЫ" | "РАСПРОДАЖА";

interface MenuColumn {
  heading: string;
  links: { label: string; href: string }[];
}

const menMenu: MenuColumn[] = [
  {
    heading: "ОБУВЬ",
    links: [
      { label: "Кроссовки", href: "/collections/mens?type=runner" },
      { label: "Повседневные", href: "/collections/mens?type=walker" },
      { label: "Тренировочные", href: "/collections/mens?type=trainer" },
      { label: "Без шнурков", href: "/collections/mens?type=slip-on" },
      { label: "Вся мужская обувь", href: "/collections/mens" },
    ],
  },
  {
    heading: "ОДЕЖДА",
    links: [
      { label: "Футболки", href: "/collections/apparel?gender=men&type=tee" },
      { label: "Худи", href: "/collections/apparel?gender=men&type=hoodie" },
      { label: "Джоггеры", href: "/collections/apparel?gender=men&type=pant" },
      { label: "Куртки", href: "/collections/apparel?gender=men&type=jacket" },
      { label: "Вся мужская одежда", href: "/collections/apparel?gender=men" },
    ],
  },
  {
    heading: "НОСКИ",
    links: [
      { label: "Укороченные", href: "/collections/socks?gender=men" },
      { label: "Средние", href: "/collections/socks?gender=men" },
      { label: "Невидимки", href: "/collections/socks" },
      { label: "Спортивные", href: "/collections/socks" },
      { label: "Все мужские носки", href: "/collections/socks" },
    ],
  },
  {
    heading: "АКСЕССУАРЫ",
    links: [
      { label: "Сумки", href: "/collections/accessories" },
      { label: "Шапки", href: "/collections/accessories" },
      { label: "Кепки", href: "/collections/accessories" },
      { label: "Стельки", href: "/collections/accessories" },
    ],
  },
];

const womenMenu: MenuColumn[] = [
  {
    heading: "ОБУВЬ",
    links: [
      { label: "Кроссовки", href: "/collections/womens?type=runner" },
      { label: "Повседневные", href: "/collections/womens?type=walker" },
      { label: "Тренировочные", href: "/collections/womens?type=trainer" },
      { label: "Туфли", href: "/collections/womens?type=flat" },
      { label: "Без шнурков", href: "/collections/womens?type=slip-on" },
      { label: "Вся женская обувь", href: "/collections/womens" },
    ],
  },
  {
    heading: "ОДЕЖДА",
    links: [
      { label: "Футболки", href: "/collections/apparel?gender=women&type=tee" },
      { label: "Худи", href: "/collections/apparel?gender=women&type=hoodie" },
      { label: "Джоггеры", href: "/collections/apparel?gender=women&type=pant" },
      { label: "Кардиганы", href: "/collections/apparel?gender=women&type=cardigan" },
      { label: "Вся женская одежда", href: "/collections/apparel?gender=women" },
    ],
  },
  {
    heading: "НОСКИ",
    links: [
      { label: "Укороченные", href: "/collections/socks?gender=women" },
      { label: "Средние", href: "/collections/socks?gender=women" },
      { label: "Невидимки", href: "/collections/socks" },
      { label: "Спортивные", href: "/collections/socks" },
      { label: "Все женские носки", href: "/collections/socks" },
    ],
  },
  {
    heading: "АКСЕССУАРЫ",
    links: [
      { label: "Сумки", href: "/collections/accessories" },
      { label: "Шапки", href: "/collections/accessories" },
      { label: "Кепки", href: "/collections/accessories" },
      { label: "Стельки", href: "/collections/accessories" },
    ],
  },
];

const menuData: Record<MenuKey, MenuColumn[] | null> = {
  МУЖЧИНЫ: menMenu,
  ЖЕНЩИНЫ: womenMenu,
  РАСПРОДАЖА: null,
};

interface MegaMenuTriggerProps {
  label: MenuKey;
  href: string;
}

export function MegaMenuNav() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileMenu, setMobileMenu] = useState<MenuKey | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback((key: MenuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  const handlePanelEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const triggers: MegaMenuTriggerProps[] = [
    { label: "МУЖЧИНЫ", href: "/collections/mens" },
    { label: "ЖЕНЩИНЫ", href: "/collections/womens" },
    { label: "РАСПРОДАЖА", href: "/collections/sale" },
  ];

  return (
    <>
      {/* Desktop nav triggers */}
      <div className="hidden lg:flex items-center gap-6 flex-1">
        {triggers.map(({ label, href }) => (
          <div
            key={label}
            onMouseEnter={() => handleMouseEnter(label)}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <Link
              href={href}
              className="text-[12px] font-medium uppercase tracking-[0.5px] text-charcoal hover:opacity-60 transition-opacity"
            >
              {label}
            </Link>
          </div>
        ))}
        <Link
          href="/collections/new-arrivals"
          className="text-[12px] font-medium uppercase tracking-[0.5px] text-charcoal hover:opacity-60 transition-opacity"
        >
          НОВИНКИ
        </Link>
      </div>

      {/* Desktop mega menu panel */}
      {activeMenu && menuData[activeMenu] && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-black/5 shadow-lg z-50"
          onMouseEnter={handlePanelEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="grid grid-cols-4 gap-10">
              {menuData[activeMenu]!.map((col) => (
                <div key={col.heading}>
                  <h3 className="text-[12px] font-medium uppercase tracking-[0.8px] text-charcoal mb-3">
                    {col.heading}
                  </h3>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setActiveMenu(null)}
                          className="text-[13px] text-charcoal/70 hover:text-charcoal transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu items (rendered inside mobile drawer via prop) */}
      <MegaMenuMobile
        open={mobileMenu}
        onOpen={setMobileMenu}
        onClose={() => setMobileMenu(null)}
        triggers={triggers}
      />
    </>
  );
}

/** Mobile mega menu — rendered as expandable sections */
function MegaMenuMobile({
  open,
  onOpen,
  onClose,
  triggers,
}: {
  open: MenuKey | null;
  onOpen: (key: MenuKey) => void;
  onClose: () => void;
  triggers: MegaMenuTriggerProps[];
}) {
  // This component is used inside the mobile drawer in header.tsx
  // It's exported so header can embed it
  return null; // The mobile rendering is handled directly in the header
}

/** Standalone mobile mega menu content for embedding in header mobile drawer */
export function MobileMegaMenuContent({ onLinkClick }: { onLinkClick: () => void }) {
  const [expanded, setExpanded] = useState<MenuKey | null>(null);

  const triggers: { label: MenuKey; href: string }[] = [
    { label: "МУЖЧИНЫ", href: "/collections/mens" },
    { label: "ЖЕНЩИНЫ", href: "/collections/womens" },
    { label: "РАСПРОДАЖА", href: "/collections/sale" },
  ];

  return (
    <div className="space-y-1">
      {triggers.map(({ label, href }) => {
        const columns = menuData[label];
        if (!columns) {
          // SALE — just a link
          return (
            <Link
              key={label}
              href={href}
              className="block text-nav py-2"
              onClick={onLinkClick}
            >
              {label}
            </Link>
          );
        }

        const isOpen = expanded === label;
        return (
          <div key={label}>
            <button
              onClick={() => setExpanded(isOpen ? null : label)}
              className="flex items-center justify-between w-full text-nav py-2"
            >
              {label}
              <span className="text-[12px] text-warm-gray">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="pl-4 pb-3 space-y-4">
                {columns.map((col) => (
                  <div key={col.heading}>
                    <h4 className="text-[11px] font-medium uppercase tracking-[0.8px] text-warm-gray mb-1.5">
                      {col.heading}
                    </h4>
                    <ul className="space-y-1">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={onLinkClick}
                            className="block text-[13px] text-charcoal/70 hover:text-charcoal py-0.5"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
      <Link
        href="/collections/new-arrivals"
        className="block text-nav py-2"
        onClick={onLinkClick}
      >
        NEW
      </Link>
    </div>
  );
}
