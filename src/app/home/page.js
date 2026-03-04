"use client";
import { useRevealer } from "@/hooks/useRevealer";
import HomeView from "./HomeView";

export default function HomePage() {
  useRevealer();
  return <HomeView />;
}
