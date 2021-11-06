/*  Tools 
-------------------------------------------------------------- */
/* Necessary: Imports, Declarations, Selectors
-------------------------------------------------------------- */

import * as images from "./Images.js";
import { GraphQLClient, gql } from 'graphql-request';
const graphQLClient = new GraphQLClient('https://dev21-api.web-professionals.ch/graphql'); //    // http://localhost:4000/graphql
var wrapper_estatesmain = document.querySelector("#main");
var all_estates = [];

var all_estates_origin = [];
var counter_forward = 0;
var pause = 0;
var icon_list = 0;

var filters = {
    select_what : "Alle Objekte",
    select_where : "Alle Orte",
    select_sort: "Sortierung",
    ruler: "none", 
    select_area: "none",
    select_title:"none",
    select_location: "none"
};


/*  GRAPHQL API
-------------------------------------------------------------- */

async function load_api(){

    all_estates = [];

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
                created_at
                updated_at
                ref_type_id
            }
        }
    `; 

    var estates = await graphQLClient.request(query_allentries);


    /*
    var makeServerRequest = new Promise(async(resolve, reject) => {

        if (estates) {
          resolve("We got the Data");
        } else {
          reject("Data not Found");
        }
      });
    
    await makeServerRequest
    .then((resolve) => {
        console.log(resolve);
      })
      .catch((err) => {
        console.log(err);
      });



    console.log(makeServerRequest); 
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

            var element1 = { id: "100", country: "Schweiz", updated_at: "2023-10-02 10:03:28", created_at: "1999-10-02 07:03:28", estate_type: "zu vermieten"};
        var element2 = { id: "200", country: "Schweiz", updated_at: "2026-10-02 10:03:28", created_at: "2025-10-02 07:03:28", estate_type: "zu vermieten"};
        all_estates.push(element1);
        all_estates.push(element2);

    };
    */


   

    let counter = 0;

    for(let estate of estates.estates){     // Images einbinden 
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

    

    all_estates_origin = all_estates;
  //  console.log(all_estates_origin);
    
}   

/*  Estates Main : Functions
-------------------------------------------------------------- */
function sort_estates(filters){

    console.log(all_estates_origin);
    all_estates = all_estates_origin;
    console.log(filters);
    console.log(all_estates);

    if(filters.select_what != "Alle Objekte"){
        if(filters.select_what != "Haus"){ 
            all_estates = all_estates.filter(estate =>{
                if(estate.ref_type_id == "1"){return 1;}
                else{return 0;}    
            });
        }else{
            all_estates = all_estates.filter(estate =>{ 
                if(estate.ref_type_id  == "0"){return 1;}
                else{return 0;}
            });
        }
    }
    if(filters.select_where != "Alle Orte"){ 
        console.log(filters.select_where);
        switch (filters.select_where){
            case "Ostschweiz":
                all_estates = all_estates.filter(estate =>{
                   if(estate.canton == "St.Gallen"){return 1;}
                   else if(estate.canton == "Thurgau"){return 1;}
                   else if(estate.canton == "Appenzell Innerrhoden"){return 1;}
                   else if(estate.canton == "Appenzell Ausserrhoden"){return 1;}
                   else if(estate.canton == "Glarus"){return 1;}
                   else if(estate.canton == "Schaffhausen"){return 1;}
                   else if(estate.canton == "Graubünden"){return 1;}
                   else{return 0;}    
                });  
                break;
            case "Zentralschweiz":
                all_estates = all_estates.filter(estate =>{
                    if(estate.canton == "Uri"){return 1;}
                    else if(estate.canton == "Schwyz"){return 1;}
                    else if(estate.canton == "Obwalden"){return 1;}
                    else if(estate.canton == "Appenzell Ausserrhoden"){return 1;}
                    else if(estate.canton == "Nidwalden"){return 1;}
                    else if(estate.canton == "Luzern"){return 1;}
                    else if(estate.canton == "Zug"){return 1;}
                    else{return 0;}    
                });
                break;
            case "Zürich":
                all_estates = all_estates.filter(estate =>{
                    if(estate.canton == "Zürich"){return 1;}
                    else{return 0;}    
                });
                break;
            case "Nordwestschweiz":
                all_estates = all_estates.filter(estate =>{
                    if(estate.canton == "Basel-Stadt"){return 1;}
                    else if(estate.canton == "Basel-Landschaft"){return 1;}
                    else if(estate.canton == "Aargau"){return 1;}
                    else{return 0;}    
                }); 
                break;
            case "Mittelschweiz":
                all_estates = all_estates.filter(estate =>{
                    if(estate.canton == "Bern"){return 1;}
                    else if(estate.canton == "Solothurn"){return 1;}
                    else if(estate.canton == "Freiburg"){return 1;}
                    else if(estate.canton == "Neuenburg"){return 1;}
                    else if(estate.canton == "Jura"){return 1;}
                    else{return 0;}    
                });
                break;
            case "Tessin":
               
                all_estates = all_estates.filter(estate =>{
                    if(estate.canton == "Tessin"){return 1;}
                    else{return 0;}    
                });
                
                break;
            case "Genferseeregion":
                all_estates = all_estates.filter(estate =>{
                    if(estate.canton == "Genf"){return 1;}
                    else if(estate.canton == "Waadt"){return 1;}
                    else if(estate.canton == "Wallis"){return 1;}
                    else{return 0;}    
                });
                break;
        }
    }
    if(filters.ruler == 1){ // 1 = Mieten , 2 = Kaufen
        all_estates = all_estates.filter(estate =>{
            if(estate.estate_type == "zu vermieten"){return 1;}
            else{return 0;}    
        });
    }else if(filters.ruler == 2){
        all_estates = all_estates.filter(estate =>{
            if(estate.estate_type == "zu verkaufen"){return 1;}
            else{return 0;}    
        });
    }
    if(filters.select_sort != "Auswählen"){
        if(filters.select_sort == "Preis aufsteigend"){    
            all_estates.sort((a, b) => {
                return a.prize > b.prize;
            });
            icon_list = 1;
        }else if(filters.select_sort == "Preis absteigend"){
            all_estates.sort((a, b) => {
                return a.prize < b.prize;
            });
            icon_list = 2;
        }else{
            for(let estate of all_estates){
                estate.updated_at = (Date.parse(estate.updated_at)/1000);
            }
            if(filters.select_sort == "Datum absteigend"){
                all_estates.sort((a, b) => {  
                    return a.updated_at > b.updated_at;
                });
            } 
            if(filters.select_sort == "Datum aufsteigend"){
                all_estates.sort((a, b) => {    
                    return a.updated_at < b.updated_at;  
                });
            }  
        }
    } 

    if(filters.select_title != "none"){ 

        all_estates.sort((a, b) => {    
            return a.title - b.title;  
        });
        for(let estate of all_estates){console.log(estate.title);}

        if(filters.select_title == "up"){
            all_estates.reverse();
        }

    }
    
    if(filters.select_location != "none"){
        
        all_estates.sort((a, b) => {    
            return a.zip - b.zip;  
        }); 
        if(filters.select_location == "up"){
            all_estates.reverse();
        }
    }
    if(filters.select_area != "none"){
        
        all_estates.sort((a, b) => {    
            return a.usable_area - b.usable_area;  
        });
        if(filters.select_area == "up"){
            all_estates.reverse();
        }
    }
       
    filters = {
        select_what : "Alle Objekte",
        select_where : "Alle Orte",
        select_sort: "Sortierung",
        ruler: "none", 
        select_area: "none",
        select_title:"none",
        select_location: "none"
    }; 

    for(let i = 0; i < all_estates.length; i++){
        all_estates[i].id = i+1;
    }  

    console.log("nachdem filter geladen ist");
    console.log(all_estates);
    load_estates();

}

/* 
function items_visible(){
  
    var table_items = Array.from(document.querySelectorAll(".result_estates__item"));
    if(screen.width < 800){
        table_items = table_items.slice(0,3);
    }else if(screen.width < 1150){
        if(table_items.length > 6){
            table_items = table_items.filter(table_item => !table_item.classList.contains("visibility-desktop"))
        }else{
            table_items = table_items.slice(0,4);
        }
    }
    return table_items;
} */

function load_list(){

    let icon_price = document.querySelector(".icon_list"); // Hier wird das Icon auf die richtige Position gesetzt, und entsprechend der Sortierung gesetzt
    if(icon_list == 1){
        if(icon_price.getAttribute("data-sort") == 1){
            icon_price.setAttribute("data-sort", 0);
            icon_price.style.transform = "rotate(0deg)";
        }
    }else if(icon_list == 2){
        if(icon_price.getAttribute("data-sort") == 0){
            icon_price.setAttribute("data-sort", 1);
            icon_price.style.transform = "rotate(180deg)";
        }
    }

    for(let estate of all_estates){ // Ab hier wird die ganze Liste mit den Immbilien Eintraegen erstellt inkl. Pruefung der maximalen Laenge
        let title = estate.title;
        if(title.length > 18){
            title = title.substr(0,18)+"...";
        }
        let ort = estate.zip+" "+estate.city+", "+estate.canton;
        if(ort.length > 24){
            ort = ort.substr(0,24)+"...";
        }
        let listentry = document.createElement("li");
        listentry.classList.add("result_estates__list--entry");
        listentry.setAttribute("data-id", estate.id);
        listentry.innerHTML = `
            <p class="result_estates__list--title bold" style="cursor:pointer;">${title}</p>
            <p class="result_estates__list--text regular visibility-tablet">${ort}</p>
            <p class="result_estates__list--text regular visibility-desktop">${estate.usable_area}m<sup>2</sup></p>
            <p class="result_estates__list--text regular">CHF ${estate.prize}</p>
        `;
        document.querySelector(".result_estates__list").appendChild(listentry);
    }

}
    
function load_estates(){
  //  console.log("loadin");
   // console.log(all_estates);

    let items_loaded = document.querySelectorAll(".result_estates__item"); // Erster Block ist ein Reset fuer alle Elemente welche Immobillien anzeigen
    let tables_loaded = document.querySelectorAll(".result_estates__tablenext");
    let container_newest = document.querySelector("#estates_actuals");
    let newest_loaded = document.querySelector(".estates_actuals__list");
    let list = Array.from(document.querySelectorAll(".result_estates__list--entry"));
    let btn = document.querySelector(".result_estates__btn");
    let list_estates = document.querySelector(".result_estates__list");
    list_estates.style.display = "block";
    btn.style.visibility = "visible";
    list.shift();
    counter_forward = 0;
    for(let entry of list){
        entry.remove();
    }
    if(newest_loaded){
        newest_loaded.remove();
    } 
    for(let table_loaded of tables_loaded){
        table_loaded.remove();
    }
    for(let item_loaded of items_loaded){
        item_loaded.remove();
    }
    let first_table = document.querySelector(".result_estates__table");
    first_table.style.visibility = "visible";
    let noresults = document.querySelectorAll(".result_estates__empty");
    if(noresults != null){
        noresults.forEach((noresult) =>{
            noresult.remove();
        })     
    }
    document.querySelector(".result_estates__next--actual").innerText = 1;
    document.querySelectorAll(".result_estates__next--item")[0].style.visibility = "hidden"; 
    let displaypages = document.querySelector(".result_estates__next--total");
    if(all_estates == 0){    // Kreire einen Text keine Immbollien
        let item = document.createElement("h1");
        item.classList.add("result_estates__empty");
        item.innerText = "Upsss..Keine Ergebnisse";
        item.style.marginTop = "9px";
        first_table.appendChild(item);
        let item2 = document.createElement("h1");
        item2.classList.add("result_estates__empty");
        item2.innerText = "Upsss..Keine Ergebnisse";
        list_estates.style.display = "none";
        document.querySelector(".result_estates__item-a").appendChild(item2);
        displaypages.innerText = 1;
        btn.style.visibility = "hidden";
    }else{
        load_list();    // Ab hier werden die Elemente mit Immobillien geladen, erst wird geprueft mit wieviele Immobillien angezeigt werden
        let table_items;
        if(screen.width < 800){table_items = 3;}
        else if(screen.width < 1150){table_items = 4;}    
        else{table_items = 6;}
        
        
        displaypages.innerText = Math.ceil(all_estates.length / table_items);
    
        for(let i = 0; i < table_items; i++){
            if(all_estates.length < i+1 || all_estates.length == 0){
                break;
            }
            let item = document.createElement("li");
            item.classList.add("result_estates__item");
            if(i == 3 ){
                item.classList.add("visibility-tablet");
            }else if(i > 3){
                item.classList.add("visibility-desktop");
            }
            item.setAttribute("data-id", i+1);            // Hier wird nach der Groesse des Bildschirm die Titel angepasst damit eine schoene Formatierung beibehalten wird
            
            
            console.log("ehmm");

            checktitlelength(item, i);


            console.log(item);
        
                
            first_table.appendChild(item);
                  
        }

        if(screen.width > 1150 && all_estates.length == 2){
            let item = document.createElement("li");
            item.classList.add("result_estates__item");
            item.style.visibility = "hidden";
            first_table.appendChild(item);

        } 
    
        let newest_estates = document.createElement("ul"); // Kreiert die Aktuellsten Elemente in Detail Ansicht
        newest_estates.classList.add("estates_actuals__list");
        
        all_estates.sort((a, b) => {    
            return a.updated_at < b.updated_at;  
        });
        for(let i = 0; i < 3; i++){
            let li = document.createElement("li");
            li.classList.add("estates_actuals__list--item");
            li.setAttribute("data-id", all_estates[i].id);
            li.innerHTML = create_entrys(1,i);
            newest_estates.appendChild(li);
        }
        container_newest.insertBefore(newest_estates, document.querySelector(".estates_actuals__all"));
        all_estates = all_estates_origin;
      //  console.log("nach dem item laden");
      //  console.log(all_estates_origin);
      //  console.log(all_estates);
    }
}
    
function delegation_estatesmain(event){
    console.log(event.target);
       
    var element = event.target;
    dropdown: if(element.matches(".select__main") || element.matches(".select__main--svg") || element.parentNode.classList.contains("select__main--svg") || element.matches(".select__main--text")){ 
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
        sort_estates(filters);
           
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
    if(element.matches(".result_estates__list--svg") || element.parentNode.parentNode.classList.contains("result_estates__list--svg")){
        
        filters = { select_what : "Alle Objekte", select_where : "Alle Orte", select_sort: "Sortierung", ruler: "none", select_area: "none", select_title:"none", select_location: "none"};
        var sort_order;
        var item ;
        if(element.classList.contains("result_estates__list--svg")){
            sort_order = element.parentNode.firstElementChild.innerText;
            item = element;
        }else{ 
            sort_order = element.parentNode.parentNode.parentNode.firstElementChild.innerText;
            item = element.parentNode.parentNode;
        }
        if(sort_order == "Objekt"){
            if(item.dataset.sort == 0){
                item.style.transform = "rotate(180deg)";
                item.dataset.sort = 1;
                filters.select_title = "down";
            }else{
                item.style.transform = "rotate(0deg)";
                item.dataset.sort = 0;
                filters.select_title = "up";
            }
        }else if(sort_order == "Ort"){
            if(item.dataset.sort == 0){
                item.style.transform = "rotate(180deg)";
                item.dataset.sort = 1;
                filters.select_location = "up";
            }else{
                item.style.transform = "rotate(0deg)";
                item.dataset.sort = 0;
                filters.select_location = "down";
            }
        }else if(sort_order == "Fläche"){ 
            if(item.dataset.sort == 0){
                item.style.transform = "rotate(180deg)";
                item.dataset.sort = 1;
                filters.select_area = "up";
            }else{
                item.style.transform = "rotate(0deg)";
                item.dataset.sort = 0;
                filters.select_area = "down";
            }
        }else{ //Preis/Miete 
            if(item.dataset.sort == 0){
                item.style.transform = "rotate(180deg)";
                item.dataset.sort = 1;
                filters.select_sort = "Preis absteigend";
            }else{
                item.style.transform = "rotate(0deg)";
                item.dataset.sort = 0;
                filters.select_sort = "Preis aufsteigend";
            }
        }  

       
        filters.ruler = 0;
        sort_estates(filters);
        
    }
    if(element.matches(".result_estates__list--title")){
        showorhide_details(0, element.parentNode.getAttribute("data-id"));
    }
    if(element.matches(".result_estates__item--picture")){
        showorhide_details(0, element.parentNode.getAttribute("data-id"));
    }
    if(element.matches(".result_estates__description--title")){
        showorhide_details(0, element.parentNode.parentNode.getAttribute("data-id"));
    }
    if(element.matches(".result_estates__btn")){
        
        var table_items = document.querySelectorAll(".result_estates__item");  
        let id = table_items.length;
        if(element.innerText == "Zurück"){
            element.innerText = "Mehr laden";
            table_items.forEach((table_item) =>{
                table_item.remove();
            })
            window.scrollTo(0, 1404);
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

            checktitlelength(table_item, id);

            
            document.querySelector(".result_estates__table").insertBefore(table_item, document.querySelector(".result_estates__table").children[id]);
            id++;
        }
    }
    forward_items:if(element.matches(".result_estates__next--forward") || element.parentNode.classList.contains("result_estates__next--forward")){ 
        

        if(pause == 1 || document.querySelector(".result_estates__next--actual").innerText == document.querySelector(".result_estates__next--total").innerText){
            break forward_items;
        }
        pause = 1;
        var tables_new = document.querySelectorAll(".result_estates__tablenext");
        if(tables_new.length == 0){
            let table_items;
            if(screen.width < 800){table_items = 3;}
            else if(screen.width < 1150){table_items = 4;}    
            else{table_items = 6;}
            let id = table_items+1;
            for(let i = 0; i < Math.ceil(all_estates.length/table_items); i++){
                let table_container = document.querySelector(".result_estates__item-b");
                let table_neu = document.createElement("ul");
                table_neu.classList.add("result_estates__tablenext");
     
                for(let i = 0; i < table_items; i++){
                    if(id > all_estates.length){
                        break;
                    }
                    
                    let item = document.createElement("li");
                    item.classList.add("result_estates__item");
                    if(i == 3){
                        item.classList.add("visibility-tablet");
                    }else if(i > 3){
                        item.classList.add("visibility-desktop");
                    }
                    item.setAttribute("data-id", id);
                    id--;

                    checktitlelength(item, id);

                  

                    table_neu.appendChild(item);


                    id = id+2;
                }

                table_neu.style.visibility = "hidden";
                table_container.insertBefore(table_neu, document.querySelector(".result_estates__btn"));
            }
        }

        tables_new = document.querySelectorAll(".result_estates__tablenext");


        let table = document.querySelector(".result_estates__table");
        
        let display_page = document.querySelector(".result_estates__next--actual");
        let pageback = document.querySelectorAll(".result_estates__next--item"); 

        if(counter_forward == 0){

           table.style.visibility = "hidden";
           // table.classList.add("result_estates__lefthidden");
    

            setTimeout (() =>{ 
                tables_new[0].style.visibility = "visible";
            },2000);




            counter_forward++;
            display_page.innerText = 2;


        }else if(counter_forward == 1){
            tables_new[0].style.visibility = "hidden";
            setTimeout (() => { 
                tables_new[1].style.visibility = "visible";
                
            },2000);
            counter_forward++;
            display_page.innerText = 3;
        }else if(counter_forward == 2){
            tables_new[1].style.visibility = "hidden";
            setTimeout (() => { 
                tables_new[2].style.visibility = "visible";
                
            },2000);
            counter_forward++;
            display_page.innerText = 4;
        }else if(counter_forward == 3){
            tables_new[2].style.visibility = "hidden";
            setTimeout (() => { 
                tables_new[3].style.visibility = "visible";
                
            },2000);
            counter_forward++;
            display_page.innerText = 5;
            pageback[1].lastElementChild.style.visibility = "hidden";
        }
        
        
        setTimeout (() => { 
            pageback[0].style.visibility = "visible";
            pause = 0;
        },1900);
        
        
    }
    back_items:if(element.matches(".result_estates__next--back") || element.parentNode.classList.contains("result_estates__next--back")){ 
        if(pause == 1){
            break back_items;
        }
        pause = 1;

        let table = document.querySelector(".result_estates__table");
        let tables_new = document.querySelectorAll(".result_estates__tablenext");
        let display_page = document.querySelector(".result_estates__next--actual");
        let pageback = document.querySelectorAll(".result_estates__next--item"); 
        
        
        if(counter_forward == 1){
            tables_new[0].style.visibility = "hidden";
            setTimeout (() => { 
                table.style.visibility = "visible";
                pageback[0].style.visibility = "hidden";
                pause = 0;
            },2000);
            counter_forward--;
            display_page.innerText = 1;
        }else if(counter_forward == 2){
            tables_new[1].style.visibility = "hidden";
            setTimeout (() => { 
                tables_new[0].style.visibility = "visible";
                pause = 0;
            },2000);
            counter_forward--;
            display_page.innerText = 2;
        }else if(counter_forward == 3){
            tables_new[2].style.visibility = "hidden";
            setTimeout (() => { 
                tables_new[1].style.visibility = "visible";
                pause = 0;
            },2000);
            counter_forward--;
            display_page.innerText = 3;
        }else if(counter_forward == 4){
            pageback[1].lastElementChild.style.visibility = "visible";
            tables_new[3].style.visibility = "hidden";
            setTimeout (() => { 
                tables_new[2].style.visibility = "visible";
                pause = 0;
            },2000);
            counter_forward--;
            display_page.innerText = 4;
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
        || event.target.matches(".result_estates__item-a") || event.target.matches(".result_estates__item-b")
        || event.target.matches(".main_estates__btn--text") || event.target.matches(".result_estates__table")
        || event.target.matches(".result_estates__item--picture") ){
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
        estate_details.setAttribute("data-id", item_details.id);
        if((item_details.estate_type.length + item_details.title.length) > 38){
            if(screen.width < 550 && screen.width > 450){
                estate_details.children[2].firstElementChild.style.fontSize = "18px";
                estate_details.children[2].lastElementChild.style.fontSize = "18px";
            }else if(screen.width < 450 && screen.width > 395){
                estate_details.children[2].firstElementChild.style.fontSize = "16px";
                estate_details.children[2].lastElementChild.style.fontSize = "16px";
            }else if(screen.width < 395){
                estate_details.children[2].firstElementChild.style.fontSize = "15px";
                estate_details.children[2].lastElementChild.style.fontSize = "15px";
            }
        }
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
        window.addEventListener("resize", () =>{
            if(screen.width < 650){
                estate_details.children[5].firstElementChild.children[4].lastElementChild.innerText = item_details.description;
            }else{
                estate_details.children[5].lastElementChild.firstElementChild.lastElementChild.innerText = item_details.description;
            }
        });
        initMap({lat:parseFloat(item_details.lat.toFixed(4)), lng:parseFloat(item_details.long.toFixed(4))}, estate_details.children[6].classList);

       
        wrapper_detailview.addEventListener("click", estatedetails_delegation);
    }else{
        window.scrollTo(0,0);
        wrapper_detailview.style.display = "none";
        heading_estatesmain.style.display = "flex";
        wrapper_estatesmain.style.display = "block";
        wrapper_estatesresult.style.display = "block"; 
    }
}

/*  Estates Main : Detailview
-------------------------------------------------------------- */

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
        let img_main = document.querySelector(".estate_details__slider--picture");
        let url_main = img_main.getAttribute("src");
        img_main.setAttribute("src", element.getAttribute("src"));
        element.setAttribute("src", url_main);
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
            advice.firstElementChild.style.display = "none";
            advice.setAttribute("data-set", "0");
        }
        contact.classList.remove("estate_details__contact--toright"); 
        
    }
    if(element.matches(".estates_actuals__list--picture") || element.matches(".estates_actuals__description--title")){
        if(element.matches(".estates_actuals__list--picture")){
            showorhide_details(0, element.parentNode.dataset.id); 
        }else{
            showorhide_details(0, element.parentNode.parentNode.dataset.id); 
        }
    }
    if(element.matches(".estates_actuals__all--svg") || element.parentNode.classList.contains("estates_actuals__all--svg")){
        filters.select_sort = "Datum absteigend";
        sort_estates(filters);
        showorhide_details(1, 0); 
    }
}

 
/*  Functions general                                                                                                                                                                           Head Heart Web <3 Consult your WebDoc about Middleware, Margin and Padding 
-------------------------------------------------------------- */
function checktitlelength(item, selector){ 

    if(screen.width < 420){
        if(all_estates[selector].title.length > 22){  
            let title_copy = all_estates[selector].title;
            all_estates[selector].title = all_estates[selector].title.substr(0,22)+"...";
            item.innerHTML = create_entrys(0, selector);
            all_estates[selector].title = title_copy;
        }else{
            item.innerHTML = create_entrys(0, selector);
        }
       
    }
    else if(screen.width > 800 && screen.width < 850){
        if(all_estates[selector].title.length > 17){  
            let title_copy = all_estates[selector].title;
            all_estates[selector].title = all_estates[selector].title.substr(0,15)+"...";
            item.innerHTML = create_entrys(0, selector);
            all_estates[selector].title = title_copy;
        }else{
            item.innerHTML = create_entrys(0, selector);
        }
    }
    else if(screen.width > 850 && screen.width < 1150){
        if(all_estates[selector].title.length > 25){    
            let title_copy = all_estates[selector].title;
            all_estates[selector].title = all_estates[selector].title.substr(0,19)+"...";
            item.innerHTML = create_entrys(0, selector);
            all_estates[selector].title = title_copy;
        }else{
            item.innerHTML = create_entrys(0, selector);
        }
    }else if(screen.width > 1150 && screen.width < 1350){
        if(all_estates[selector].title.length > 15){
            let title_copy = all_estates[selector].title;
            all_estates[selector].title = all_estates[selector].title.substr(0,14)+"...";
            item.innerHTML = create_entrys(0, selector);
            all_estates[selector].title = title_copy;
        }else{

            item.innerHTML = create_entrys(0, selector);
        }
    }else if(screen.width > 1350){
        if(all_estates[selector].title.length > 20){
            let title_copy = all_estates[selector].title;
            all_estates[selector].title = all_estates[selector].title.substr(0,18)+"...";
            item.innerHTML = create_entrys(0, selector);
            all_estates[selector].title = title_copy;
        }else{
            item.innerHTML = create_entrys(0, selector);
        }
    }else{
        item.innerHTML = create_entrys(0,selector);
    }

    
    return item;


}





function create_entrys(choice = 0, selektor){

    if(choice == 1){

        let item = `
            <img class="estates_actuals__list--picture" src="${all_estates[selektor].img}">
            <div class="estates_actuals__description">
                <p class="estates_actuals__description--text regular">${all_estates[selektor].estate_type} ${all_estates[selektor].availability}</p>
                <p class="estates_actuals__description--text regular">${all_estates[selektor].zip} ${all_estates[selektor].city}, ${all_estates[selektor].canton}</p>
                <h3 class="estates_actuals__description--title bold">${all_estates[selektor].title}</h3>
                <p class="estates_actuals__description--text regular">Fläche ${all_estates[selektor].usable_area}m², Preis: CHF ${all_estates[selektor].prize}</p>
            </div>
        `;
        
        return item;

    }else{
        
        let item = `
        <img class="result_estates__item--picture" src="${all_estates[selektor].img}">
        <div class="result_estates__description">
            <p class="result_estates__description--text regular">${all_estates[selektor].estate_type} ${all_estates[selektor].availability}</p>
            <p class="result_estates__description--text regular">${all_estates[selektor].zip} ${all_estates[selektor].city}, ${all_estates[selektor].canton}</p>
            <h3 class="result_estates__description--title bold">${all_estates[selektor].title}</h3>
            <p class="result_estates__description--text regular">Fläche ${all_estates[selektor].usable_area}m², Preis: CHF ${all_estates[selektor].prize}</p>   
        </div>
    `;
    
    return item;
    }
    
    
}






function resize_page(){
    window.addEventListener("resize", ()=>{
        location.reload();
      //  load_estates();
        return 1;
    });
}

function navigation(actual_page){

    var nav = document.querySelector(".nav");
    var ham_mobile = document.querySelector(".nav__ham");
    var close_mobile = document.querySelector(".nav__close");
    var nav_menu_mobile = document.querySelector(".nav_menu");
    nav.lastElementChild.children[actual_page].firstElementChild.firstElementChild.style.color = "white";

    nav.addEventListener("click", (event)=>{
        let element = event.target;
        if(element.matches(".nav__ham") || element.parentNode.classList.contains("nav__ham")){
            nav.style.opacity = "1";
            ham_mobile.style.display = "none";
            close_mobile.style.display = "inline-block";
            nav_menu_mobile.style.display = "block";
        }else if (element.matches(".nav__close") || element.parentNode.classList.contains("nav__close")){
            nav.style.opacity = "0.85";
            ham_mobile.style.display = "inline-block";
            close_mobile.style.display = "none";
            nav_menu_mobile.style.display = "none";
        }
    });
}

function totop(){

    window.scrollTo({top: 0, behavior: 'smooth'});
   // document.body.scrollTop = 0; // For Safari
   // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function initMap(coordinates, selector){
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
    
    if(screen.width < 700){svgMarker.scale = 1;}   
    else{svgMarker.scale = 1.2;};
    
    const marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: svgMarker,
    });

    map.addListener('center_changed', () => {
        console.log("hou");
        marker.setPosition(position);
    });
}






export {load_api, load_estates, navigation, totop, initMap, delegation_estatesmain, ruler_state, resize_page};


