// MODALITIES
const modalities = {
  img: [
    "ModBaby.jpg",
    "ModBalletInf.jpg",
    "ModBalletAdult.jpg",
    "ModJazzInf.jpg",
    "ModJazzJuv.jpg",
    "ModJazzAdult.jpg",
    "ModAlogamentoIdade.jpg",
  ],
  id: [
    "modBaby",
    "modBalletInf",
    "modBalletAdul",
    "modJazzInf",
    "modJazzJuv",
    "modJazzAdult",
    "modModAlogamentoIdade",
  ],
  title: [
    "Ballet Baby",
    "Ballet Infantil",
    "Ballet Adulto",
    "Jazz Infantil",
    "Jazz Juvenil",
    "Jazz Adulto",
    "Dança para Melhor Idade",
  ],
  age: [
    "Entre 3 e 5 anos",
    "Entre 6 e 10 anos",
    "A partir de 15 anos",
    "Entre 7 e 10 anos",
    "Entre 11 e 15 anos",
    "A partir de 15 anos",
    "Melhor idade",
  ],
  explanation: [
    "Para as crianças que sonham em ser balarinas, o Baby Ballet é uma iniciação a dança clássica.<br><br>Nesta modalidade elas descobrem a dança de uma maneira lúdica e afetiva. As aulas são divertidas e encantadoras tornando o aprendizado leve e eficaz.",
    "Para as crianças que já se formaram no Baby Ballet ou irão iniciar na dança a partir de 6 anos de idade.<br><br> Essa modalidade traz o ballet clássico de uma maneira técnica, com linguagem e matérias apropriadas para essa faixa etária. Trabalhando, a coordenação motora, flexibilidade, postura, ritmo e técnica clássica.",
    "Para os alunos que já se formaram no Ballet Juvenil e também para os adultos que sempre sonharam em fazer essa modalidade.<br><br> Não tem idade, altura ou peso ideal, basta se permitir.",
    "Com inspiração em diversos estilos de dança, essa modalidade proporciona um momento de muita troca de energia, trabalho corporal e expressivo!<br><br> Sua criança irá se divertir e se desenvolver corporalmente.",
    "Com inspiração em diversos estilos de dança, essa modalidade proporciona um momento de muita troca de energia, trabalho corporal e expressivo!<br><br> Com foco no trabalho corporal e na técnica de jazz!",
    "Com foco no desenvolvimento do ser (autoestima, autoconhecimento, superação) o jazz adulto traz um momento de leveza no seu dia, onde é possível extravasar as emoções, se superar em relação as suas limitações e descobrir suas potencialidades!<br><br> Não tem idade, corpo ou altura ideal! Se permita!",
    "A dança para Melhor Idade tem o intuito de melhorar a qualidade de vida de quem pratica esta atividade. O foco da aula está no alongamento e fortalecimento do corpo através de pequenas sequências coreografadas. Uma experiência que pode trazer inúmeros benefícios que influenciam no bem-estar físico e mental dos alunos, trabalhando memória, postura, consciência corporal e coordenação motora.",
  ],
  colorClass: [
    "modalities__description--purple",
    "modalities__description--green",
    "modalities__description--pink",
    "modalities__description--purple",
    "modalities__description--green",
    "modalities__description--purple",
    "modalities__description--pink",
  ],
  elementSelect: null,
  structureDescription: ["title", "age", "explanation"],
  elementCreateDescription: ["h1", "p", "p"],
  addClass: ["modalities__title", "modalities__age", "modalities__explanation"],
};

creatListModalities(modalities);
illustrateModalityInformation(
  document.querySelector("#modalities__group"),
  0,
  modalities
);
function creatListModalities(modalities) {
  const modalitiesList = document.querySelector("#modalities__list");
  modalities.id.forEach((id, index) => {
    const elementItemList = document.createElement("div");
    elementItemList.classList.add("modalities__item");
    elementItemList.innerHTML = modalities.title[index];
    elementItemList.id = modalities.id[index];
    elementItemList.onclick = (e) => {
      selectItemListModalities(elementItemList);
      updateModalityGroup(modalities, e.target);
    };
    modalitiesList.appendChild(elementItemList);
    if (!index) {
      elementItemList.classList.add("modalities__select");
      modalities.elementSelect = elementItemList;
    }
  });
}

// ITEM MENU SELECT
function selectItemListModalities(element) {
  modalities.elementSelect.classList.remove("modalities__select");
  modalities.elementSelect = element;
  element.classList.add("modalities__select");
}

function updateModalityGroup(modalities, objEvent) {
  const modalitiesGroup = document.querySelector("#modalities__group");
  removeModalityInformation(modalitiesGroup);
  const numberIndex = modalities.id.indexOf(objEvent.id);
  illustrateModalityInformation(modalitiesGroup, numberIndex, modalities);
}

function removeModalityInformation(modalitiesGroup) {
  modalitiesGroup.removeChild(
    document.querySelector(".modalities__information")
  );
}

function illustrateModalityInformation(
  modalitiesGroup,
  numberIndex,
  modalities
) {
  const modGroupInformation = document.createElement("div");
  modGroupInformation.classList.add("modalities__information");
  modalitiesGroup.appendChild(modGroupInformation);

  const modImg = document.createElement("img");
  modImg.classList.add("modalities__img");
  modImg.src = `Imagens/${modalities.img[numberIndex]}`;
  modImg.alt = "Imagem dançarina";
  modGroupInformation.appendChild(modImg);

  const modDescription = document.createElement("div");
  modDescription.classList.add("flex__column");
  modDescription.classList.add("modalities__description");
  modDescription.classList.add(`${modalities.colorClass[numberIndex]}`);
  modGroupInformation.appendChild(modDescription);

  modalities.elementCreateDescription.forEach((element, index) => {
    createModalityDescrition(
      element,
      modalities.addClass[index],
      modalities.structureDescription[index],
      numberIndex,
      modDescription,
      modalities
    );
  });
}
function createModalityDescrition(
  creatElement,
  addClass,
  structure,
  numberIndex,
  modDescription,
  modalities
) {
  const modElement = document.createElement(`${creatElement}`);
  modElement.classList.add(`${addClass}`);
  modElement.innerHTML = modalities[structure][numberIndex];
  modDescription.appendChild(modElement);
}
