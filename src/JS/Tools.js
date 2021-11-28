/* Home & House Immobilien Application : Tools
-------------------------------------------------------------- */
/* Tools : Dependencies                                                                                                                                                                         Head Heart Web <3 Consult your WebDoc about Middleware, Margin and Padding 
-------------------------------------------------------------- */
 
import { GraphQLClient, gql } from 'graphql-request';

/* Tools: Imports, Declarations, Selectors
-------------------------------------------------------------- */

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

/* GRAPHQL API
-------------------------------------------------------------- */

async function load_api(){

    const graphQLClient = new GraphQLClient('https://backend-appli.herokuapp.com/graphql');   //   'http://localhost:4000/graphql'
    const graphQLClient_save = new GraphQLClient('https://dev21-api.web-professionals.ch/graphql');
    var estates = [];  
    all_estates = [];
    var save_api = 0;

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
                img
                img1
                img2
                img3   
            }
        }
    `;
    const save_query_allentries = gql` 
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
            images{
                image_path
              }  
        }
    }
`;
    try{
        estates = await graphQLClient.request(query_allentries);
    }catch (error) {
        console.error();
        try{
            estates = await graphQLClient_save.request(save_query_allentries);
            save_api = 1;
        }catch(error){
            console.error();
            save_api = 0;
            estates = {estates: [{ id: "1", country: "Schweiz", canton: "Luzern", availability: "ab sofort", canton: "Luzern", city: "Sursee", country: "Feuerberge", created_at: "2021-11-08 15:33:14", description: "An mystischer Lage in der Nähe des berühmten Greenwhich Waldes verkaufen wir das vollständig renovierten Gebäude. Das Haus bietet mit den 13 attraktiven Räumen einem grosszügigen Umschwung am See eine nicht alltägliche und einzigartige Atmosphäre.",
                   estate_type: "zu verkaufen", id: "1", lat: 47.1715422, long: 8.1262825, prize: 900000, ref_type_id: 1, title: "Bijou am See", updated_at: "2021-11-08 15:33:14", usable_area: 300, zip: 6214, img: "../src/Images/Immobilien/photo-1464146072230-91cabc968266.jpg", img1: "../src/Images/Immobilien/photo-1472228283686-42356d789f66.jpg", img2: "../src/Images/Immobilien/photo-1491955478222-69ae25414368.jpg", img3: "../src/Images/Immobilien/photo-1551133990-60f24c1e4158.jpg" }]};
        }  
    }
    if(save_api){
        for(let estate of estates.estates){ 
            if(estate.images.length === 1){
                estate.img = estate.images[0].image_path;
                estate.countImgs = 1;
            }else if(estate.images.length === 2){
                estate.img = estate.images[0].image_path;
                estate.img1 = estate.images[1].image_path;
                estate.countImgs = 2;
            }else if(estate.images.length === 3){
                estate.img = estate.images[0].image_path;
                estate.img1 = estate.images[1].image_path;
                estate.img2 = estate.images[2].image_path;
                estate.countImgs = 3;
            }else if(estate.images.length === 4){
                estate.img = estate.images[0].image_path;
                estate.img1 = estate.images[1].image_path;
                estate.img2 = estate.images[2].image_path;
                estate.img3 = estate.images[3].image_path;
                estate.countImgs = 4;
            }else if(estate.images.length === 5){
                estate.img = estate.images[0].image_path;
                estate.img1 = estate.images[1].image_path;
                estate.img2 = estate.images[2].image_path;
                estate.img3 = estate.images[3].image_path;
                estate.img4 = estate.images[4].image_path;
                estate.countImgs = 5;
            };
            all_estates.push(estate);
        }
    }else{
        for(let estate of estates.estates){
            let counter = 0;
            if(estate.img){counter++}
            if(estate.img1){counter++}
            if(estate.img2){counter++}
            if(estate.img3){counter++}
            if(estate.img4){counter++}
            estate.countImgs = counter;
            all_estates.push(estate);
        }
    }
    all_estates.sort( (a, b) => {
        return a.id > b.id;
    });
    all_estates_origin = all_estates;
}   

/* Home : Main-Delegation
-------------------------------------------------------------- */

function delegation_estatesmain(event){
    var pageback = document.querySelectorAll(".result_estates__next--item");   
    var element = event.target;
    dropdown: if(element.matches(".main_estates__select--main") || element.matches(".main_estates__select--svg") || element.parentNode.classList.contains("main_estates__select--svg") || element.matches(".main_estates__select--text")){ 
        let dropdown = element.parentNode.lastElementChild;
        let input_icon = element.lastElementChild;
        if(element.classList.contains("main_estates__select--text")){
            dropdown = element.parentNode.parentNode.lastElementChild;
            input_icon = element.parentNode.lastElementChild;
        }else if(element.classList.contains("main_estates__select--svg")){
            dropdown = element.parentNode.parentNode.lastElementChild;
            input_icon = element;
        }else if(element.nodeName == "path"){
            if(element.parentNode.classList == "main_estates__select--svg"){
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
    if(element.matches(".main_estates__select--item")){
        element.parentNode.parentNode.firstElementChild.firstElementChild.innerText = element.firstElementChild.innerText;
        element.parentNode.style.display = "none";
        element.parentNode.parentNode.firstElementChild.lastElementChild.style.transform = "rotate(0deg)";
    }
    if(element.matches(".main_estates__select--textdropdown")){
        element.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.innerText = element.innerText;
        element.parentNode.parentNode.style.display = "none";
        element.parentNode.parentNode.parentNode.firstElementChild.lastElementChild.style.transform = "rotate(0deg)";
    } 
    if(element.matches(".main_estates__ruler--slider")){
       ruler_state();
    } 
    if(element.matches(".main_estates__btn") || element.matches(".main_estates__btn--text")){
        let all_inputs = document.querySelectorAll(".main_estates__select--main");
        filters.select_what = all_inputs[0].innerText;
        filters.select_where = all_inputs[1].innerText;
        filters.select_sort = all_inputs[2].innerText;
        if(screen.width < 800){
            filters.ruler = document.querySelectorAll(".main_estates__ruler--slider")[1].value;
        }else{
            filters.ruler = document.querySelectorAll(".main_estates__ruler--slider")[0].value;
        }
        sort_estates(filters);
        document.querySelector(".main_estates__btn").scrollIntoView({
            behavior: 'smooth'
        });          
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
    if(element.matches(".result_estates__list--svg") || element.parentNode.parentNode.classList.contains("result_estates__list--svg") || element.parentNode.classList.contains("result_estates__list--entrytop")){
        filters = { select_what : "Alle Objekte", select_where : "Alle Orte", select_sort: "Sortierung", ruler: "none", select_area: "none", select_title:"none", select_location: "none"};
        var sort_order;
        var item;
        if(element.classList.contains("result_estates__list--svg")){
            sort_order = element.parentNode.firstElementChild.innerText;
            item = element;
        }else if(element.parentNode.classList.contains("result_estates__list--entrytop")){ 
            sort_order = element.innerText
            item = element.parentNode.children[1];
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
/* Wenn das Icon für Preis/Miete gewählt wird */ 
        }else{  
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
        console.log(filters);
        sort_estates(filters);
    }
    if(element.matches(".result_estates__list--title") && element.parentNode.classList.contains("result_estates__list--entry")){
        showorhide_details(0, element.parentNode.getAttribute("data-id"));
        slider_visuals();
        
    }
    if(element.matches(".result_estates__item--picture")){
        showorhide_details(0, element.parentNode.getAttribute("data-id"));
        slider_visuals();
    }
    if(element.matches(".result_estates__description--title")){
        showorhide_details(0, element.parentNode.parentNode.getAttribute("data-id"));
        slider_visuals();
    }
    if(element.matches(".result_estates__btn")){  
        var table_items = document.querySelectorAll(".result_estates__item");  
        let id = table_items.length;
        if(element.innerText == "Zurück"){
            element.innerText = "Mehr laden";
            table_items.forEach((table_item) =>{
                table_item.remove();
            })
            document.querySelector(".main_estates__options--iconlist").scrollIntoView({
                behavior: 'smooth'
            }); 
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
        table_items = document.querySelectorAll(".result_estates__item"); 
        if(table_items.length == all_estates.length){
            element.innerText = "Zurück";
        }
    }
    forward_items:if(element.matches(".next") || element.matches(".result_estates__next--forward") || element.parentNode.classList.contains("result_estates__next--forward")){ 
        if(pause == 1 || document.querySelector(".result_estates__next--actual").innerText == document.querySelector(".result_estates__next--total").innerText){
            break forward_items;
        }
        pause = 1;
/* Auswahl nächste Immobilien: alle Immobilien werden im Hintergrund geladen (hidden) */ 
        var tables_new = document.querySelectorAll(".result_estates__tablenext");
        if(tables_new.length == 0){
            let table_items;
            if(screen.width < 800){table_items = 3;}
            else if(screen.width < 1150){table_items = 4;}    
            else{table_items = 6;}
            let id = table_items+1;
            for(let i = 1; i < Math.ceil(all_estates.length/table_items); i++){
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
/* Hier wird die Transition gestartet gemäss Zähler, Verzögerungen sind notwendig für die Browser-Engine */ 
        if(counter_forward == 0){
           table.style.right = "110%";
           tables_new[0].style.left = "95%";
           setTimeout(() =>{ 
            tables_new[0].style.left = "0%";
            },1);
           tables_new[0].style.visibility = "visible";
            counter_forward++;
            display_page.innerText = 2;
        }else if(counter_forward == 1){
            tables_new[0].style.left = null;
            tables_new[0].style.right = "0%"; 
            setTimeout(() =>{ 
                tables_new[0].style.right = "110%";
            },1);
            tables_new[1].style.left = "95%";
            setTimeout(() =>{ 
                tables_new[1].style.left = "0%";
            },1);
           tables_new[1].style.visibility = "visible";    
           counter_forward++;
           display_page.innerText = 3;     
        }else if(counter_forward == 2){
            tables_new[1].style.left = null;
            tables_new[1].style.right = "0%";
            setTimeout(() =>{ 
                tables_new[1].style.right = "110%";
            },1);
            tables_new[2].style.left = "95%";
            setTimeout(() =>{ 
                tables_new[2].style.left = "0%";
            },1);
            tables_new[2].style.visibility = "visible";
            counter_forward++;
            display_page.innerText = 4;
        }else if(counter_forward == 3){
            tables_new[2].style.left = null;
            tables_new[2].style.right = "0%";
            setTimeout(() =>{ 
                tables_new[2].style.right = "110%";
            },1);
            tables_new[3].style.left = "95%";
            setTimeout(() =>{ 
                tables_new[3].style.left = "0%";
            },1);
            tables_new[3].style.visibility = "visible";
            counter_forward++;
            display_page.innerText = 5;
        }  
        setTimeout(() => { 
            pageback[0].style.visibility = "visible";
            pageback[0].style.cursor = "pointer";
            pause = 0;
        },2000);
        if(document.querySelector(".result_estates__next--actual").innerText == document.querySelector(".result_estates__next--total").innerText){
            pageback[1].lastElementChild.style.visibility = "hidden";
        }    
    }
    back_items:if(element.matches(".back") || element.matches(".result_estates__next--back") || element.parentNode.classList.contains("result_estates__next--back")){ 
/* Auswahl zurück : es wird die Transition gemäss Zähler(counter_forward) gestartet, Verzögerungen notwendig für die Browser-Engine */       
        if(pause == 1){
            break back_items;
        }
        pause = 1;
        let table = document.querySelector(".result_estates__table");
        let tables_new = document.querySelectorAll(".result_estates__tablenext");
        let display_page = document.querySelector(".result_estates__next--actual");
        pageback[1].lastElementChild.style.visibility = "visible";
        if(counter_forward == 1){ 
            if(tables_new[0].style.right = "0%"){
                tables_new[0].style.right = null;
                tables_new[0].style.left = "0%";
            }
            setTimeout(() =>{ 
                tables_new[0].style.left = "95%";
            },1);
            pageback[0].style.visibility = "hidden";
            pageback[0].style.cursor = null;
            table.style.right = "0%";
            counter_forward--;
            display_page.innerText = 1;
        }else if(counter_forward == 2){
            if(tables_new[1].style.right = "0%"){
                tables_new[1].style.right = null;
                tables_new[1].style.left = "0%";
            }
            setTimeout(() =>{ 
                tables_new[1].style.left = "95%";
            },1);
            tables_new[0].style.right = "0%";
            counter_forward--;
            display_page.innerText = 2;
        }else if(counter_forward == 3){
            if(tables_new[2].style.right = "0%"){
                tables_new[2].style.right = null;
                tables_new[2].style.left = "0%";
            }
            setTimeout(() =>{ 
                tables_new[2].style.left = "95%";
            },1);
            tables_new[1].style.right = "0%";
            counter_forward--;
            display_page.innerText = 3;
        }else if(counter_forward == 4){
            tables_new[3].style.left = "95%";
            tables_new[2].style.right = "0%";
            counter_forward--;
            display_page.innerText = 4;
        }
        setTimeout(() => { 
            pause = 0;
        },2000);
    }
    if(element.matches("path") || element.matches("rect")){ 
        if(element.parentNode.classList.contains("footer__totop")){
            totop();
        }
    }
}

/*  Home : Functions
-------------------------------------------------------------- */

function load_estates(){
/* Am Anfang werden alle bereits geladenen Elemente/Immobilien gelöscht und ein Reset der Transition wird gemacht,
   dann werden alle Elemente geladen.   
/* Variablen table_loaded und first_table sind die "Container" für Immobilien */ 
    let tables_loaded = document.querySelectorAll(".result_estates__tablenext");
    let first_table = document.querySelector(".result_estates__table");
    let list = Array.from(document.querySelectorAll(".result_estates__list--entry"));
    let btn = document.querySelector(".result_estates__btn");
    let list_estates = document.querySelector(".result_estates__list");
    let pages_forward = document.querySelectorAll(".result_estates__next--item");
    let noresults = document.querySelectorAll(".result_estates__empty");
    first_table.style.transitionDuration = "0s";
    first_table.style.visibility = "visible";
    first_table.style.right = null;
    btn.style.display = "flex";
    list_estates.style.display = "block";
    list.shift();
    counter_forward = 0;
    for(let entry of list){
        entry.remove();
    } 
    for(let table_loaded of tables_loaded){
        table_loaded.remove();
    }
    first_table.innerHTML = "";
    if(document.querySelector(".result_estates__item-b").firstElementChild.classList.contains("result_estates__animation")){
        document.querySelector(".result_estates__item-b").firstElementChild.remove();
    }
    if(noresults != null){
        noresults.forEach((noresult) =>{
            noresult.remove();
        });     
    }
    document.querySelector(".result_estates__next--actual").innerText = 1;
    pages_forward[0].style.visibility = "hidden";
    pages_forward[1].lastElementChild.style.visibility = "visible";
    let displaypages = document.querySelector(".result_estates__next--total");
/* Wenn der Filter keine Ergebnisse hat wird hier ein Text generiert und eingefügt */   
    if(all_estates == 0){  
        let item = document.createElement("h1");
        item.classList.add("result_estates__empty");
        item.innerText = "Ihre Suche liefert keine Ergebnisse";
        item.style.marginTop = "9px";
        first_table.appendChild(item);
        let item2 = document.createElement("h1");
        item2.classList.add("result_estates__empty");
        item2.innerText = "Ihre Suche liefert keine Ergebnisse";
        list_estates.style.display = "none";
        document.querySelector(".result_estates__item-a").appendChild(item2);
        displaypages.innerText = 1;
        btn.style.display = "none";
        pages_forward[1].lastElementChild.style.visibility = "hidden";
    }else{
/* Die neuen Immobilien/Filterergebnisse werden geladen, entsprechend der Bildschirmauflösung */  
        load_list();   
        let table_items;
        if(screen.width < 800){table_items = 3;}
        else if(screen.width < 1150){table_items = 4;}    
        else{table_items = 6;}
        displaypages.innerText = Math.ceil(all_estates.length / table_items);
        for(let i = 0; i < table_items; i++){
            if(all_estates.length < i+1){
                break;
            }
            let item = document.createElement("li");
            item.classList.add("result_estates__item");
            if(i == 3 ){
                item.classList.add("visibility-tablet");
            }
            if(i > 3){
                item.classList.add("visibility-desktop");
            }
            item.setAttribute("data-id", i+1);   
            checktitlelength(item, i);
            first_table.appendChild(item);
        }
        if(table_items == 3 && all_estates.length < 3){
            btn.style.display = "none";
        }
        if(all_estates.length == table_items || all_estates.length < table_items){
            pages_forward[1].lastElementChild.style.visibility = "hidden";
        }   
        if(screen.width > 1150 && all_estates.length == 2){    
            let item = document.createElement("li");
            item.classList.add("result_estates__item");
            item.style.visibility = "hidden";
            first_table.appendChild(item);
        } 
        setTimeout (() =>{ 
            first_table.style.transitionDuration = "2s";
        },20);
    }
}
        
function load_estates_newest(){
    let container_newest = document.querySelector("#estates_actuals");
    let newest_estates = document.createElement("ul"); 
    newest_estates.classList.add("estates_actuals__list");   
/* Die Immobilien(all_estates) werden sortiert nach neuste zuerst und geladen (In Section Detailansicht) */
    all_estates.sort((a, b) => {                
        return a.updated_at - b.updated_at;  
    });
    for(let i = 0; i < 3; i++){
        if(i == all_estates.length){
            break;
        }
        let li = document.createElement("li");
        li.classList.add("estates_actuals__list--item");
        li.setAttribute("data-id", all_estates[i].id);
        li.innerHTML = create_entrys(1,i);
        newest_estates.appendChild(li);
    }
    container_newest.insertBefore(newest_estates, document.querySelector(".estates_actuals__all"));
    all_estates.sort( (a, b) => {
        return a.id > b.id;
    });
}

function load_list(){
/* Hier wird das Icon auf die richtige Position gesetzt, und entsprechend der Sortierung gesetzt */  
    let icon_price = document.querySelector(".icon_list"); 
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
/* Ab hier wird die ganze Liste mit den Immbilien Einträgen erstellt inkl. Anpassung der Titellänge  */
    for(let estate of all_estates){ 
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

/* In dieser Funktion wird die Titellänge entsprechend der Bildschirmauflösung angepasst */ 
function checktitlelength(item, selector){ 
    var title_copy = all_estates[selector].title;
    if(screen.width < 420){
        if(all_estates[selector].title.length > 22){  
            all_estates[selector].title = all_estates[selector].title.substr(0,22)+"...";
            item.innerHTML = create_entrys(0, selector);   
        }else{
            item.innerHTML = create_entrys(0, selector);
        }
    }else if(screen.width > 799 && screen.width < 850){
        if(all_estates[selector].title.length > 17){  
            all_estates[selector].title = all_estates[selector].title.substr(0,15)+"...";
            item.innerHTML = create_entrys(0, selector);
        }else{
            item.innerHTML = create_entrys(0, selector);
        }
    }else if(screen.width > 849 && screen.width < 1001){
        if(all_estates[selector].title.length > 17){    
            all_estates[selector].title = all_estates[selector].title.substr(0,16)+"...";
            item.innerHTML = create_entrys(0, selector);
        }else{
            item.innerHTML = create_entrys(0, selector);
        }
    }else if(screen.width > 1000 && screen.width < 1150){
        if(all_estates[selector].title.length > 20){    
            all_estates[selector].title = all_estates[selector].title.substr(0,20)+"...";
            item.innerHTML = create_entrys(0, selector);  
        }else{
            item.innerHTML = create_entrys(0, selector);
        }
    }else if(screen.width > 1149 && screen.width < 1351){
        let availability_copy = all_estates[selector].availability;
        if(all_estates[selector].availability == "nach Vereinbarung"){
            all_estates[selector].availability = "nach Vereinbar...";
        }
        if(all_estates[selector].title.length > 15){     
            all_estates[selector].title = all_estates[selector].title.substr(0,13)+"...";
            if(all_estates[selector].prize > 9999){
                item.innerHTML = create_entrys(2, selector);
            }else{
                item.innerHTML = create_entrys(0, selector);
            }      
        }else{
            if(all_estates[selector].prize > 9999){
                item.innerHTML = create_entrys(2, selector);
            }else{
                item.innerHTML = create_entrys(0, selector);
            }
        }
        all_estates[selector].availability = availability_copy;
    }else if(screen.width > 1350 && screen.width < 1501){
        if(all_estates[selector].title.length > 19){
            all_estates[selector].title = all_estates[selector].title.substr(0,18)+"...";
            item.innerHTML = create_entrys(0, selector);
        }else{
            item.innerHTML = create_entrys(0, selector);
        }
    }else if(screen.width > 1500 && screen.width < 1600){
        if(all_estates[selector].title.length > 26){
            all_estates[selector].title = all_estates[selector].title.substr(0,19)+"...";
            item.innerHTML = create_entrys(0, selector);
        }else{
            item.innerHTML = create_entrys(0, selector);
        }
    }else if(screen.width > 1600){
        if(all_estates[selector].title.length > 26){
            all_estates[selector].title = all_estates[selector].title.substr(0,22)+"...";
            item.innerHTML = create_entrys(0, selector);
        }else{
            item.innerHTML = create_entrys(0, selector);
        }
    }else{
        item.innerHTML = create_entrys(0,selector);
    }
    all_estates[selector].title = title_copy;
    return item;
}

/* Home : Estate Detail View 
-------------------------------------------------------------- */

function estatedetails_delegation(event){
    let contact = document.querySelector(".estate_details__contact");
    let imgs = document.querySelectorAll(".estate_details__images--image");
    let img = document.querySelector(".estate_details__slider--picture");
    let img_index = img.dataset.index; 
    let element = event.target;
    if(element.matches(".estate_details__nav--svg") || element.matches(".estate_details__nav--path") || element.matches(".estate_details__nav--text")){
        showorhide_details(1);
    }
    if(element.matches(".estate_details__slider--left") || element.matches(".slider_left")){
        if(img_index == 0){
            img.setAttribute("src", imgs[imgs.length-1].getAttribute("src"));
            img.setAttribute("data-index", imgs.length);
        }
        else if(img_index == 1){
            img.setAttribute("src", img.getAttribute("data-img"));
            img.setAttribute("data-index", 0);
        }else{
            img.setAttribute("src", imgs[img_index-2].getAttribute("src"));
            img.setAttribute("data-index", parseInt(img_index)-1);
        }
    }
    if(element.matches(".estate_details__slider--right") || element.matches(".slider_right")){
        if(img_index == imgs.length){
            img.setAttribute("src", img.getAttribute("data-img"));
            img.setAttribute("data-index", 0);
        }else{
            img.setAttribute("src", imgs[img_index].getAttribute("src"));
            img.setAttribute("data-index", parseInt(img_index)+1);
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
        let inputs = document.querySelectorAll("input");
        inputs = Array.from(inputs).slice(2, inputs.length);
        for(let input of inputs){
            input.value = "";
        }
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
        let mail = `mailto:HomeHouseOffice@mail.com?subject=Anfrage Immobilie: ${contact.children[2].lastElementChild.innerText}&body=`+
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
/* Auslöser für die Transition */ 
        contact.classList.remove("estate_details__contact--toright"); 
    }
    if(element.matches(".estates_actuals__list--picture") || element.matches(".estates_actuals__description--title")){
        if(element.matches(".estates_actuals__list--picture")){
            showorhide_details(0, element.parentNode.dataset.id); 
        }else{
            showorhide_details(0, element.parentNode.parentNode.dataset.id); 
        }
    }
    if(element.matches(".estates_actuals__all--text") ||element.matches(".estates_actuals__all--svg") || element.parentNode.classList.contains("estates_actuals__all--svg")){
        filters.select_sort = "Datum absteigend";
        sort_estates(filters);
        showorhide_details(1, 0); 
    }
}

/*  Home : Estate Detail View Functions
-------------------------------------------------------------- */

function slider_visuals(){

    let slider = document.querySelector(".estate_details__slider");
    var slider_svg = document.querySelectorAll(".estate_details__slider--svg");
    var element_left = document.querySelector(".estate_details__slider--left");
    var element_right = document.querySelector(".estate_details__slider--right");

    slider.addEventListener("mouseover", (event) => { 
        if(event.target == element_left || event.target.classList.contains("slider_left") ){
            slider_svg[0].style.stroke = "black";
            element_left.style.backgroundColor = "rgba(146, 185, 175, 1)";
            element_left.style.opacity = "0.8";
        }
        if(event.target == element_right || event.target.classList.contains("slider_right") ){
            slider_svg[1].style.stroke = "black";
            element_right.style.backgroundColor = "rgba(146, 185, 175, 1)";
            element_right.style.opacity = "0.8";
        }  
    })
    slider.addEventListener("mouseout", (event) => {
        if(event.target == element_left){
            slider_svg[0].style.stroke = "white";
            element_left.style.backgroundColor = "white";
            element_left.style.opacity = "0.5";
        }else{
            slider_svg[1].style.stroke = "white";
            element_right.style.backgroundColor = "white";
            element_right.style.opacity = "0.5";
        }
    })
}

/* News: Delegation                                                                                                                                                                          Head Heart Web <3 Consult your WebDoc about Middleware, Margin and Padding 
-------------------------------------------------------------- */

function delegation_news(event){
    let wrapper_news = document.querySelector(".main-actual");
    let wrapper_news_article = document.querySelector(".main-actual-details");
    let element = event.target;
    if(element.matches(".main-actual__list--btn")){
        let news_detail_title = {
            0 : {title : "Grossprojekt Home & House"}, 
            1 : {title : "Home & House Umzug"},
            2 : {title : "Neue Partnerschaft"},
            3 : {title : "Projekt Business-Hotel"},
        }
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
        window.scrollTo(0,0);
        wrapper_news.style.display = "block";
        wrapper_news_article.style.display = "none";
    }
    if(element.matches("path") || element.matches("rect")){ 
        if(element.parentNode.classList.contains("footer__totop")){
            totop();
        }
    }
}

/*  Functions general-use                                                                                                                                                                           Head Heart Web <3 Consult your WebDoc about Middleware, Margin and Padding 
-------------------------------------------------------------- */

function sort_estates(filters){
    all_estates = all_estates_origin;
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
            if(estate.estate_type == "zu vermieten"){
                return 1;
            }else{
                return 0;
            }    
        });
    }else if(filters.ruler == 2){
        all_estates = all_estates.filter(estate =>{
            if(estate.estate_type == "zu verkaufen"){
                return 1;
            }else{
                return 0;
            }    
        });
    }
    if(filters.select_sort != "Auswählen"){
        
        if(filters.select_sort == "Preis aufsteigend"){    
            all_estates.sort((a, b) => {
                return a.prize - b.prize;
            });
            icon_list = 1;
            console.log(all_estates);
        }else if(filters.select_sort == "Preis absteigend"){
            all_estates.sort((a, b) => {
                return a.prize - b.prize;
            });
            all_estates.reverse();
            icon_list = 2;
        }else{
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

/* Ab hier werden die Immobilien nach Titel Sortiert, zuerst wird gefiltert ob der Titel eine Zahl enthält.
 Wenn die Auswahl abwärts ist : Zuerst die Immobilien mit den hoechsten Wertigkeit nach Zimmeranzahl dann die Immobilen nach Alphabetischer sortierung A-Z.
 Wenn die Auswahl aufwärts ist : Zuerst die Immobilen nach Alphabetischer sortierung Z-A, danach die Immobilien nach Zimmeranzahl niedrigster zuerst. */

    if(filters.select_title != "none"){ 
        var estates_numbered = [];
        var estates_letters = [];
        for(let estate of all_estates){      
            if(/[0-9]/.test(estate.title)){
                estates_numbered.push(estate);
            }else{
                estates_letters.push(estate);
            }
        }
        if(filters.select_title == "down"){
            estates_numbered.sort((a, b) => {    
                return a.title < b.title; 
            });
            estates_letters.sort((a, b) => {    
                return a.title > b.title;   
            });
            all_estates = estates_numbered.concat(estates_letters);
        }else{
            estates_numbered.sort((a, b) => {    
                return a.title < b.title; 
            });
            estates_letters.sort((a, b) => {    
                return a.title < b.title;  
            });
            all_estates = estates_letters.concat(estates_numbered);   
        }
    }
/* Sortierung nach Ort/PLZ */
    if(filters.select_location != "none"){    
        all_estates.sort((a, b) => {    
            return a.zip - b.zip;  
        }); 
        if(filters.select_location == "up"){
            all_estates.reverse();
        }
    }
/* Sortierung nach Fläche */
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
    console.log(all_estates);
    load_estates();
}

function showorhide_details(choice, id = 0){
    let heading_estatesmain = document.querySelector(".heading");
    let wrapper_estatesmain = document.querySelector("#main_estates");
    let wrapper_estatesresult = document.querySelector("#result_estates");
    var wrapper_detailview = document.querySelector("#main_details");
    var estate_details = document.querySelector("#estate_details");
    if(choice == 0){
/* Detail Ansicht wird geladen */  
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
/* Titellänge wird geprüft und gegebenenfalls angepasst */  
        if((item_details.estate_type.length + item_details.title.length) > 29){
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
/* Die Details werden geladen */ 
        estate_details.children[2].firstElementChild.innerText = item_details.estate_type;
        estate_details.children[2].lastElementChild.innerText = item_details.title;
        estate_details.children[3].lastElementChild.firstElementChild.setAttribute("src", item_details.img);
        estate_details.children[3].lastElementChild.firstElementChild.setAttribute("data-index", 0);
        estate_details.children[3].lastElementChild.firstElementChild.setAttribute("alt", 'estate_img_'+item_details.title);
        estate_details.children[3].lastElementChild.firstElementChild.setAttribute("data-img", item_details.img);
        estate_details.children[4].innerHTML = "";
        if(item_details.countImgs === 3){
            estate_details.children[4].innerHTML = `
                    <img class="estate_details__images--image" src=${item_details.img1} data-index="1" alt="estate_img_1"> 
                    <img class="estate_details__images--image" src=${item_details.img2} data-index= "2" alt="estate_img_2">  
                `
        }else if(item_details.countImgs === 4){
            estate_details.children[4].innerHTML = `
                    <img class="estate_details__images--image" src=${item_details.img1} data-index= "1" alt="estate_img_1" >
                    <img class="estate_details__images--image" src=${item_details.img2} data-index= "2" alt="estate_img_2">
                    <img class="estate_details__images--image" src=${item_details.img3} data-index= "3" alt="estate_img_3">  
                `
        }
        else if(item_details.countImgs === 5){
            estate_details.children[4].innerHTML = `
                    <img class="estate_details__images--image" src=${item_details.img1} data-index= "1" alt="estate_img_1">
                    <img class="estate_details__images--image" src=${item_details.img2} data-index= "2" alt="estate_img_2">
                    <img class="estate_details__images--image" src=${item_details.img3} data-index= "3" alt="estate_img_3">
                    <img class="estate_details__images--image" src=${item_details.img4} data-index= "4" alt="estate_img_4">  
                `
        }else{
            estate_details.children[4].innerHTML = `
                    <img class="estate_details__images--image" src=${item_details.img1} data-index= "1" alt="estate_img_1"> 
                `
        }
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
        initMap({lat:parseFloat(item_details.lat.toFixed(4)), lng:parseFloat(item_details.long.toFixed(4))}, estate_details.children[6].classList, item_details);
        wrapper_detailview.addEventListener("click", estatedetails_delegation);
    }else{  
        wrapper_detailview.style.display = "none";
        heading_estatesmain.style.display = "flex";
        wrapper_estatesmain.style.display = "block";
        wrapper_estatesresult.style.display = "block";
        if(screen.width < 650){
            document.querySelector(".main_estates__options").scrollIntoView();
        }else{
            document.querySelector(".main_estates__btn").scrollIntoView();
        } 
    }
}

function create_entrys(choice, selektor){
    if(choice == 0){
        let item = `
            <img class="result_estates__item--picture" src="${all_estates[selektor].img}" alt="${all_estates[selektor].title}_img_main">
            <div class="result_estates__description">
                <p class="result_estates__description--text regular">${all_estates[selektor].estate_type} ${all_estates[selektor].availability}</p>
                <p class="result_estates__description--text regular">${all_estates[selektor].zip} ${all_estates[selektor].city}, ${all_estates[selektor].canton}</p>
                <h3 class="result_estates__description--title bold">${all_estates[selektor].title}</h3>
                <p class="result_estates__description--text regular">Fläche ${all_estates[selektor].usable_area}m², Preis: CHF ${all_estates[selektor].prize}</p>   
            </div>
        `;
        return item;
    }else if(choice == 1){
        let item = `
            <img class="estates_actuals__list--picture" src="${all_estates[selektor].img}" alt="${all_estates[selektor].title}_img_main">
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
            <img class="result_estates__item--picture" src="${all_estates[selektor].img}" alt="${all_estates[selektor].title}_img_main">
            <div class="result_estates__description">
                <p class="result_estates__description--text regular">${all_estates[selektor].estate_type} ${all_estates[selektor].availability}</p>
                <p class="result_estates__description--text regular">${all_estates[selektor].zip} ${all_estates[selektor].city}, ${all_estates[selektor].canton}</p>
                <h3 class="result_estates__description--title bold">${all_estates[selektor].title}</h3>
                <p class="result_estates__description--text regular">Fläche ${all_estates[selektor].usable_area}m²</p>   
                <p class="result_estates__description--text regular">Preis: CHF ${all_estates[selektor].prize}</p> 
            </div>
        `;
        return item;
    }
}

function resize_page(){
    window.addEventListener("resize", ()=>{
        location.reload();
        load_estates();
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
            nav.firstElementChild.style.opacity = "1";
            ham_mobile.style.display = "none";
            close_mobile.style.display = "inline-block";
            nav_menu_mobile.style.display = "block";
        }else if (element.matches(".nav__close") || element.parentNode.classList.contains("nav__close")){
            nav.firstElementChild.style.opacity = "0.85";
            ham_mobile.style.display = "inline-block";
            close_mobile.style.display = "none";
            nav_menu_mobile.style.display = "none";
        }
    });
}

function totop(){
    document.querySelector("body").scrollIntoView({
        behavior: 'smooth'
    });
}

function initMap(coordinates, selector, estate){
    let map;
    map = new google.maps.Map(document.querySelector(`.${selector}`), {
        center: coordinates,
        zoom: 17,
        mapId: "967c67b3b3520cf4",
        disableDefaultUI: true,
        gestureHandling: "none",
        zoomControl: false,
    });
    const svgMarker = {
        path: "M18 0C8.325 0 0.5 7.825 0.5 17.5C0.5 30.625 18 50 18 50C18 50 35.5 30.625 35.5 17.5C35.5 7.825 27.675 0 18 0ZM18 23.75C14.55 23.75 11.75 20.95 11.75 17.5C11.75 14.05 14.55 11.25 18 11.25C21.45 11.25 24.25 14.05 24.25 17.5C24.25 20.95 21.45 23.75 18 23.75Z",
        fillColor: "black",
        fillOpacity: 1,
        scale: 1.2,
        anchor: new google.maps.Point(0, 38),
    }; 
    const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: svgMarker,
    });

    if(screen.width < 700){svgMarker.scale = 1;}   
    else{svgMarker.scale = 1.2;};

    var infowindow = new google.maps.InfoWindow({
        content: estate.zip+" "+estate.city
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

}

export {load_api, load_estates, load_estates_newest, navigation, resize_page, ruler_state, delegation_estatesmain, delegation_news, totop, initMap};


