import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О нас — FashionHero",
  description: "Модный маркетплейс, объединяющий продавцов и покупателей.",
};

const values = [
  {
    title: "Поддержка продавцов",
    description:
      "Мы даём независимым продавцам и известным брендам инструменты для работы с миллионами покупателей моды. Каждый продавец важен — от маленьких студий до мировых брендов.",
  },
  {
    title: "Курированные находки",
    description:
      "Наш маркетплейс объединяет разнообразные стили и ценовые категории. Мы помогаем покупателям находить продавцов, которых они бы никогда не нашли сами — и помогаем продавцам находить свою аудиторию.",
  },
  {
    title: "Честность для всех",
    description:
      "Прозрачные комиссии, без скрытых платежей, равная видимость. Мы верим, что маркетплейс работает лучше всего, когда у каждого продавца есть честный шанс достучаться до покупателей.",
  },
];

const timeline = [
  { year: "2020", event: "Основан с видением: модный маркетплейс, где каждый продавец получает справедливый шанс." },
  { year: "2021", event: "Привлечены первые 200 продавцов. Запуск с обувью, одеждой и аксессуарами." },
  { year: "2022", event: "Достигнуты 1000 продавцов и 500К активных покупателей. Представлена аналитика для продавцов." },
  { year: "2023", event: "Расширение до 4000+ продавцов. Выручка выросла на 28% год к году." },
  { year: "2024", event: "Новые вызовы: снижение маржи, усиление конкуренции. Время для перемен." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/hero/hero-3.jpg"
          alt="Обувь FashionHero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <p className="text-[11px] font-medium uppercase tracking-[1px] mb-4 text-white/70">
            НАША ИСТОРИЯ
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight max-w-2xl">
            Где продавцы растут
            <br />
            а покупатели находят.
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-warm-gray mb-6">
          НАША МИССИЯ
        </p>
        <p className="text-xl md:text-2xl leading-relaxed text-charcoal">
          FashionHero начался с простой идеи: модой не должны управлять несколько крупных игроков. Мы создали маркетплейс, где независимые дизайнеры соревнуются наравне с мировыми брендами — и где покупатели находят стили, которые не найдут больше нигде.
        </p>
      </section>

      {/* Values */}
      <section className="bg-cream-light py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[11px] font-medium uppercase tracking-[1px] text-warm-gray mb-10 text-center">
            НАШИ ЦЕННОСТИ
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="text-lg font-medium mb-3 text-charcoal">{value.title}</h3>
                <p className="text-sm leading-relaxed text-warm-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Люди бегут в обуви FashionHero"
          fill
          className="object-cover"
        />
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-warm-gray mb-10 text-center">
          НАШ ПУТЬ
        </p>
        <div className="space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-6 items-start">
              <span className="text-2xl font-light text-charcoal/30 w-16 flex-shrink-0">
                {item.year}
              </span>
              <p className="text-sm leading-relaxed text-charcoal pt-2 border-t border-cream-dark flex-1">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-white py-20 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[1px] text-white/50 mb-4">
          ГОТОВЫ СДЕЛАТЬ ШАГ?
        </p>
        <h2 className="text-3xl md:text-4xl font-light mb-8">
          Начните исследование.
        </h2>
        <div className="flex gap-4 justify-center">
          <Link href="/collections/mens" className="btn-cta bg-white text-charcoal hover:bg-white/90">
            МУЖСКАЯ ОБУВЬ
          </Link>
          <Link href="/collections/womens" className="btn-cta bg-white text-charcoal hover:bg-white/90">
            ЖЕНСКАЯ ОБУВЬ
          </Link>
        </div>
      </section>
    </div>
  );
}
