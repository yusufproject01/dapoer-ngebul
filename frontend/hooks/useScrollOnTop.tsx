"use client";

import { useEffect } from "react";

export default function UseScrollOnTop() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return null;
}
