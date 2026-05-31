import type { Collection } from "@/types";

export const collections: Collection[] = [
  {
    id: "mens",
    name: "Мужская мода",
    slug: "mens",
    description:
      "Мужская обувь, одежда и аксессуары от сотен продавцов.",
    heroImage: "/images/hero/collection-hero-1.jpg",
  },
  {
    id: "womens",
    name: "Женская мода",
    slug: "womens",
    description:
      "Женская обувь, одежда и аксессуары от лучших продавцов и независимых дизайнеров.",
    heroImage: "/images/hero/collection-hero-2.jpg",
  },
  {
    id: "new-arrivals",
    name: "Новинки",
    slug: "new-arrivals",
    description: "Свежие поступления от продавцов на маркетплейсе. Откройте первыми.",
    heroImage: "/images/hero/collection-hero-1.jpg",
  },
  {
    id: "best-sellers",
    name: "Бестселлеры",
    slug: "best-sellers",
    description:
      "Самые популярные товары на FashionHero прямо сейчас. Любимые тысячами покупателей.",
    heroImage: "/images/hero/collection-hero-2.jpg",
  },
  {
    id: "sale",
    name: "Распродажа",
    slug: "sale",
    description: " товары со скидкой от продавцов на маркетплейсе. Выгодные предложения, ограниченное время.",
    heroImage: "/images/hero/collection-hero-1.jpg",
  },
  {
    id: "socks",
    name: "Носки",
    slug: "socks",
    description: "Носки от независимых мастеров и известных брендов. Любой стиль, любая цена.",
    heroImage: "/images/hero/collection-hero-1.jpg",
  },
  {
    id: "apparel",
    name: "Одежда",
    slug: "apparel",
    description: "Одежда от сотен продавцов. Стритвир, базовые вещи, экологичная мода и многое другое.",
    heroImage: "/images/hero/collection-hero-2.jpg",
  },
  {
    id: "accessories",
    name: "Аксессуары",
    slug: "accessories",
    description: "Сумки, шапки, украшения и многое другое от продавцов, которых вы не найдёте больше нигде.",
    heroImage: "/images/hero/collection-hero-1.jpg",
  },
  {
    id: "all",
    name: "Все товары",
    slug: "all",
    description: "Просматривайте всё на FashionHero — обувь, одежду и аксессуары от тысяч продавцов.",
    heroImage: "/images/hero/collection-hero-2.jpg",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
