/*  Home & House Estates : index/home
--------------------------------------------------------------*/
/*  Imports
--------------------------------------------------------------*/



import CSS from "../Styles/Stylesheet.scss";
import * as Tools from "./Tools.js";

async function load_api(){
   await Tools.load_api();
}

await load_api();

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
  ,  , mapsmarker, haus oder Wohnung
 , html email pattern,  sortierung A-Z ,*/ 


/*  Estates Main 
-------------------------------------------------------------- */









