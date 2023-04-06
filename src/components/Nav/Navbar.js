import { useState } from "react";
import Logo from "../../images/logo/logo.svg";
import NavList from "./NavList";
import { Link } from "react-router-dom";

function Navbar() {
 
  const [sticky, ] = useState(false);

 

 


  // logo
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  
  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-black" : ""
        }`}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo_img"
            onClick={goTop}
            className="w-full h-auto"
          />
        </Link>
        <div className="navlist-nav">
          <NavList />
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;
