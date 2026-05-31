"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

interface StoredOrder {
  id: string;
  date: string;
  firstName: string;
  lastName: string;
  email: string;
  items: { productName: string; colorName: string; size: number; quantity: number; price: number }[];
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
}

const STORAGE_KEY = "fashionhero-orders";

const mockOrders = [
  { id: "SF-10042", date: "15 марта 2026", status: "Доставлен", total: 592 },
  { id: "SF-10038", date: "22 февраля 2026", status: "Доставлен", total: 940 },
  { id: "SF-10031", date: "8 января 2026", status: "Доставлен", total: 480 },
];

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [recentOrders, setRecentOrders] = useState<StoredOrder[]>([]);

  useEffect(() => {
    if (!user) {
      router.push("/account/login");
    }
  }, [user, router]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setRecentOrders(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <nav className="text-[11px] text-warm-gray mb-8 tracking-wide">
        <Link href="/" className="hover:text-charcoal transition-colors">Главная</Link>
        <span className="mx-1.5">/</span>
        <span className="text-charcoal">Аккаунт</span>
      </nav>

      <h1 className="text-2xl font-light text-charcoal mb-2">
        Здравствуйте, {user.firstName}
      </h1>
      <p className="text-[13px] text-warm-gray mb-10">
        Добро пожаловать в ваш аккаунт FashionHero.
      </p>

      <section className="mb-10">
        <h2 className="text-[12px] font-medium uppercase tracking-[0.8px] text-charcoal mb-4 pb-2 border-b border-black/10">
          История заказов
        </h2>
        <div className="space-y-3">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between py-3 border-b border-black/5">
              <div>
                <p className="text-[13px] font-medium text-charcoal">{order.id}</p>
                <p className="text-[12px] text-warm-gray">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="text-[13px] font-medium text-charcoal">{order.total.toFixed(0)} ₽</p>
                <p className="text-[11px] text-green-700 font-medium">{order.status}</p>
              </div>
            </div>
          ))}
          {mockOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between py-3 border-b border-black/5">
              <div>
                <p className="text-[13px] font-medium text-charcoal">{order.id}</p>
                <p className="text-[12px] text-warm-gray">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="text-[13px] font-medium text-charcoal">{order.total.toFixed(0)} ₽</p>
                <p className="text-[11px] text-green-700 font-medium">{order.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/10">
          <h2 className="text-[12px] font-medium uppercase tracking-[0.8px] text-charcoal">
            Данные аккаунта
          </h2>
          <button className="text-[11px] text-warm-gray underline hover:text-charcoal transition-colors">
            Редактировать
          </button>
        </div>
        <div className="space-y-1.5 text-[13px] text-charcoal/80">
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.email}</p>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/10">
          <h2 className="text-[12px] font-medium uppercase tracking-[0.8px] text-charcoal">
            Сохранённые адреса
          </h2>
          <button className="text-[11px] text-warm-gray underline hover:text-charcoal transition-colors">
            Добавить адрес
          </button>
        </div>
        <div className="text-[13px] text-charcoal/80 space-y-0.5">
          <p className="font-medium text-charcoal">{user.firstName} {user.lastName}</p>
          <p>ул. Экологическая, 123</p>
          <p>Москва, 101000</p>
          <p>Россия</p>
        </div>
      </section>

      <button
        onClick={() => {
          logout();
          router.push("/");
        }}
        className="btn-cta-outline text-[12px] w-full"
      >
        ВЫЙТИ
      </button>
    </div>
  );
}