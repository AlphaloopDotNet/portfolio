import React from "react";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import ProjectDetailsHeader from "../components/weddings-details-header";
import ProjectDetailsIntroduction from "../components/weddings-details-introduction";
import ProjectDetailsImages from "../components/weddings-details-images";
import ProjectDetailsDescription from "../components/Project-details-description";

import NextProject from "../components/Next-project";
import SmallFooter from "../components/Small-footer";
const WeddingS = () => {
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
      {/* <ProjectDetailsDescription /> */}
     
      <NextProject
        projectImage="/img/portfolio/project2/tour.jpg"
        projectTitle="The Wedding stellars "
      />
      <SmallFooter />
    </DarkTheme>
  );
};

export default WeddingS;
