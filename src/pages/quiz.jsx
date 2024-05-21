import React from "react";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import ProjectDetailsHeader from "../components/quiz-details5-header";
import ProjectDetailsIntroduction from "../components/quiz-details5-introduction";
import ProjectDetailsImages from "../components/quiz-detail5-images";
import ProjectDetailsDescription from "../components/Project-details-description";

import NextProject from "../components/Next-project";
import SmallFooter from "../components/Small-footer";
const Quiz = () => {
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
        projectTitle=" Alpha Quiz Software"
      />
      <SmallFooter />
    </DarkTheme>
  );
};

export default Quiz;
