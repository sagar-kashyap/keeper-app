import React from "react";

const date=new Date();
let year =date.getFullYear();
function Footer(){
  return <footer>
        <p>copyright {year}</p>
  </footer>
}
export default Footer;
