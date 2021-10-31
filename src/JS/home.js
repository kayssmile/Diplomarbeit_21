/*  Home & House Estates : index/home
--------------------------------------------------------------*/
/*  Imports
--------------------------------------------------------------*/



import CSS from "../Styles/Stylesheet.scss";
import * as Tools from "./Tools.js";



let nav_aktuelles = document.querySelector(".nav__select");
nav_aktuelles.children[0].firstElementChild.firstElementChild.style.color = "white";




await Tools.load_api();
Tools.load_estates();
Tools.ruler_state();
Tools.navigation();
Tools.pageresize(); // noch testen


/* 
document.addEventListener("scroll", ()=>{
   console.log(window.pageXOffset);
   console.log(window.pageYOffset);
})


TODO LISTE 
Navigation , Scrollto , IFreszie reload
Stylesheet imports anpassen , html email pattern, estate details actuals*/


/*  Estates Main 
-------------------------------------------------------------- */

/* 
var filters = [
    {select_what : "Alle Objekte"},
    {select_where : "Alle Orte"},
    {select_sort: "Sortierung"},
    {ruler: 1 }
]
*/

var filters = {
    select_what : "Alle Objekte",
    select_where : "Alle Orte",
    select_sort: "Sortierung",
    ruler: 1 
};


// console.log(filters[0]);


window.addEventListener("click", Tools.delegation_estatesmain);




