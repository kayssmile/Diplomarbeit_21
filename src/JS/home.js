/*  Home & House Estates : index/home
--------------------------------------------------------------*/
/*  Imports
--------------------------------------------------------------*/



import CSS from "../Styles/Stylesheet.scss";
import * as Tools from "./Tools.js";

async function app(){
   await Tools.load_api();
   Tools.load_estates();
   Tools.ruler_state();
   Tools.navigation(0);
   Tools.resize_page();
   window.addEventListener("click", Tools.delegation_estatesmain);
}

app();



document.addEventListener("resize", ()=>{
   console.log(window.screen.width);
   console.log(screen.width);
   console.log(document.width);
})




/*
document.addEventListener("scroll", ()=>{
   console.log(window.pageXOffset);
   console.log(window.pageYOffset);
})

 
TODO LISTE 
  ,  , mapsmarker, 
 , ,*/ 


/*  Estates Main 
-------------------------------------------------------------- */









