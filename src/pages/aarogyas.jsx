import React from 'react'
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import ProjectDetails2Header from "../components/aarogyas-details4-header";
import ProjectDetails2Introduction from "../components/aarogyas-details4-introduction";
import ProjectDetails2Images from "../components/aarogyas-details4-images";
import NextProject from "../components/Next-project";
import SmallFooter from "../components/Small-footer";


const aarogyas = () => {
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
        } else {
          navbar.classList.remove("nav-scroll");
        }
      });
    }, [navbarRef]);
    return (
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        <ProjectDetails2Header />
        <ProjectDetails2Introduction />
        <ProjectDetails2Images />
        {/* <ProjectDetailsDescription /> */}
       
        <NextProject
          projectImage="/img/logo"
          projectTitle="Aarogyas World Of Wellness."
        />
        <SmallFooter />
      </DarkTheme>
    );
}

export default aarogyas
