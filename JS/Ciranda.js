// MENU CONTEXTO
const clicked ={
    isClicked:false,
    items:["SOBRE", "ENSINO", "PROFESSORES","MODALIDADES", "VOZ DOS ALUNOS"]
}
document.querySelector("#header__list").addEventListener("click", () =>{
    openMenu(clicked);
}); 

function openMenu(clicked){
    const header = document.querySelector("#header");
    if(clicked.isClicked==false){
    const div = document.createElement('div');
    div.classList.add("header__menu--small")
    const ul = document.createElement('ul');
    ul.classList.add("menu");
    ul.classList.add("flex__spacearound");

    for(let i in clicked.items){
        const li = document.createElement('li');
        li.classList.add("menu__items--small");
        li.classList.add("flex__spacearound");
        
        const a = document.createElement('a');
        a.classList.add("menu__link--small");
        a.innerHTML=clicked.items[i];
        a.href=`#${clicked.items[i]}`;

        li.appendChild(a);
        ul.appendChild(li);
    }
    div.appendChild(ul);
    header.appendChild(div)
        clicked.isClicked=true;
    }
    else{
        
        const divEssa = document.querySelector(".header__menu--small");
        header.removeChild(divEssa);
        clicked.isClicked=false;

    }
}
