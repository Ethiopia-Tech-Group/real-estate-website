"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/hero.webp",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/hero2.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/hero1.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/hero3.webp",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/hero4.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/hero4.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/hero5.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "/hero6.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/hero7.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/hero8.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "/hero9.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "/hero10.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "/hero11.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "/hero12.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "/hero13.jpg",
  },
];
