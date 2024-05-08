// MODALITIES
const modalities = {
  img: [
    "ModBaby.jpg",
    "ModBalletInf.jpg",
    "ModBalletAdult.jpg",
    "ModJazzInf.jpg",
    "ModJazzJuv.jpg",
    "ModJazzAdult.jpg",
    "ModUrbanDance.jpg",
  ],
  id: [
    "modBaby",
    "modBalletInf",
    "modBalletAdul",
    "modJazzInf",
    "modJazzJuv",
    "modJazzAdult",
    "modUrbanDance",
  ],
  title: [
    "Ballet Baby",
    "Ballet Infantil",
    "Ballet Adulto",
    "Jazz Infantil",
    "Jazz Juvenil",
    "Jazz Adulto",
    "Danças Urbanas",
  ],
  age: [
    "Entre 3 e 5 anos",
    "Entre 6 e 10 anos",
    "A partir de 15 anos",
    "Entre 7 e 10 anos",
    "Entre 11 e 15 anos",
    "A partir de 15 anos",
    "A partir de 12 anos",
  ],
  explanation: [
    "Para as crianças que sonham em ser balarinas, o Baby Ballet é uma iniciação a dança clássica.<br><br>Nesta modalidade elas descobrem a dança de uma maneira lúdica e afetiva. As aulas são divertidas e encantadoras tornando o aprendizado leve e eficaz.",
    "Para as crianças que já se formaram no Baby Ballet ou irão iniciar na dança a partir de 6 anos de idade.<br><br> Essa modalidade traz o ballet clássico de uma maneira técnica, com linguagem e matérias apropriadas para essa faixa etária. Trabalhando, a coordenação motora, flexibilidade, postura, ritmo e técnica clássica.",
    "Para os alunos que já se formaram no Ballet Juvenil e também para os adultos que sempre sonharam em fazer essa modalidade.<br><br> Não tem idade, altura ou peso ideal, basta se permitir.",
    "Com inspiração em diversos estilos de dança, essa modalidade proporciona um momento de muita troca de energia, trabalho corporal e expressivo!<br><br> Sua criança irá se divertir e se desenvolver corporalmente.",
    "Com inspiração em diversos estilos de dança, essa modalidade proporciona um momento de muita troca de energia, trabalho corporal e expressivo!<br><br> Com foco no trabalho corporal e na técnica de jazz!",
    "Com foco no desenvolvimento do ser (autoestima, autoconhecimento, superação) o jazz adulto traz um momento de leveza no seu dia, onde é possível extravasar as emoções, se superar em relação as suas limitações e descobrir suas potencialidades!<br><br> Não tem idade, corpo ou altura ideal! Se permita!",
    "Danças urbanas são um conjunto de estilos de dança nascidos e desenvolvidos nas áreas urbanas, geralmente associados à cultura hip-hop. Esses estilos incluem breaking, locking, popping, waacking, krumping, entre outros. As danças urbanas são caracterizadas pela sua energia, improvisação, e expressão individual, e muitas vezes são utilizadas como forma de autoexpressão e empoderamento.",
  ],
  elementSelect: null,
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
  modGroupInformation.appendChild(modDescription);

  const content = document.createElement("div");
  content.classList.add("modalities__content");
  modDescription.appendChild(content);

  createModalityDescrition(
    "h1",
    "modalities__title",
    "title",
    numberIndex,
    content,
    modalities
  );

  createModalityDescrition(
    "p",
    "modalities__age",
    "age",
    numberIndex,
    content,
    modalities
  );

  createModalityDescrition(
    "div",
    "modalities__explanation",
    "explanation",
    numberIndex,
    modDescription,
    modalities
  );
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
  modElement.classList.add(addClass);
  modElement.innerHTML = modalities[structure][numberIndex];
  modDescription.appendChild(modElement);
}
