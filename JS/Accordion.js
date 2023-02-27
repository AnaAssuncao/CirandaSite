function collapsedAccordion(e) {
  const accordion = e.currentTarget;
  accordion.classList.toggle("accordion-collapsed");

  const arrayBody = accordion.querySelectorAll(".accordion-body");
  arrayBody.forEach((body) => {
    body.classList.toggle("accordion-none");
  });
}

function accordion() {
  const accordionsGroup = document.querySelectorAll(".section-accordion");
  [...accordionsGroup].forEach((e) => {
    e.addEventListener("click", (e) => {
      collapsedAccordion(e);
    });
  });
}

accordion();
