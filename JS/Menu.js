const menu = {
  items: [
    "SOBRE",
    "ENSINO",
    "DIRETORAS",
    "MODALIDADES",
    "DEPOIMENTOS",
    "PERGUNTAS FREQUENTES",
  ],
  itemsID: [
    "SOBRE",
    "ENSINO",
    "DIRETORAS",
    "MODALIDADES",
    "DEPOIMENTOS",
    "PERGUNTAS",
  ],
  itemSelect: null,
  isClickedButtom: false,
  screenSize: 1000,
  listItems: Array.from(document.querySelectorAll(".menu__items")),
};

menu.listItems.forEach((item) =>
  item.addEventListener("click", () => {
    selectItemListMenu(item);
  })
);

const widht = window.innerWidth;

const handleScroll = () => {
  const scroll = widht > 1000 ? 100 : 250;
  setTimeout(() => {
    const heightScroll = window.scrollY - scroll;
    window.scroll(0, heightScroll);
  }, 10);
};

function handleButtonContact() {
  selectItemListMenu();
}

// ITEM MENU SELECT
function selectItemListMenu(item) {
  if (menu.itemSelect !== null) {
    menu.itemSelect.classList.remove("menu__select");
  }
  if (item) {
    menu.itemSelect = item;
    item.classList.add("menu__select");
  }
}

// MENU MAX WIDTH 1000PX
document.querySelector("#header__list").addEventListener("click", () => {
  openMenu(menu);
});

function openMenu(menu) {
  const header = document.querySelector("#header");
  if (menu.isClickedButtom === false) {
    const menuHeader = document.createElement("div");
    menuHeader.classList.add("header__menu--width");
    const list = document.createElement("ul");
    list.classList.add("menu");
    list.classList.add("flex__spacearound");
    list.classList.add("menu--width");

    for (let item in menu.items) {
      const itemList = document.createElement("li");
      itemList.classList.add("menu__items--width");
      itemList.classList.add("flex__spacearound");
      itemList.addEventListener("click", () => {
        selectItemListMenu(itemList);
        handleScroll();
      });
      const linkList = document.createElement("a");
      linkList.classList.add("menu__link--width");
      linkList.innerHTML = menu.items[item];
      linkList.href = `#${menu.itemsID[item]}`;

      itemList.appendChild(linkList);
      list.appendChild(itemList);
    }
    menuHeader.appendChild(list);
    header.appendChild(menuHeader);
    menu.isClickedButtom = true;
  } else {
    const menuDisplayed = document.querySelector(".header__menu--width");
    header.removeChild(menuDisplayed);
    menu.isClickedButtom = false;
  }
}
