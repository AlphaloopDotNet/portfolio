import React from "react";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import ProjectDetailsHeader from "../components/tourbazzar-details3-header";
import ProjectDetailsIntroduction from "../components/tourbazzar-details3-introduction";
import ProjectDetailsImages from "../components/tourbazzar-details3-images";
import ProjectDetailsDescription from "../components/Project-details-description";

import NextProject from "../components/Next-project";
import SmallFooter from "../components/Small-footer";
const tourbazzar = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else
      {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ProjectDetailsHeader />
      <ProjectDetailsIntroduction />
      <ProjectDetailsImages />
      <ProjectDetailsDescription />
     
      <NextProject
        projectImage="/img/portfolio/project2/tour_logo.png"
        projectTitle="Tour Bazaar Website"
      />
      <SmallFooter />
    </DarkTheme>
  );
};

export default tourbazzar;
