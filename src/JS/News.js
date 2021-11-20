/*  Home & House Estates : News Application
--------------------------------------------------------------*/
/*  Imports
--------------------------------------------------------------*/

import CSS from "../Styles/Stylesheet.scss";
import * as Tools from "./Tools.js";

/*  App
-------------------------------------------------------------- */

function app(){
    Tools.navigation(1);
    Tools.resize_page();
    window.addEventListener("click", Tools.delegation_news);
 }
 
 app();
