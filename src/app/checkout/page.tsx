"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";

interface OrderData {
  id: string;
  date: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  region: string;
  zip: string;
  country: string;
  items: {
    productName: string;
    colorName: string;
    size: number;
    quantity: number;
    price: number;
  }[];
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
}

const STORAGE_KEY = "fashionhero-orders";

function saveOrder(order: OrderData) {
  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    const orders: OrderData[] = existing ? JSON.parse(existing) : [];
    orders.unshift(order);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  } catch {
    // ignore
  }
}

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const [form, setForm] = useState({
    firstName: "Иван",
    lastName: "Петров",
    email: "ivan@example.com",
    address: "ул. Тверская, д. 15, кв. 42",
    city: "Москва",
    region: "Московская обл.",
    zip: "101000",
    country: "Россия",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal >= 299 ? 0 : 19.9;
  const total = subtotal + shipping;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const id = `FH-${Date.now().toString(36).toUpperCase()}`;
    const order: OrderData = {
      id,
      date: new Date().toLocaleDateString("ru-RU"),
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      address: form.address,
      city: form.city,
      region: form.region,
      zip: form.zip,
      country: form.country,
      items: items.map((item) => ({
        productName: item.product.name,
        colorName: item.color.name,
        size: item.size,
        quantity: item.quantity,
        price: item.product.price,
      })),
      subtotal,
      shipping,
      total,
      status: "Оформлен",
    };

    saveOrder(order);
    clearCart();
    setOrderNumber(id);
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <main className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-light text-charcoal mb-3">Заказ оформлен!</h1>
        <p className="text-sm text-warm-gray mb-2">
          Номер заказа: <span className="font-medium text-charcoal">{orderNumber}</span>
        </p>
        <p className="text-sm text-warm-gray mb-8">
          Мы отправим подтверждение на {form.email}.
        </p>
        <div className="bg-cream-light rounded-lg p-6 text-left mb-8">
          <h2 className="text-[12px] font-medium uppercase tracking-[0.8px] text-charcoal mb-4">
            Детали заказа
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-warm-gray">Получатель</span>
              <span className="text-charcoal">{form.firstName} {form.lastName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-warm-gray">Адрес доставки</span>
              <span className="text-charcoal text-right">{form.address}, {form.city}, {form.zip}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-warm-gray">Статус</span>
              <span className="text-green-700 font-medium">Оформлен</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-cta">
            НА ГЛАВНУЮ
          </Link>
          <Link href="/account" className="btn-cta-outline">
            МОИ ЗАКАЗЫ
          </Link>
        </div>
      </main>
    );
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="text-center py-16">
          <p className="text-sm text-warm-gray mb-6">Ваша корзина пуста.</p>
          <Link href="/" className="btn-cta">
            ПРОДОЛЖИТЬ ПОКУПКИ
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <form onSubmit={handleSubmit}>
        <nav className="mb-8">
          <ol className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.6px] text-warm-gray">
            <li>
              <Link href="/" className="hover:text-charcoal transition-colors">
                Главная
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal">Оформление заказа</li>
          </ol>
        </nav>

        <h1 className="text-[32px] font-normal text-charcoal mb-8">Оформление заказа</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-16">
          <div>
            <section className="mb-10">
              <h2 className="text-[12px] font-medium uppercase tracking-[0.8px] text-charcoal mb-5 pb-2 border-b border-border">
                ИНФОРМАЦИЯ О ДОСТАВКЕ
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-warm-gray mb-1.5">Имя</label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full border border-border px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Иван"
                  />
                </div>
                <div>
                  <label className="block text-xs text-warm-gray mb-1.5">Фамилия</label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full border border-border px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Петров"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-warm-gray mb-1.5">Электронная почта</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-border px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-warm-gray mb-1.5">Адрес</label>
                  <input
                    name="address"
                    type="text"
                    required
                    value={form.address}
                    onChange={handleChange}
                    className="w-full border border-border px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Улица, дом, квартира"
                  />
                </div>
                <div>
                  <label className="block text-xs text-warm-gray mb-1.5">Город</label>
                  <input
                    name="city"
                    type="text"
                    required
                    value={form.city}
                    onChange={handleChange}
                    className="w-full border border-border px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Город"
                  />
                </div>
                <div>
                  <label className="block text-xs text-warm-gray mb-1.5">Область</label>
                  <input
                    name="region"
                    type="text"
                    value={form.region}
                    onChange={handleChange}
                    className="w-full border border-border px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Область"
                  />
                </div>
                <div>
                  <label className="block text-xs text-warm-gray mb-1.5">Индекс</label>
                  <input
                    name="zip"
                    type="text"
                    required
                    value={form.zip}
                    onChange={handleChange}
                    className="w-full border border-border px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-charcoal transition-colors"
                    placeholder="Индекс"
                  />
                </div>
                <div>
                  <label className="block text-xs text-warm-gray mb-1.5">Страна</label>
                  <input
                    type="text"
                    className="w-full border border-border px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-charcoal transition-colors"
                    defaultValue="Россия"
                    readOnly
                  />
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-[12px] font-medium uppercase tracking-[0.8px] text-charcoal mb-5 pb-2 border-b border-border">
                ОПЛАТА
              </h2>
              <div className="bg-cream-light px-6 py-8 text-center rounded">
                <svg
                  className="mx-auto h-10 w-10 text-charcoal/30 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                <p className="text-sm text-charcoal font-medium mb-1">Демо-оплата</p>
                <p className="text-xs text-warm-gray">Заказ будет сохранён без реальной оплаты</p>
              </div>
            </section>

            <button type="submit" className="btn-cta w-full sm:w-auto sm:min-w-[280px]">
              ОФОРМИТЬ ЗАКАЗ
            </button>
          </div>

          <div>
            <div className="bg-cream-light p-6 sticky top-20">
              <h2 className="text-[12px] font-medium uppercase tracking-[0.8px] text-charcoal mb-5 pb-2 border-b border-cream-dark">
                ИТОГ ЗАКАЗА
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div
                      className="w-16 h-16 rounded flex-shrink-0"
                      style={{
                        background: `radial-gradient(ellipse at 50% 55%, ${item.color.hex}44 0%, ${item.color.hex}22 35%, #ece9e2 65%)`,
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-medium uppercase tracking-wide truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-warm-gray">
                        {item.color.name} / Размер {item.size}
                      </p>
                      <p className="text-xs text-warm-gray">Кол-во: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium text-charcoal">
                       {(item.product.price * item.quantity).toFixed(0)} ₽
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-4 border-t border-cream-dark">
                <div className="flex justify-between text-sm">
                  <span className="text-warm-gray">Подытог</span>
                  <span className="font-medium">{subtotal.toFixed(0)} ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-warm-gray">Доставка</span>
                  <span className="font-medium">
                    {shipping === 0 ? "Бесплатно" : `${shipping.toFixed(2)} ₽`}
                  </span>
                </div>
                <div className="flex justify-between text-sm pt-3 border-t border-cream-dark mt-3">
                  <span className="font-medium text-charcoal">Итого</span>
                  <span className="font-medium text-charcoal text-lg">{total.toFixed(2)} ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}