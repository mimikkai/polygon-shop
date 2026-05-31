import type { Seller } from "@/types";

export const sellers: Seller[] = [
  {
    id: "s1",
    name: "UrbanEdge",
    slug: "urban-edge",
    description: "Стритвир essentials для современного города. Смелый дизайн, премиум-качество.",
    logo: "/images/sellers/urban-edge.svg",
    joinedYear: 2021,
    rating: 4.6,
  },
  {
    id: "s2",
    name: "Bella Donna",
    slug: "bella-donna",
    description: "Элегантная женская мода, созданная с вниманием к каждой детали.",
    logo: "/images/sellers/bella-donna.svg",
    joinedYear: 2021,
    rating: 4.7,
  },
  {
    id: "s3",
    name: "SportPeak",
    slug: "sport-peak",
    description: "Спортивная одежда для серьёзных тренировок, созданная с инженерной точностью.",
    logo: "/images/sellers/sport-peak.svg",
    joinedYear: 2022,
    rating: 4.5,
  },
  {
    id: "s4",
    name: "Modna Szafa",
    slug: "modna-szafa",
    description: "Повседневная мода по доступным ценам. Надёжная основа гардероба.",
    logo: "/images/sellers/modna-szafa.svg",
    joinedYear: 2022,
    rating: 4.8,
  },
  {
    id: "s5",
    name: "Sneaker Lab",
    slug: "sneaker-lab",
    description: "Курированная коллекция кроссовок. Каждая пара отобрана за стиль и комфорт.",
    logo: "/images/sellers/sneaker-lab.svg",
    joinedYear: 2023,
    rating: 4.4,
  },
  {
    id: "s6",
    name: "EcoThreads",
    slug: "eco-threads",
    description: "Экологичная мода без компромиссов в стиле. Органические материалы, честное производство.",
    logo: "/images/sellers/eco-threads.svg",
    joinedYear: 2023,
    rating: 4.9,
  },
  {
    id: "s7",
    name: "Classic Fit",
    slug: "classic-fit",
    description: "Умный кэжуал для мужчин. Чистые линии, качественные ткани, повседневная элегантность.",
    logo: "/images/sellers/classic-fit.svg",
    joinedYear: 2023,
    rating: 4.3,
  },
  {
    id: "s8",
    name: "Marta Handmade",
    slug: "marta-handmade",
    description: "Обувь и аксессуары ручной работы. Каждая пара уникальна.",
    logo: "/images/sellers/marta-handmade.svg",
    joinedYear: 2025,
    rating: 4.2,
  },
  {
    id: "s9",
    name: "VintageFind",
    slug: "vintage-find",
    description: "Модные сокровища с историей. Уникальные вещи, которые расскажут свою историю.",
    logo: "/images/sellers/vintage-find.svg",
    joinedYear: 2025,
    rating: 4.0,
  },
  {
    id: "s10",
    name: "DropStyle",
    slug: "drop-style",
    description: "Модный тренд по выгодным ценам. Новые коллекции каждую неделю.",
    logo: "/images/sellers/drop-style.svg",
    joinedYear: 2025,
    rating: 3.9,
  },
  {
    id: "s11",
    name: "Kasia Creates",
    slug: "kasia-creates",
    description: "Аксессуары и украшения ручной работы. Создано с любовью.",
    logo: "/images/sellers/kasia-creates.svg",
    joinedYear: 2026,
    rating: 4.1,
  },
  {
    id: "s12",
    name: "FirstStep",
    slug: "first-step",
    description: "Новый продавец на FashionHero. Базовые вещи для повседневной носки.",
    logo: "/images/sellers/first-step.svg",
    joinedYear: 2026,
    rating: 0,
  },
];

export function getSeller(slug: string): Seller | undefined {
  return sellers.find((s) => s.slug === slug);
}

export function getSellerById(id: string): Seller | undefined {
  return sellers.find((s) => s.id === id);
}

export function getAllSellers(): Seller[] {
  return sellers;
}
