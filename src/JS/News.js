/*  Home & House Immobillien : Aktuelles
--------------------------------------------------------------*/
/*  Imports
--------------------------------------------------------------*/


import CSS from "../Styles/Stylesheet.scss";
import * as Tools from "./Tools.js";




/*  Aktuelles
-------------------------------------------------------------- */


Tools.navigation(1);
Tools.resize_page();


const body = document.querySelector("body");

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

body.addEventListener("click", delegation_news);


function delegation_news(event){
    let wrapper_news = document.querySelector(".main-actual");
    let wrapper_news_article = document.querySelector(".main-actual-details");
    let element = event.target;
    if(element.matches(".main-actual__list--btn")){
        window.scrollTo(0,0);
        let img = element.parentNode.parentNode.firstElementChild.getAttribute("src");
        let details_img = document.querySelector(".main-actual-details__picture");
        details_img.setAttribute("src", img );
        let heading1 = document.querySelector(".main-actual-details__heading-1--title");
        heading1.innerText = news_detail_title[element.dataset.id].title;
        let heading2 = document.querySelector(".main-actual-details__heading-2--title");
        heading2.innerText = element.parentNode.firstElementChild.firstElementChild.innerText;
        let date = document.querySelector(".main-actual-details__article--text");
        date.innerText = element.parentNode.firstElementChild.lastElementChild.innerText;
        let intro = document.querySelectorAll(".main-actual-details__article--text");
        intro[1].innerText = element.previousElementSibling.innerText;
        wrapper_news.style.display = "none";
        wrapper_news_article.style.display = "block";
    }
    if(element.matches(".main-actual-details__btn")){
        wrapper_news.style.display = "block";
        wrapper_news_article.style.display = "none";
    }
    if(element.matches("path") || element.matches("rect")){ 
        if(element.parentNode.classList.contains("footer__totop")){
            Tools.totop();
        }
    }
}


