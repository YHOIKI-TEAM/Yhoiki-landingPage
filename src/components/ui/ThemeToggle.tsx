"use client";

import { useTema } from "@/context/ThemeContext";
import { IconSun, IconMoon } from "./Icons";

export default function ThemeToggle() {
  const { tema, toggleTema } = useTema();
  const isDark = tema === "dark";

  return (
    <button
      onClick={toggleTema}
      aria-label={isDark ? "Aktifkan tema terang" : "Aktifkan tema gelap"}
      aria-pressed={isDark}
      className="relative inline-flex items-center w-[52px] h-[28px] rounded-full border transition-colors duration-300 shrink-0"
      style={{
        borderColor: "var(--border-medium)",
        backgroundColor: isDark ? "var(--bg-soft-tint)" : "var(--bg-subtle)",
      }}
    >
      <span
        className="absolute top-[2px] flex items-center justify-center w-[22px] h-[22px] rounded-full transition-all duration-300"
        style={{
          left: isDark ? "26px" : "2px",
          backgroundColor: "var(--yhoiki-green)",
          color: "var(--text-on-brand)",
        }}
      >
        {isDark ? <IconMoon size={13} strokeWidth={2} /> : <IconSun size={13} strokeWidth={2} />}
      </span>
    </button>
  );
}