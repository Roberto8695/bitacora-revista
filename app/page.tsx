"use client";
import Hero from "@/features/home/components/Hero";
import Dossier from "@/features/home/components/Dossier";
import Coyuntura from "@/features/home/components/Coyuntura";
import Politica from "@/features/home/components/Politica";
import Cultura from "@/features/home/components/Cultura";
import Entrevista from "@/features/home/components/Entrevista";
import Resenas from "@/features/home/components/Resenas";
import CtaEditorial from "@/features/home/components/CtaEditorial";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Dossier />
      <Coyuntura />
      <Politica />
      <Cultura />
      <Entrevista />
      <Resenas />
      <CtaEditorial />
    </>
  );
}