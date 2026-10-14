import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articleRegistry";
import { HUB_HERO } from "../images/assets";
import SectionHubPage from "./SectionHubPage";

export default function PlayasHub() {
  const cards = articles.filter((a) => a.slug === "mejores-playas-gijon" || a.category === "playas");
  const list = cards.length ? cards : articles.filter((a) => a.slug === "mejores-playas-gijon");
  const playasHero = HUB_HERO["/playas-gijon"];

  return (
    <SectionHubPage
      title="Playas de Gijón: San Lorenzo, Poniente y más"
      metaTitle="Playas Gijón | San Lorenzo, Poniente, Arbeyal y comparativa"
      metaDescription="Guía de playas en Gijón: arena urbana, servicios, oleaje y consejos por época del año. Turismo Gijón y costa asturiana para familias y surf."
      canonicalPath="/playas-gijon"
      breadcrumbTrail={[{ label: "Playas" }]}
      keywords={["playas Gijón", "San Lorenzo", "Poniente", "Arbeyal", "playas Asturias"]}
      heroImage={playasHero}
      cards={list}
      extra={
        <p className="hub-extra">
          Artículos relacionados: <Link to="/que-ver-gijon-gratis">qué ver gratis</Link>,{" "}
          <Link to="/gijon-con-ninos">planes con niños</Link> y <Link to="/gijon-cuando-llueve">si llueve</Link>.
        </p>
      }
    />
  );
}
