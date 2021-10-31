/*  Tools 
-------------------------------------------------------------- */
/* Necessary: Imports, Declarations, Selectors
-------------------------------------------------------------- */

import * as images from "./Images.js";
import { GraphQLClient, gql } from 'graphql-request';
const graphQLClient = new GraphQLClient('https://dev21-api.web-professionals.ch/graphql');
var wrapper_estatesmain = document.querySelector("#main");
var all_estates = [];

/*  GRAPHQL API
-------------------------------------------------------------- */

async function load_api(){
    var estates;
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
                usable_area   
            }
        }
    `;
    
    estates = await graphQLClient.request(query_allentries);

     /*  
      console.log(estates.estates);
      console.log(estates.estates[0]);
      console.log(estates.estates[0].id);

    Object { id: "1", country: "Schweiz", 
            canton: "Luzern", city: "Sursee", 
            zip: 6214, title: "Bijou am See", 
            description: "An mystischer Lage in der Nähe des berühmten Greenwhich Waldes verkaufen wir das vollständig renovierten Gebäude. Das Haus bietet mit den 13 attraktiven Räumen einem grosszügigen Umschwung am See eine nicht alltägliche und einzigartige Atmosphäre.",
             availability: "ab sofort", prize: 900000, estate_type: "zu verkaufen",
             lat: 47.1715422, long: 8.1262825, usable_area: "",
             img: "http://localhost:8080/assets/photo-1464146072230-91cabc968266.jpg"
            img1: "http://localhost:8080/assets/photo-1472228283686-42356d789f66.jpg"
            img2: "http://localhost:8080/assets/photo-1491955478222-69ae25414368.jpg"
            img3: "http://localhost:8080/assets/photo-1551133990-60f24c1e4158.jpg"
            }

    };
    */
    let counter = 0;
    for(let estate of estates.estates){
        if(counter == 6){
            counter = 0;
        }
        estate.img = images.images_estates[counter][0];
        estate.img1 = images.images_estates[counter][1];
        estate.img2= images.images_estates[counter][2];
        estate.img3 = images.images_estates[counter][3];
        all_estates.push(estate);
        counter++
    }
    all_estates.sort( (a, b) => {
        return a.id - b.id;
    });
}   

/*  Estates Main : Functions
-------------------------------------------------------------- */
    
function load_estates(){

    let table_items = Array.from(document.querySelectorAll(".result_estates__item"));
    if(screen.width < 800){
        table_items = table_items.slice(0,3);
    }else if(screen.width < 1150){
        table_items = table_items.slice(0,4);
    }
    let displaypages = document.querySelector(".result_estates__next--total");
    displaypages.innerText = Math.ceil(all_estates.length / table_items.length);
    var counter_table_items = 0;
    for(var table_item of table_items){
        table_item.setAttribute("data-id", all_estates[counter_table_items].id);
        let item_img = table_item.firstElementChild;
        item_img.setAttribute("src", all_estates[counter_table_items].img); //${pictures_estates[0]}
        let item_by = table_item.children[1].children[0];
        item_by.innerText = all_estates[counter_table_items].estate_type +" "+ all_estates[counter_table_items].availability;
        let item_location = table_item.children[1].children[1];
        if (all_estates[counter_table_items].city == all_estates[counter_table_items].canton){
            item_location.innerText = all_estates[counter_table_items].zip +" "+ all_estates[counter_table_items].city +" Schweiz";
        }else{
            item_location.innerText = all_estates[counter_table_items].zip +" "+ all_estates[counter_table_items].city +" "+ all_estates[counter_table_items].canton;
        }
        let item_title = table_item.children[1].children[2];
        item_title.innerText = all_estates[counter_table_items].title;
        let item_info = table_item.children[1].children[3];
        item_info.innerText = "Fläche "+all_estates[counter_table_items].usable_area +"m², Preis: CHF "+all_estates[counter_table_items].prize;
        counter_table_items++;
    }
    console.log(table_items[1].dataset.id);
}

    
function delegation_estatesmain(event){
    console.log(event.target);
    var element = event.target;
    dropdown: if(element.matches(".select__main") || element.matches(".select__main--svg") || element.matches("path")
    || element.matches(".select__main--text")){
        let dropdown = element.parentNode.lastElementChild;
        let input_icon = element.lastElementChild;
        if(element.classList.contains("select__main--text")){
            dropdown = element.parentNode.parentNode.lastElementChild;
            input_icon = element.parentNode.lastElementChild;
        }else if(element.classList.contains("select__main--svg")){
            dropdown = element.parentNode.parentNode.lastElementChild;
            input_icon = element;
        }else if(element.nodeName == "path"){
            if(element.parentNode.classList == "select__main--svg"){
                dropdown = element.parentNode.parentNode.parentNode.lastElementChild;
                input_icon = element.parentNode;
            }else{
                break dropdown;
            }
        }
        if(dropdown.dataset.set == 0){
            dropdown.setAttribute("data-set", 1);
            dropdown.style.display = "inline-flex";
            input_icon.style.transform = "rotate(180deg)";
            close_dropdown(dropdown, input_icon);
        }else{
            dropdown.setAttribute("data-set", 0);
            dropdown.style.display = "none";
            input_icon.style.transform = "rotate(0deg)"; 
        } 
    }
    if(element.matches(".select__dropdown--item")){
        element.parentNode.parentNode.firstElementChild.firstElementChild.innerText = element.firstElementChild.innerText;
        element.parentNode.style.display = "none";
        element.parentNode.parentNode.firstElementChild.lastElementChild.style.transform = "rotate(0deg)";
    }
    if(element.matches(".select__dropdown--text")){
        element.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.innerText = element.innerText;
        element.parentNode.parentNode.style.display = "none";
        element.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.style.transform = "rotate(0deg)";
    }
    if(element.matches(".main_estates__ruler--slider")){
       ruler_state();
    }
    if(element.matches(".main_estates__btn") || element.matches(".main_estates__btn--text")){
        let all_inputs = document.querySelectorAll(".select__main--text");
        filters.select_what = all_inputs[0].innerText;
        filters.select_where = all_inputs[1].innerText;
        filters.select_sort = all_inputs[2].innerText;
        if(screen.width < 800){
            filters.ruler = document.querySelectorAll(".main_estates__ruler--slider")[1].value;
        }else{
            filters.ruler = document.querySelectorAll(".main_estates__ruler--slider")[0].value;
        }
        console.log(filters);   
    }
    if(element.matches(".main_estates__options--icontable")){
        listortable(0, event.target);  
    }
    if(element.matches(".main_estates__options--iconlist")){
        listortable(1, event.target);   
    }
    if(element.matches("rect")){
        if(element.parentNode.classList == "main_estates__options--icontable"){
            listortable(0, event.target.parentNode);
        }else if(element.parentNode.classList == "main_estates__options--iconlist"){
            listortable(1, event.target.parentNode);
        }
    }
    if(element.matches(".result_estates__item--picture")){
        showorhide_details(0, element.parentNode.getAttribute("data-id"));
    }
    if(element.matches(".result_estates__description--title")){
        showorhide_details(0, element.parentNode.parentNode.getAttribute("data-id"));
    }
    if(element.matches(".result_estates__btn")){
        let table_items = Array.from(document.querySelectorAll(".result_estates__item")); 
        table_items = table_items.slice(0, table_items.length-3);
        let id = table_items.length;
        if(element.innerText == "Zurück"){
            element.innerText = "Mehr laden";
            for(let table_item of table_items){
                table_item.remove();
            }
            window.scrollTo(0,4000);
            table_items = document.querySelectorAll(".result_estates__item");
            id = 0;
        }
        for(let i = 0; i < 3; i++){
            if(id == all_estates.length){
                element.innerText = "Zurück";
                break;
            }
            let table_item = document.createElement("li");
            table_item.setAttribute("data-id", id+1);
            table_item.classList.add("result_estates__item");
            table_item.innerHTML = 
            `<img class="result_estates__item--picture" src="${all_estates[id].img}">
                <div class="result_estates__description">
                    <p class="result_estates__description--text regular">${all_estates[id].estate_type} ${all_estates[id].availability}</p>
                    <p class="result_estates__description--text regular">${all_estates[id].zip} ${all_estates[id].city}, ${all_estates[id].canton}</p>
                    <h3 class="result_estates__description--title bold">${all_estates[id].title}</h3>
                    <p class="result_estates__description--text regular">Fläche ${all_estates[id].usable_area}m², Preis: CHF ${all_estates[id].prize}</p>
            </div>`;
            table_items[0].parentNode.insertBefore(table_item, table_items[0].parentNode.children[id]);
            id++;
        }
    }
    if(element.matches("path") || element.matches("rect")){ 
        if(element.parentNode.classList.contains("footer__totop")){
            totop();
        }
    }
}

function close_dropdown(dropdown, input_icon){
    wrapper_estatesmain.addEventListener("mouseover", event => {
        if(event.target.matches("#main_estates") || event.target.matches(".main_estates__selects--label") 
        || event.target.matches(".main_estates__selects") || event.target.matches(".main_estates__filter")
        || event.target.matches(".main_estates__options")|| event.target.matches(".main_estates__ruler--slider")
        || event.target.matches(".main_estates__setting--text") || event.target.matches(".main_estates__btn")
        || event.target.matches(".main_estates__btn--text")){
            dropdown.setAttribute("data-set", 0);
            dropdown.style.display = "none";
            input_icon.style.transform = "rotate(0deg)"; 
        }
    }); 
}

function ruler_state(){
    let rulers = document.querySelectorAll(".main_estates__ruler--slider");
    for (let ruler of rulers){
        if(ruler.value == 1){
            ruler.parentNode.parentNode.firstElementChild.style.color = "black";
            ruler.parentNode.parentNode.lastElementChild.style.color = "rgba(146, 185, 175, 1)";
        }else{
             ruler.parentNode.parentNode.firstElementChild.style.color = "rgba(146, 185, 175, 1)";
             ruler.parentNode.parentNode.lastElementChild.style.color = "black";
        }
    }
}

function listortable(choice, icon){
    let estates_list = document.querySelector(".result_estates__item-a");
    let estates_table = document.querySelector(".result_estates__item-b");
    if(choice == 0){
        estates_list.style.display = "none";
        estates_table.style.display = "block";
        icon.style.fill = "rgba(135, 135, 135, 1)";
        icon.parentNode.children[1].style.fill = "rgba(146, 185, 175, 1)";
    }else{
        estates_list.style.display = "block";
        estates_table.style.display = "none";
        icon.style.fill = "rgba(135, 135, 135, 1)";
        icon.parentNode.children[2].style.fill = "rgba(146, 185, 175, 1)";
    }
}

function showorhide_details(choice, id = 0){
    let heading_estatesmain = document.querySelector(".heading");
    let wrapper_estatesmain = document.querySelector("#main_estates");
    let wrapper_estatesresult = document.querySelector("#result_estates");
    var wrapper_detailview = document.querySelector("#main_details");
    var estate_details = document.querySelector("#estate_details");

    if(choice == 0){
        heading_estatesmain.style.display = "none";
        wrapper_estatesmain.style.display = "none";
        wrapper_estatesresult.style.display = "none";
        wrapper_detailview.style.display = "block";
        window.scrollTo(0, 0);
        var item_details = all_estates.filter(all_estates =>{
            return id == all_estates.id;
        });
        item_details = item_details[0];
        
/* 
        Object { id: "1", country: "Schweiz", 
        canton: "Luzern", city: "Sursee", 
        zip: 6214, title: "Bijou am See", 
        description: "An mystischer Lage in der Nähe des berühmten Greenwhich Waldes verkaufen wir das vollständig renovierten Gebäude. Das Haus bietet mit den 13 attraktiven Räumen einem grosszügigen Umschwung am See eine nicht alltägliche und einzigartige Atmosphäre.",
         availability: "ab sofort", prize: 900000, estate_type: "zu verkaufen",
         lat: 47.1715422, long: 8.1262825, usable_area: ""
        }
*/      estate_details.setAttribute("data-id", item_details.id);
        estate_details.children[2].firstElementChild.innerText = item_details.estate_type;
        estate_details.children[2].lastElementChild.innerText = item_details.title;
        estate_details.children[3].lastElementChild.firstElementChild.setAttribute("src", item_details.img);
        estate_details.children[3].lastElementChild.firstElementChild.setAttribute("data-index", 0);
        estate_details.children[3].lastElementChild.firstElementChild.setAttribute("data-img", item_details.img);
        estate_details.children[4].firstElementChild.setAttribute("src", item_details.img1);
        estate_details.children[4].firstElementChild.setAttribute("data-index", 1);
        estate_details.children[4].children[1].setAttribute("src", item_details.img2);
        estate_details.children[4].children[1].setAttribute("data-index", 2);
        estate_details.children[4].lastElementChild.setAttribute("src", item_details.img3);
        estate_details.children[4].lastElementChild.setAttribute("data-index", 3);
        estate_details.children[5].firstElementChild.firstElementChild.lastElementChild.innerText = item_details.availability;
        estate_details.children[5].firstElementChild.children[2].lastElementChild.innerText = `${item_details.zip} ${item_details.city}, ${item_details.canton}`;
        estate_details.children[5].firstElementChild.children[2].lastElementChild.innerText = `CHF ${item_details.prize}`;
        estate_details.children[5].firstElementChild.children[3].lastElementChild.innerText = `Fläche ${item_details.usable_area}m²`;
        if(screen.width < 650){
            estate_details.children[5].firstElementChild.children[4].lastElementChild.innerText = item_details.description;
        }else{
            estate_details.children[5].lastElementChild.firstElementChild.lastElementChild.innerText = item_details.description;
        }
        window.addEventListener("resize", () => {
            console.log("resize on");
            if(screen.width < 650){
                estate_details.children[5].firstElementChild.children[4].lastElementChild.innerText = item_details.description;
            }else{
                estate_details.children[5].lastElementChild.firstElementChild.lastElementChild.innerText = item_details.description;
            }
        });
        initMap({lat:parseFloat(item_details.lat.toFixed(4)), lng:parseFloat(item_details.long.toFixed(4))}, estate_details.children[6].classList);
        wrapper_detailview.addEventListener("click", estatedetails_delegation);
    }else{
        wrapper_detailview.style.display = "none";
        heading_estatesmain.style.display = "flex";
        wrapper_estatesmain.style.display = "block";
        wrapper_estatesresult.style.display = "block"; 
    }
}

function estatedetails_delegation(event){
    console.log(event.target);
    let contact = document.querySelector(".estate_details__contact");
    let imgs = document.querySelectorAll(".estate_details__images--image");
    let img = document.querySelector(".estate_details__slider--picture");
    let img_index = img.dataset.index; 
    let element = event.target;
    if(element.matches(".estate_details__nav--svg") || element.matches(".estate_details__nav--path")){
        showorhide_details(1);  
    }
    if(element.matches(".estate_details__slider--left") || element.matches(".slider_left")){
        if(img_index == 0){
            img.setAttribute("src", imgs[2].getAttribute("src"));
            img.setAttribute("data-index", "3");
        }else if(img_index == 1){
            img.setAttribute("src", img.dataset.img);
            img.setAttribute("data-index", "0");
        }
        else{
            img.setAttribute("src", imgs[img_index-2].getAttribute("src"));
            img.setAttribute("data-index", img_index-1);
        }
    }
    if(element.matches(".estate_details__slider--right") || element.matches(".slider_right")){
        if(img_index == 3){
            img.setAttribute("src", img.dataset.img);
            img.setAttribute("data-index", "0");
        }else{
            img.setAttribute("src", imgs[img_index].getAttribute("src"));
            img.setAttribute("data-index", (parseInt(img_index)+1));
        } 
    }
    if(element.matches(".estate_details__images--image")){
        document.querySelector(".estate_details__slider--picture").setAttribute("src", element.getAttribute("src"));
    }
    if(element.matches(".estate_details__btn") || element.matches(".estate_details__description--btn")){
        totop();
        contact.classList.add("estate_details__contact--toright");
        contact.children[2].lastElementChild.innerText = contact.parentNode.children[2].lastElementChild.innerText; 
    }
    if(element.matches(".estate_details__contact--close") || element.matches(".estate_details__close")){
        contact.classList.remove("estate_details__contact--toright"); 
    }
    if(element.matches(".estate_details__contact--confirm") || element.matches(".estate_details__contact--cross") || element.matches(".cross_path")){
        if(element.classList == "estate_details__contact--cross"){
            element = element.parentNode;
        }else if(element.classList == "cross_path"){
            element = element.parentNode.parentNode;
        }
        if(element.dataset.set == 0){
            element.firstElementChild.style.display = "inline-block";
            element.setAttribute("data-set", "1");
        }else{
            element.firstElementChild.style.display = "none";
            element.setAttribute("data-set", "0");
        }   
    }
    Absenden: if(element.matches(".estate_details__contact--btn") || element.matches("a")){
        let wishes = [];
        let inputs = document.querySelectorAll("input");
        inputs = Array.from(inputs).slice(2, inputs.length);
        if(inputs[5].value == ""){
            window.alert("Bitte Email Adresse ausfüllen !");
            break Absenden;
        }
        for(let input of inputs){
            if(input.value == ""){
                input.value ="k.A";
            }
        }
        let advices = Array.from(document.querySelectorAll(".estate_details__contact--confirm"));
        if(advices[0].dataset.set == "1"){
           wishes.push("Informationen");
        }else{
            wishes.push("Keine Informationen");
        }
        if(advices[1].dataset.set == "1"){
            wishes.push("Besichtigung");
        }else{
            wishes.push("Kein Termin");
        }
        let mail = `mailto:HomeHouseOffice@mail.com?subject=Neue Anfrage&body=`+
        `Vorname:%20${inputs[0].value}%20Nachname:%20${inputs[1].value}%0A`+
        `Adresse:%20${inputs[2].value}%20PLZ:%20${inputs[3].value}%0A`+
        `Ort:%20${inputs[4].value}%0AEmail:%20${inputs[5].value}%0A`+
        `Telefonnummer:%20${inputs[6].value}%0A`+
        `Nachricht: ${document.querySelector("textarea").value}%0A`+
        `Interesse an Objekt: ${contact.children[2].lastElementChild.innerText}%0A`+
        `Wünscht sich: ${wishes[0]}, ${wishes[1]}`; 
        let mail_link = document.querySelector("a");
        mail_link.setAttribute("href", mail);
        mail_link.click();
        for(let input of inputs){
            input.value = "";
        }
        for(let advice of advices){
            console.log(advice);
            advice.firstElementChild.style.display = "none";
            advice.setAttribute("data-set", "0");
        }
        contact.classList.remove("estate_details__contact--toright"); 
        
    }
}


/*  Functions general
-------------------------------------------------------------- */
function pageresize(){
    window.addEventListener("onresize", () =>{
        console.log("resize done");
        location.reload();
    });
}

function navigation(){

    var nav = document.querySelector(".nav");

    var ham_mobile = document.querySelector(".nav__ham");
    var close_mobile = document.querySelector(".nav__close");
    var nav_menu_mobile = document.querySelector(".nav_menu");
     /* 
    nav.addEventListener("click", (event)=>{
        let element = event.target;
        if(element.classList = "nav__ham"){
            element.style.display = "none";
            element.parentNode.style.opacity = "1";
            element.parentNode.parentNode.lastElementChild.style.display = "block";
            element.parentNode.children[3].style.display = "inline-block";
        }else if(element.classList = "nav__close"){
            element.style.display = "none";
            element.parentNode.style.opacity = "0.85";
            element.parentNode.parentNode.lastElementChild.style.display = "none";
            element.parentNode.children[2].style.display = "inline-block";

        }
    });
}
   */
    
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
}

function totop(){

    window.scrollTo({top: 0, behavior: 'smooth'});
   // document.body.scrollTop = 0; // For Safari
   // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function initMap(coordinates, selector) {
    let map;
    map = new google.maps.Map(document.querySelector(`.${selector}`), {
      center: coordinates,
      zoom: 17,
      mapId: "967c67b3b3520cf4",
      disableDefaultUI: true,
    });
    const svgMarker = {
      path: "M18 0C8.325 0 0.5 7.825 0.5 17.5C0.5 30.625 18 50 18 50C18 50 35.5 30.625 35.5 17.5C35.5 7.825 27.675 0 18 0ZM18 23.75C14.55 23.75 11.75 20.95 11.75 17.5C11.75 14.05 14.55 11.25 18 11.25C21.45 11.25 24.25 14.05 24.25 17.5C24.25 20.95 21.45 23.75 18 23.75Z",
      fillColor: "black",
      fillOpacity: 1,
      scale: 1.2,
    };
    const marker = new google.maps.Marker({
      'position': coordinates,
      'map': map,
      'icon': svgMarker,
    });
}






export {load_api, load_estates, pageresize, navigation, totop, initMap, delegation_estatesmain, ruler_state };


