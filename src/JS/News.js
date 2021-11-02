/*  Home & House Immobillien : Aktuelles
--------------------------------------------------------------*/
/*  Imports
--------------------------------------------------------------*/


import CSS from "../Styles/Stylesheet.scss";
import * as Tools from "./Tools.js";




/*  Aktuelles
-------------------------------------------------------------- */

let nav_aktuelles = document.querySelector(".nav__select");
nav_aktuelles.children[1].firstElementChild.firstElementChild.style.color = "white";
Tools.navigation(1);
Tools.resize_page();

const wrapper_news = document.querySelector(".main-actual");
const wrapper_news_article = document.querySelector(".main-actual-details");

const btn = document.querySelector(".main-actual__list--btn ");
console.log(btn.getAttribute("data-title"));



const news_detail_title = {
    0 : {
       title : "Grossprojekt Home & House"   
    }, 
    1 : {
        title : "Home & House Umzug"
    },
    2 : {
        title : "Neue Partnerschaft"
    },
    3 : {
        title : "Projekt Business-Hotel"
    },
}




wrapper_news.addEventListener("click", delegation_news);
wrapper_news_article.addEventListener("click", delegation_news);



function delegation_news(event){
    
    console.log(event.target.dataset.id);
    if(event.target.matches(".main-actual__list--btn")){
        let img = event.target.parentNode.parentNode.firstElementChild.getAttribute("src");
        let details_img = document.querySelector(".main-actual-details__picture");
        details_img.setAttribute("src", img );
        let heading1 = document.querySelector(".main-actual-details__heading-1--title");
        heading1.innerText = news_detail_title[event.target.dataset.id].title;
        let heading2 = document.querySelector(".main-actual-details__heading-2--title");
        heading2.innerText = event.target.parentNode.firstElementChild.firstElementChild.innerText;
        let date = document.querySelector(".main-actual-details__article--text");
        date.innerText = event.target.parentNode.firstElementChild.lastElementChild.innerText;
        let intro = document.querySelectorAll(".main-actual-details__article--text");
        intro[1].innerText = event.target.previousElementSibling.innerText;
        wrapper_news.style.display = "none";
        wrapper_news_article.style.display = "block";
    }
    if(event.target.matches(".main-actual-details__btn")){
        wrapper_news.style.display = "block";
        wrapper_news_article.style.display = "none";
    }
}


