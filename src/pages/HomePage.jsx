import React from "react";
import { FindDreamHome } from "../components/FindDreamHome";
import { Hero } from "../components/Hero";
import { HowItWork } from "../components/HowItWork";
import { Header } from "./../components/Header";
import { MostTrending } from "../components/MostTrending";
import { BestDeal } from "../components/BestDeal";
import { Footer } from "../components/Footer";
export const HomePage = () => (
  <>
    <Header />
    <Hero />
    <HowItWork />
    <FindDreamHome />
    <MostTrending />
    <BestDeal />
    <Footer />
  </>
);
