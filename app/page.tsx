"use client";
import Hero from "@/features/home/components/Hero";
import Dossier from "@/features/home/components/Dossier";
import Coyuntura from "@/features/home/components/Coyuntura";
import Politica from "@/features/home/components/Politica";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Dossier />
      <Coyuntura />
      <Politica />
    </>
  );
}