:Ansatz1 

   let tables_next = document.querySelectorAll(".result_estates__tablenext");
        let table = document.querySelector(".result_estates__table");
        
        for(let table_next of tables_next){
            if(table_next.classList.contains("actual_visible")){

              //  table_next.classList.value = "";

                table_next.classList.remove("actual_visible");
                table_next.classList.remove("result_estates__righthidden");
                table_next.classList.remove("result_estates__left");
                table_next.style.removeProperty("left");
                table_next.style.right = "0%";

                table_next.classList.add("result_estates__lefthidden");
                
              //  table_next.style.removeProperty("left");
              //  table_next.style.right="110%";

            }
        }

        if(table.classList.contains("result_estates__lefthidden")){
            console.log(tables_next[0]);
          //  tables_next[0].classList.add("result_estates__right");
           // tables_next[0].classList.remove();
        //    tables_next[0].classList.remove("result_estates__left");
         //   tables_next[0].classList.remove("result_estates__righthidden");

        

       //     tables_next[0].classList.add("result_estates__lefthidden");
         //   console.log(tables_next[0]);
        }


        table.classList.add("result_estates__right");
        setTimeout (() => {
            table.classList.add("result_estates__lefthidden");
        },10);
        document.querySelector(".result_estates__next--actual").innerText = "2";

        if(tables_next.length != 1){
            let all_items = items_visible();
            console.log(all_items);
            let id = all_items[all_items.length-1].dataset.id;
            var items_new = [];
            for(let i = 0; i < all_items.length; i++){
                let item = `
                    <li class="result_estates__item" data-id="${(id+1)}">
                        <img class="result_estates__item--picture" src="${all_estates[id].img}">
                        <div class="result_estates__description">
                            <p class="result_estates__description--text regular">${all_estates[id].estate_type} ${all_estates[id].availability}</p>
                            <p class="result_estates__description--text regular">${all_estates[id].zip} ${all_estates[id].city}, ${all_estates[id].canton}</p>
                            <h3 class="result_estates__description--title bold">${all_estates[id].title}</h3>
                            <p class="result_estates__description--text regular">Fläche ${all_estates[id].usable_area}m², Preis: CHF ${all_estates[id].prize}</p>   
                        </div>
                    </li>`;
                items_new.push(item);
                id++;
                }
            items_new = items_new.join('');
            let table_nextitems = document.createElement("ul");
            table_nextitems.classList.add("actual_visible");
            table_nextitems.classList.add("result_estates__tablenext");
            table_nextitems.classList.add("result_estates__righthidden");
            table_nextitems.innerHTML = items_new;
            document.querySelector(".result_estates__item-b").insertBefore(table_nextitems, document.querySelector(".result_estates__btn"));
            setTimeout (() => {
                table_nextitems.style.left = "0%";
            },10);
            let pageback = document.querySelectorAll(".result_estates__next--item");
            pageback[0].style.visibility = "visible";
        }else{
           // tables_next[0].classList.add("result_estates__left");
        };
        
       /* 
        
        let table_middle = document.querySelectorAll(".result_estates__tablenext");
        if(table_middle.length > 0){
            table_middle[0].classList.add("result_estates__table--toleft");
        }
        
        
        
        
        if(all_items.length == 8){
            all_items = all_items.slice(0,3);
            console.log(all_items.length);
        }
        console.log(all_items);
        
        */

ZURueck

          /*
        let table = document.querySelector(".result_estates__table");
        let table_middle = document.querySelector(".result_estates__tablenext");

        table_middle.classList.remove("result_estates__left");
        table.classList.remove("result_estates__lefthidden");
        document.querySelector(".result_estates__next--actual").innerText = "1";
        */