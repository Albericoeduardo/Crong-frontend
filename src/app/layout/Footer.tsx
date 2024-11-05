"use client";
import React from "react";
import { AnimatedTooltip } from "../../../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Albérico Eduardo",
    designation: "Desenvolvedor FullStack",
    image:
      "/Alberico.jpeg",
  },
  {
    id: 2,
    name: "André Alves",
    designation: "Desenvolvedor Backend",
    image:
      "/Andre.jpg",
  },
  {
    id: 3,
    name: "Leonardo Vinícius",
    designation: "Gerente de Projetos",
    image:
      "/Leonardo.jpg",
  },
  {
    id: 4,
    name: "Matheus Suarte",
    designation: "Desenvolvedor",
    image:
      "/Suarte.jpeg",
  }
];

export function Footer() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-fit bg-gray-500 px-8 py-2 rounded-2xl">
      <AnimatedTooltip items={people} />
    </div>
  );
}
