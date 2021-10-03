/* Immo Application  */ 





/* Imports  */

import * as Tools from "./Tools.js";
import CSS from "../styles/stylesheet.scss";



// Navigation : Mobile Version 

var nav = document.querySelector(".nav");
var ham_mobile = document.querySelector(".nav__ham");
var close_mobile = document.querySelector(".nav__close");
var nav_menu_mobile = document.querySelector(".nav_menu");


ham_mobile.addEventListener("click", menu_nav_open);
close_mobile.addEventListener("click", menu_nav_close);


function menu_nav_open(){

    nav.style.opacity = "1";
    ham_mobile.style.display = "none";
    close_mobile.style.display = "inline-block";
    nav_menu_mobile.style.display = "block";

}

function menu_nav_close(){

    nav.style.opacity = "0.85";
    ham_mobile.style.display = "inline-block";
    close_mobile.style.display = "none";
    nav_menu_mobile.style.display = "none";

}

 
