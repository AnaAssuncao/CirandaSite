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

// MODALITIES
const modalities = {
    img:["ModBaby.jpg","ModBalletInf.jpg","ModBalletJuv.jpg","ModBalletAdult.jpg","ModJazzInf.jpg","ModJazzJuv.jpg",
    "ModJazzAdult.jpg","ModStreetDance.jpeg"],
    id: ["modBaby", "modBalletInf","modBalletJuv","modBalletAdul","modJazzInf","modJazzJuv","modJazzAdul",
    "modStreetDance"],
    title:["Ballet Baby","Ballet Infantil","Ballet Juvenil","Ballet Adulto","Jazz Infantil","Jazz Juvenil",
    "Jazz Adulto","Dança Urbana"],
    age:["Entre 3 e 5 anos","Entre 6 e 10 anos","Entre 11 e 14 anos","A partir de 14 anos",
    "Entre 6 e 10 anos","Entre 11 e 14 anos","A partir de 14 anos",
    "A partir de 14 anos"],
    explanation:["Para as crianças que sonham em ser balarinas, o Baby Ballet é uma iniciação a dança clássica.<br><br>Nesta modalidade elas descobrem a dança de uma maneira lúdica e afetiva. As aulas são divertidas e encantadoras tornando o aprendizado leve e eficaz.",
"Para as crianças que já se formaram no Baby Ballet ou irão iniciar na dança a partir de 6 anos de idade.<br><br> Essa modalidade traz o ballet clássico de uma maneira técnica, com linguagem e matérias apropriadas para essa faixa etária. Trabalhando, a coordenação motora, flexibilidade, postura, ritmo e técnica clássica.",
"Para as crianças que já se formaram no Ballet Infantil ou que vão dar início a dança a partir de 11 anos de idade.<br><br> O Ballet Juvenil introduz o uso das sapatilhas de ponta (dependendo do nível do aluno), além de trabalhar os elementos: coordenação motora, flexibilidade, postura, ritmo e técnica clássica.",
"Para os alunos que já se formaram no Ballet Juvenil e também para os adultos que sempre sonharam em fazer essa modalidade.<br><br> Não tem idade, altura ou peso ideal, basta se permitir.",
"Com inspiração em diversos estilos de dança, essa modalidade proporciona um momento de muita troca de energia, trabalho corporal e expressivo!<br><br> Sua criança irá se divertir e se desenvolver corporalmente.",
"Com inspiração em diversos estilos de dança, essa modalidade proporciona um momento de muita troca de energia, trabalho corporal e expressivo!<br><br> Com foco no trabalho corporal e na técnica de jazz!",
"Com foco no desenvolvimento do ser (autoestima, autoconhecimento, superação) o jazz adulto traz um momento de leveza no seu dia, onde é possível extravasar as emoções, se superar em relação as suas limitações e descobrir suas potencialidades!<br><br> Não tem idade, corpo ou altura ideal! Se permita!",
"O conjunto de estilos da dança de rua recebe o nome de Street Dance, esses estilos se desenvolvem na realidade gestual do indivíduo, através de movimentos coordenados e harmoniosos, o que faz do corpo uma forma de comunicação.<br><br> O aluno pode descobrir muito sobre si, se expressando de diversas maneiras a partir das diversas linguagens corporais presentes nesse universo"],
    colorClass:["modalities__description--purple","modalities__description--blue","modalities__description--pink","modalities__description--purple",
    "modalities__description--green","modalities__description--green","modalities__description--green","modalities__description--pink"],
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
    modDescription.classList.add(`${modalities.colorClass[numberIndex]}`)
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