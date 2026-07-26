"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Tema = "dark" | "light";

interface KonteksTema {
  tema: Tema;
  toggleTema: () => void;
}

const ThemeContext = createContext<KonteksTema | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [tema, setTema] = useState<Tema>("dark");

  useEffect(() => {
    const tersimpan = window.localStorage.getItem("yhoiki-theme") as Tema | null;
    const awal = tersimpan === "light" || tersimpan === "dark" ? tersimpan : "dark";
    setTema(awal);
    document.documentElement.setAttribute("data-theme", awal);
  }, []);

  function toggleTema() {
    setTema((sebelumnya) => {
      const baru = sebelumnya === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", baru);
      window.localStorage.setItem("yhoiki-theme", baru);
      return baru;
    });
  }

  return <ThemeContext.Provider value={{ tema, toggleTema }}>{children}</ThemeContext.Provider>;
}

export function useTema() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTema harus dipakai di dalam ThemeProvider");
  return context;
}
