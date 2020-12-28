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
    selectItemListMenu(item);
}));

// ITEM MENU SELECT 
function selectItemListMenu(item){
    if(menu.itemSelect!==null){
        menu.itemSelect.classList.remove("menu__select");
    }
        menu.itemSelect = item;
        item.classList.add("menu__select");
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
            selectItemListMenu(itemList);
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

// DANCER
const balletDance = {
    section: document.querySelector("#dance"),
    img:["BalletDance1","BalletDance2","BalletDance3","BalletDance4","BalletDance5","BalletDance6","BalletDance7"],
    elementImg: []
}

controlImage(0);
function controlImage (index){
    renderDanceBallet(balletDance.img[index]);
    renderDanceBallet(balletDance.img[index+1]);
    renderDanceBallet(balletDance.img[index+2]);
     setTimeout((()=>{
        balletDance.elementImg=derenderDanceBallet(balletDance);
        controlImage(index);
        }),5000);
}

function renderDanceBallet(imgDancer){
    const elementImgDancer = document.createElement('img');
    elementImgDancer.classList.add("dance__balletImg");
    elementImgDancer.src=`Imagens/${imgDancer}.png`;
    balletDance.elementImg.push(elementImgDancer);
    balletDance.section.appendChild(elementImgDancer);
}

function derenderDanceBallet(balletDance){
    balletDance.elementImg.forEach((imgDancer)=>{
        balletDance.section.removeChild(imgDancer);
    });
    balletDance.img.push(balletDance.img[0]);
    balletDance.img.shift() ;
    return elementsImg = [];
}

// MODALITIES
const modalities = {
    img:["ModBaby.png","ModBalletInf.jpg","ModBalletJuv.jpg","ModBalletAdult.jpg","ModJazzInf.jpg","ModJazzJuv.jpg",
    "ModJazzAdult.jpg","ModStreetDance.jpeg"],
    id: ["modBaby", "modBalletInf","modBalletJuv","modBalletAdul","modJazzInf","modJazzJuv","modJazzAdul",
    "modStreetDance"],
    title:["Ballet Baby","Ballet Infantil","Ballet Juvenil","Ballet Adulto","Jazz Infantil","Jazz Juvenil",
    "Jazz Adulto","Dança Urbana"],
    age:["Entre 3 e 5 anos","Entre 6 e 10 anos","Entre 11 e 14 anos","A partir de 14 anos",
    "Entre 6 e 10 anos","Entre 11 e 14 anos","A partir de 14 anos",
    "A partir de 14 anos"],
    explanation:["Para as crianças que sonham em ser balarinas desde novas, o Baby Ballet é o primeiro passo para a contato com o Ballet.<br><br>Nesta modalidade elas descobrem a dança de uma maneira lúdica e afetiva. As aulas são divertidas e encantadoras tornando o aprendizado leve e eficaz.",
"...",
"...",
"...",
"...",
"...",
"...",
"..."],
    elementSelect:null,
    structureDescription: ["title","age","explanation"],
    elementCreateDescription: ["h1", "p","p"],
    addClass:["modalities__title","modalities__age","modalities__explanation"]
}

creatListModalities(modalities);
illustrateModalityInformation(document.querySelector("#modalities__group"),0,modalities);
function creatListModalities(modalities){
    const modalitiesList = document.querySelector("#modalities__list");
   modalities.id.forEach((id, index)=>{
    const elementItemList = document.createElement('div');
    elementItemList.classList.add("modalities__item");
    elementItemList.innerHTML = modalities.title[index];
    elementItemList.id = modalities.id[index];
    elementItemList.onclick= (e) => {
        selectItemListModalities(elementItemList);
        updateModalityGroup(modalities,e.target)
    };
    modalitiesList.appendChild(elementItemList);
    if(!index){
        elementItemList.classList.add("modalities__select");
        modalities.elementSelect = elementItemList;
    }
   })
}

// ITEM MENU SELECT 
function selectItemListModalities(element){
        modalities.elementSelect.classList.remove("modalities__select");
        modalities.elementSelect = element;
        element.classList.add("modalities__select");
}

function updateModalityGroup(modalities,objEvent){
    const modalitiesGroup = document.querySelector("#modalities__group");
    removeModalityInformation(modalitiesGroup);
    const numberIndex= modalities.id.indexOf(objEvent.id);
    illustrateModalityInformation(modalitiesGroup,numberIndex,modalities);
}

function  removeModalityInformation(modalitiesGroup){

    modalitiesGroup.removeChild(document.querySelector(".modalities__information"));
}

function illustrateModalityInformation(modalitiesGroup,numberIndex,modalities){
        
    const modGroupInformation = document.createElement('div');
    modGroupInformation.classList.add("modalities__information");
    modalitiesGroup.appendChild(modGroupInformation); 

    const modImg = document.createElement('img');
    modImg.classList.add("modalities__img");
    modImg.src=`Imagens/${modalities.img[numberIndex]}`;
    modImg.alt="Imagem dançarina";
    modGroupInformation.appendChild(modImg);

    const modDescription = document.createElement('div');
    modDescription.classList.add("flex__column");
    modDescription.classList.add("modalities__description");
    modGroupInformation.appendChild(modDescription); 

    modalities.elementCreateDescription.forEach((element,index)=>{
 
        createModalityDescrition (element,modalities.addClass[index],modalities.structureDescription[index],numberIndex, modDescription, modalities)
    })
}
function createModalityDescrition (creatElement,addClass,structure,numberIndex, modDescription, modalities){

    const modElement = document.createElement(`${creatElement}`);
    modElement.classList.add(`${addClass}`);
    modElement.innerHTML = modalities[structure][numberIndex];
    modDescription.appendChild(modElement);
}