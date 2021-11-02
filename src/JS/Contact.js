/*  Immo Application : Kontakt
-------------------------------------------------------------- */



/*  Imports
-------------------------------------------------------------- */

import CSS from "../Styles/Stylesheet.scss";
import * as Tools from "./Tools.js";


let nav_contact = document.querySelector(".nav__select");
nav_contact.children[2].firstElementChild.firstElementChild.style.color = "white";
Tools.navigation(2);
Tools.resize_page();
Tools.initMap({lat:parseFloat(47.17871), lng:parseFloat(9.45129)}, "contact-main__location--map");



