import React from "react";
import RootLayout from "../app/layout";
import Navbar from "./NavBar";
import HeaderSimple from "./headerSimple";
import Footer from "./Footer";
import Pictos from "./Pictos"
import Cards from "./Cards";
import Section from "./Section";
import {cards, cards2, sections, listesActions } from "./site"
import ListeActionsGauche from "./ListeActionsGauche"
const Home = () => {
  // Dynamic metadata for the home page
  const pageTitle = "Accueil";
  const pageDescription = "Bienvenue sur le site de PRO PEINTURE";

  // DÃ©clarer les photos dans un tableau d&apos;objets
  const photos = [];

  const backgroundColor = "bg-teal-500";

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <HeaderSimple photos={photos} title={pageTitle}/>
      {/* <Pictos /> */}

      <Section section={sections[0]} />

      <ListeActionsGauche  actions={listesActions[0].actions} listeTitle={listesActions[0].title} listeSubTitle={listesActions[0].subTitle} photo={listesActions[0].photo} gauche={true} bgColor="bg-myorange-600"/>
    <ListeActionsGauche actions={listesActions[1].actions} listeTitle={listesActions[1].title} listeSubTitle={listesActions[1].subTitle} photo={listesActions[1].photo} gauche={false}/>
    <ListeActionsGauche actions={listesActions[2].actions} listeTitle={listesActions[2].title} listeSubTitle={listesActions[2].subTitle} photo={listesActions[2].photo} gauche={true} bgColor="bg-myorange-600"/>
    {/* <ListeActionsGauche actions={listesActions[3].actions} listeTitle={listesActions[3].title} listeSubTitle={listesActions[3].subTitle} photo={listesActions[3].photo} gauche={false}/>
    <ListeActionsGauche actions={listesActions[4].actions} listeTitle={listesActions[4].title} listeSubTitle={listesActions[4].subTitle} photo={listesActions[4].photo} gauche={true} bgColor="bg-myorange-600"/>
    */}



      {/* <div className="bg-white dark:bg-neutral-900 dark:text-gold-500">
        <Cards cards={cards} buttonColor={backgroundColor} />
      </div> */}

      <Section section={sections[1]} />
      
      {/* <div className="bg-white dark:bg-neutral-900 dark:text-gold-500">
        <Cards cards={cards2} buttonColor={backgroundColor} />
      </div> */}


      <Footer />
    </RootLayout>
  );
};

export default Home;
