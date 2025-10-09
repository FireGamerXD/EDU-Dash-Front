import { HerosecHome } from "./components/herosectionHome";
import { HomeCards } from "./components/home_cards_section";
import { StatistiquesHome } from "./components/StatistiquesHome";
import { Fonctionnalités } from "./components/Fonctionnalités";
import { Contact } from "./components/Contact";
import { Témoignages } from "./components/Témoignages";

export const HomePage = () => {
    return (
        <>
            <HerosecHome />
            <HomeCards />
            <StatistiquesHome />
            <Fonctionnalités />
            <Témoignages />
            <Contact />
        </>
    );
}
