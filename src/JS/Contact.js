/*  Home & House Estates : Contact Application
--------------------------------------------------------------*/
/*  Imports
--------------------------------------------------------------*/

import CSS from "../Styles/Stylesheet.scss";
import * as Tools from "./Tools.js";

/*  App
-------------------------------------------------------------- */


function app(){
    Tools.navigation(2);
    Tools.resize_page();
    Tools.initMap({lat:parseFloat(47.17871), lng:parseFloat(9.45129)}, "contact-main__location--map");
 }
 
 app();






