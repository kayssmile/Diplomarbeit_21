/*  Home & House Estates : index/home
--------------------------------------------------------------*/
/*  Imports
--------------------------------------------------------------*/



import CSS from "../Styles/Stylesheet.scss";
import * as Tools from "./Tools.js";


await Tools.load_api();
Tools.load_estates();
Tools.ruler_state();
Tools.navigation(0);
Tools.resize_page();
window.addEventListener("click", Tools.delegation_estatesmain);

/* 
document.addEventListener("scroll", ()=>{
   console.log(window.pageXOffset);
   console.log(window.pageYOffset);
})


TODO LISTE 
 , Scrollto , createitems -> 1funktion , mapsmarker
 , html email pattern,  sortierung A-Z , abkuerzungen fuer zu lange items;title*/ 


/*  Estates Main 
-------------------------------------------------------------- */









