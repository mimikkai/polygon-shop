"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }
    await login(email, password);
    router.push("/account");
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <nav className="text-[11px] text-warm-gray mb-8 tracking-wide">
        <Link href="/" className="hover:text-charcoal transition-colors">Главная</Link>
        <span className="mx-1.5">/</span>
        <Link href="/account" className="hover:text-charcoal transition-colors">Аккаунт</Link>
        <span className="mx-1.5">/</span>
        <span className="text-charcoal">Вход</span>
      </nav>

      <h1 className="text-2xl font-light text-charcoal mb-8 text-center">Вход</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <p className="text-red-600 text-[13px] text-center">{error}</p>
        )}
        <div>
          <label htmlFor="email" className="block text-[11px] font-medium uppercase tracking-[0.8px] text-charcoal mb-1.5">
            Электронная почта
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-black/15 rounded px-3 py-2.5 text-[14px] text-charcoal outline-none focus:border-charcoal transition-colors"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-[11px] font-medium uppercase tracking-[0.8px] text-charcoal mb-1.5">
            Пароль
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-black/15 rounded px-3 py-2.5 text-[14px] text-charcoal outline-none focus:border-charcoal transition-colors"
            placeholder="Введите пароль"
          />
        </div>
        <button type="submit" className="btn-cta w-full text-[12px]">
          ВОЙТИ
        </button>
      </form>

      <p className="text-center text-[13px] text-warm-gray mt-8">
        Нет аккаунта?{" "}
        <Link href="/account/register" className="text-charcoal underline hover:opacity-60 transition-opacity">
          Создать
        </Link>
      </p>
    </div>
  );
}
