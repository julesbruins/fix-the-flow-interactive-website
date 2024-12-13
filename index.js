// Selecteer in het document de class 'ham-menu' en 'off-screen-menu'.
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

// Aan hamMenu voeg je een event listener toe, dus als er wat gebeurt in dit gevallen klikken, dan ...
// dan wordt aan off-screen-menu de class 'active' getoggled. Dus aan en uit gezet.
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


// Selecteer in het document de class 'thema-btn' en 'thema-dropdown'.
const themaFilter = document.querySelector(".thema-btn");
const themaDropdown = document.querySelector(".thema-dropdown");

// Aan themaFilter voeg je een event listener toe, dus als er wat gebeurt in dit gevallen klikken, dan ...
// dan wordt aan thema-dropdown de class 'collapsed' getoggled. Dus aan en uit gezet.
themaFilter.addEventListener("click", (e) => {
  themaDropdown.addEventListener('click',function(e) {
    e.stopPropagation();
  });
    themaDropdown.classList.toggle("collapsed");

});


// Selecteer in het document de class 'locatie-btn' en 'locatie-dropdown'.
const locatieFilter = document.querySelector(".locatie-btn");
const locatieDropdown = document.querySelector(".locatie-dropdown");

// Aan locatieFilter voeg je een event listener toe, dus als er wat gebeurt in dit gevallen klikken, dan ...
// dan wordt aan locatie-dropdown de class 'collapsed' getoggled. Dus aan en uit gezet.
locatieFilter.addEventListener("click", () => {
  locatieDropdown.addEventListener('click',function(e) {
    e.stopPropagation();
  });
  locatieDropdown.classList.toggle("collapsed");
});

// Omdat de dropdown in de filter button zit klapt die in als je een cheeckbox aanvinkt. 
// ^ nu zeg je als die de dropdown aanklikt hoef die niet in te klappen.

// querySelector herkend alleen de eerste dus vandaar dat we dezelfde twee keer uitschrijven.
