"use client";

import { useEffect, useState } from "react";
import MainPage from "./mainPage";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main>
      <MainPage />
    </main>
  );
}
