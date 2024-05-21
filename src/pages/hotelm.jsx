import React from 'react'
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import ProjectDetails2Header from "../components/hotelm-details8-header";
import ProjectDetails2Introduction from "../components/hotelm-details8-introduction";
import ProjectDetails2Images from "../components/hotelm-details8-images";
import ProjectDetailsDescription from "../components/Project-details-description";
import ProjectDetailsVideo from "../components/Project-details-video";
import NextProject from "../components/Next-project";
import SmallFooter from "../components/Small-footer";


const hotelm = () => {
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
          projectImage="/img/portfolio/project1/7rays.jpg"
          projectTitle="Hotel Management System."
        />
        <SmallFooter />
      </DarkTheme>
    );
}

export default hotelm
