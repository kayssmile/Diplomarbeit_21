/*  Home & House Estates : Home Application
--------------------------------------------------------------*/
/*  Imports
--------------------------------------------------------------*/

import CSS from "../Styles/Stylesheet.scss";
import * as Tools from "./Tools.js";

/*  App
--------------------------------------------------------------*/

async function app(){
   await Tools.load_api();
   Tools.load_estates();
   Tools.load_estates_newest();
   Tools.ruler_state();
   Tools.navigation(0);
   Tools.resize_page(); 
   window.addEventListener("click", Tools.delegation_estatesmain);
}

app();
