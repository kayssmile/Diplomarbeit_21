/* Immo Application  */ 





/* Imports  */

import * as Tools from "./Tools.js";
import CSS from "../styles/stylesheet.scss";



// Navigation : Mobile Version : Menu oeffnen

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


// Estates Main : Settings : List or Table

const icon_table = document.querySelector(".main_estates__options--icontable");
const icon_list = document.querySelector(".main_estates__options--iconlist");
const estates_list = document.querySelector(".result_estates__item-a");
const estates_table = document.querySelector(".result_estates__item-b");

icon_table.addEventListener("click", show_table);
icon_list.addEventListener("click", show_list);



function show_table(){
    estates_list.style.display = "none";
    estates_table.style.display = "block";
    icon_table.style.fill = "rgba(135, 135, 135, 1)";
    icon_list.style.fill = "rgba(146, 185, 175, 1)";

}

function show_list(){
    estates_list.style.display = "block";
    estates_table.style.display = "none";
    icon_table.style.fill = "rgba(146, 185, 175, 1)";
    icon_list.style.fill = "rgba(135, 135, 135, 1)";
}




// GRAPHQL Anbindung

// Libary Import

import { GraphQLClient, gql } from 'graphql-request';
const graphQLClient_weather = new GraphQLClient('https://graphql-weather-api.herokuapp.com/');
const graphQLClient = new GraphQLClient('https://dev21-api.web-professionals.ch/graphql');


var estates = [];


// Query Weather API 

var location = "Bern";

const query = gql`

    query {
        getCityByName(name: "${location}", config: {units:metric}){   
            weather{  
              temperature{
                actual
              }
            }
        }
    }
`;

// const response = await graphQLClient_weather.request(query);

// console.log(response.getCityByName.weather.temperature.actual);


var entry_test = "lachen";
var entry_test2 = "Open";

// Query Backend API 

const query_newtodo = gql`

    query{

        newtodo(Entry: "${entry_test}", State: "${entry_test2}")

    }
`

const query_allentries = gql`

    query{
        estates{
            id
            country
            canton
            city
            zip
            title
            description
            availability
            prize
            estate_type
            lat
            long    
        }
    }
`;

 // estates = await graphQLClient.request(query_allentries);

 // console.log(estates.estates[0]);
 // console.log(estates.estates[0].id);



/*

Object { id: "1", country: "Schweiz", 
        canton: "Luzern", city: "Sursee", 
        zip: 6214, title: "Bijou am See", 
        description: "An mystischer Lage in der Nähe des berühmten Greenwhich Waldes verkaufen wir das vollständig renovierten Gebäude. Das Haus bietet mit den 13 attraktiven Räumen einem grosszügigen Umschwung am See eine nicht alltägliche und einzigartige Atmosphäre.",
         availability: "ab sofort", prize: 900000, estate_type: "zu verkaufen",
         lat: 47.1715422, long: 8.1262825
        }

*/
        