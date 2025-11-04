"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Modern Bole Loft",
    link: "listing/1",
    thumbnail: "/hero.webp",
  },
  {
    title: "Luxury Kazanchis Penthouse",
    link: "listing/2",
    thumbnail: "/hero2.jpg",
  },
  {
    title: "Charming Piassa Villa",
    link: "listing/3",
    thumbnail: "/hero1.jpg",
  },
  {
    title: "Spacious CMC Apartment",
    link: "listing/4",
    thumbnail: "/hero3.webp",
  },
  {
    title: "Trendy Sarbet Studio",
    link: "listing/5",
    thumbnail: "/hero4.jpg",
  },
  {
    title: "Cozy Gerji Apartment",
    link: "listing/6",
    thumbnail: "/hero4.jpg",
  },
  {
    title: "Premium Old Airport Loft",
    link: "listing/7",
    thumbnail: "/hero5.jpg",
  },
  {
    title: "Lake View Villa",
    link: "listing/8",
    thumbnail: "/hero6.jpg",
  },
  {
    title: "Urban Ayat Townhouse",
    link: "listing/9",
    thumbnail: "/hero7.jpg",
  },
  {
    title: "Elegant Megenagna Condo",
    link: "listing/10",
    thumbnail: "/hero8.jpg",
  },
  {
    title: "Green Hills Villa",
    link: "listing/11",
    thumbnail: "/hero9.jpg",
  },
  {
    title: "Executive Summit Apartment",
    link: "listing/12",
    thumbnail: "/hero10.jpg",
  },
  {
    title: "Sunset Hillside Villa",
    link: "listing/13",
    thumbnail: "/hero11.jpg",
  },
  {
    title: "Luxury Bishoftu Retreat",
    link: "listing/14",
    thumbnail: "/hero12.jpg",
  },
  {
    title: "Smart Realty HQ",
    link: "listing/15",
    thumbnail: "/hero13.jpg",
  },
];
