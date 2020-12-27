const menu ={
    items:["SOBRE", "ENSINO", "PROFESSORES","MODALIDADES", "VOZ DOS ALUNOS"],
    itemsID:["SOBRE", "ENSINO", "PROFESSORES","MODALIDADES", "VOZDOSALUNOS"],
    itemSelect: null,
    isClickedButtom:false,
    screenSize:1000,
    listItems: Array.from(document.querySelectorAll(".menu__items"))
}
menu.listItems.forEach((item)=>
item.addEventListener("click", () =>{
    selectItemList(item);
}));

// ITEM MENU SELECT 
function selectItemList(item){
    if(menu.itemSelect!==null){
        menu.itemSelect.classList.remove("select");
    }
        menu.itemSelect = item;
        item.classList.add("select");
}

// MENU MAX WIDTH 1000PX
document.querySelector("#header__list").addEventListener("click", () =>{
    openMenu(menu);
}); 

function openMenu(menu){
    const header = document.querySelector("#header");
    if(menu.isClickedButtom===false){
    const menuHeader = document.createElement('div');
    menuHeader.classList.add("header__menu--width")
    const list = document.createElement('ul');
    list.classList.add("menu");
    list.classList.add("flex__spacearound");

    for(let item in menu.items){
        const itemList = document.createElement('li');
        itemList.classList.add("menu__items--width");
        itemList.classList.add("flex__spacearound");
        itemList.addEventListener("click", () =>{
            selectItemList(itemList);
        });
        const linkList = document.createElement('a');
        linkList.classList.add("menu__link--width");
        linkList.innerHTML=menu.items[item];
        linkList.href=`#${menu.itemsID[item]}`;

        itemList.appendChild(linkList);
        list.appendChild(itemList);
    }
    menuHeader.appendChild(list);
    header.appendChild(menuHeader)
        menu.isClickedButtom=true;
    }
    else{    
        const menuDisplayed = document.querySelector(".header__menu--width");
        header.removeChild(menuDisplayed);
        menu.isClickedButtom=false;
    }
}
