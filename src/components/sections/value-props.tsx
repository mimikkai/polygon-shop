const props = [
  {
    label: "ОТКРЫТИЯ",
    title: "Тысячи продавцов, один поиск",
    description:
      "От ведущих брендов до независимых дизайнеров — найдите именно то, что ищете, среди тысяч проверенных продавцов.",
  },
  {
    label: "ДОВЕРИЕ",
    title: "Проверенные продавцы, настоящие отзывы",
    description:
      "Каждый продавец на FashionHero проходит проверку. Настоящие отзывы клиентов и наша программа Pro-продавцов помогают покупать с уверенностью.",
  },
  {
    label: "РАЗНООБРАЗИЕ",
    title: "От уличного стиля до экологичной моды",
    description:
      "Премиальные бренды, винтажные находки, авторские оригиналы, базовые вещи на каждый день. Какой бы ни был ваш стиль — здесь это есть.",
  },
];

export function ValueProps() {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-16 bg-cream-light">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
        {props.map((prop) => (
          <div key={prop.label}>
            <p className="text-[11px] font-medium uppercase tracking-[0.8px] text-warm-gray mb-2">
              {prop.label}
            </p>
            <h3 className="text-lg font-normal text-charcoal mb-3">{prop.title}</h3>
            <p className="text-sm text-warm-gray leading-relaxed">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
