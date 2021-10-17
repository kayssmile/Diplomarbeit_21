/*  Immo Application 
-------------------------------------------------------------- */



/*  Imports
-------------------------------------------------------------- */

import * as Tools from "./Tools.js";
import CSS from "../styles/stylesheet.scss";

// import "../JS/home.js";
// import "../JS/aktuelles";






/*  To Top Button 
-------------------------------------------------------------- */


var totop_btn = document.querySelector(".footer__totop");


totop_btn.addEventListener("click", totop);


function totop (){
  window.scrollTo({top: 0, behavior: 'smooth'});
 // document.body.scrollTop = 0; // For Safari
 // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

















/*  Navigation : Mobile Version : Menu oeffnen
-------------------------------------------------------------- */

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



/*  GOOGLE MAPS API
-------------------------------------------------------------- */




//var map_contact = document.querySelector(".contact-main__map");



/* Get the map */
let map;
// Initialize and add the map

function initMap() {
    // Create the map with no initial style specified.
    // It therefore has default styling.
  const HomeHouse = { lat:  47.1786, lng: 9.4513 };
  
  map = new google.maps.Map(document.querySelector(".contact-main__location--map"), {
    center: HomeHouse,
    zoom: 16,
    disableDefaultUI: true,
    mapTypeControl: false,
  });

  const svgMarker = {
    path: "M18 0C8.325 0 0.5 7.825 0.5 17.5C0.5 30.625 18 50 18 50C18 50 35.5 30.625 35.5 17.5C35.5 7.825 27.675 0 18 0ZM18 23.75C14.55 23.75 11.75 20.95 11.75 17.5C11.75 14.05 14.55 11.25 18 11.25C21.45 11.25 24.25 14.05 24.25 17.5C24.25 20.95 21.45 23.75 18 23.75Z",
    fillColor: "black",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 0.8,
    anchor: new google.maps.Point(15, 30),
  };

  
  map.setOptions({ styles: styles['silver'] });
  const marker = new google.maps.Marker({
    'position': HomeHouse,
    //'mapTypeId' : google.maps.MapTypeId.ROADMAP,
    'map': map,
    'icon': svgMarker,
  });
}
  
const styles = {
  default: [],
  silver: [
    {
      elementType: "geometry",
      stylers: [{ color: "#e4e4e4" }],
    },
    {
      elementType: "labels.icon",
      stylers: [{ color: "#e4e4e4" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#585858" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#f5f5f5" }],
    },
      
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }],
    },
      
      
  ],
   
};

initMap();

