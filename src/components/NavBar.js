import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

const linkItems = links.map((link, index) => {
    return <a key={index} href={"#"+link}>{link}</a>;
  })
  return <nav>{linkItems}</nav>;
}
export default NavBar;
