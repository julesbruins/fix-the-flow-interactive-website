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
  e.stopPropagation();

  themaDropdown.addEventListener('click',function(e) {
    e.stopPropagation();
  });
  
  themaDropdown.classList.toggle("collapsed");
}, false);


// Selecteer in het document de class 'locatie-btn' en 'locatie-dropdown'.
const locatieFilter = document.querySelector(".locatie-btn");
const locatieDropdown = document.querySelector(".locatie-dropdown");


// Aan locatieFilter voeg je een event listener toe, dus als er wat gebeurt in dit gevallen klikken, dan ...
// dan wordt aan locatie-dropdown de class 'collapsed' getoggled. Dus aan en uit gezet.
locatieFilter.addEventListener("click", () => {
  e.stopPropagation();

  locatieDropdown.addEventListener('click',function(e) {
    e.stopPropagation();
  });

  locatieDropdown.classList.toggle("collapsed");
}, false);


document.body.addEventListener("click", () => {
  locatieDropdown.classList.add("collapsed");
  themaDropdown.classList.add("collapsed");
});

//  radio aan en uit
const lijstTitel = document.querySelector(".eventlist h3");
const deLijst = document.querySelector(".eventlist ul");
const checks = document.querySelectorAll(".btn-selected input");

checks.forEach(check => {
  check.oninput = wijzigLijstTitel;
});

function wijzigLijstTitel(e) {
  const deInput = e.target;

  if (deInput.checked) {
    lijstTitel.textContent = `Alle '${e.target.value}' events:`;

    deLijst.dataset.filter = e.target.value;
  } else {
    lijstTitel.textContent = 'Alle events:';
  }

  
}

// Omdat de dropdown in de filter button zit klapt die in als je een cheeckbox aanvinkt. 
// ^ nu zeg je als die de dropdown aanklikt hoef die niet in te klappen.

// querySelector herkend alleen de eerste dus vandaar dat we dezelfde twee keer uitschrijven.


// const ux_checkbox = document.getElementById("ux")
// ux_checkbox.addEventListener('change', ux_changed);

// function ux_changed() {
 
//   if (ux_checkbox.checked) {
//     const liElementHr1 = document.querySelector('li[data-category="hr1"]');
//     const liElementHr2 = document.querySelector('li[data-category="hr2"]');
//     const liElementHr3 = document.querySelector('li[data-category="hr3"]');
//     const liElementHackathon1 = document.querySelector('li[data-category="hackathon1"]');
//     const liElementHackathon2 = document.querySelector('li[data-category="hackathon2"]');
//     liElementHr1.style.display = 'none';
//     liElementHr2.style.display = 'none';
//     liElementHr3.style.display = 'none';
//     liElementHackathon1.style.display = 'none';
//     liElementHackathon2.style.display = 'none';

//   } else {
//     const liElementHr1 = document.querySelector('li[data-category="hr1"]');
//     const liElementHr2 = document.querySelector('li[data-category="hr2"]');
//     const liElementHr3 = document.querySelector('li[data-category="hr3"]');
//     const liElementHackathon1 = document.querySelector('li[data-category="hackathon1"]');
//     const liElementHackathon2 = document.querySelector('li[data-category="hackathon2"]');
//     liElementHr1.style.display = '';
//     liElementHr2.style.display = '';
//     liElementHr3.style.display = '';
//     liElementHackathon1.style.display = '';
//     liElementHackathon2.style.display = '';
//   }
// }

// const hr_checkbox = document.getElementById("hr") 
// hr_checkbox.addEventListener('change', hr_changed);

// function hr_changed() {
 
//   if (hr_checkbox.checked) {
//     const liElementUx1 = document.querySelector('li[data-category="ux1"]');
//     const liElementUx2 = document.querySelector('li[data-category="ux2"]');
//     const liElementUx3 = document.querySelector('li[data-category="ux3"]');
//     const liElementHackathon1 = document.querySelector('li[data-category="hackathon1"]');
//     const liElementHackathon2 = document.querySelector('li[data-category="hackathon2"]');
//     liElementUx1.style.display = 'none';
//     liElementUx2.style.display = 'none';
//     liElementUx3.style.display = 'none';
//     liElementHackathon1.style.display = 'none';
//     liElementHackathon2.style.display = 'none';
//   } else {
//     const liElementUx1 = document.querySelector('li[data-category="ux1"]');
//     const liElementUx2 = document.querySelector('li[data-category="ux2"]');
//     const liElementUx3 = document.querySelector('li[data-category="ux3"]');
//     const liElementHackathon1 = document.querySelector('li[data-category="hackathon1"]');
//     const liElementHackathon2 = document.querySelector('li[data-category="hackathon2"]');
//     liElementUx1.style.display = '';
//     liElementUx2.style.display = '';
//     liElementUx3.style.display = '';
//     liElementHackathon1.style.display = '';
//     liElementHackathon2.style.display = '';
//   }
// }

// const hack_checkbox = document.getElementById("hack")
// hack_checkbox.addEventListener('change', hack_changed);

// function hack_changed() {
 
//   if (hack_checkbox.checked) {
//     const liElementUx1 = document.querySelector('li[data-category="ux1"]');
//     const liElementUx2 = document.querySelector('li[data-category="ux2"]');
//     const liElementUx3 = document.querySelector('li[data-category="ux3"]');
//     const liElementHr1 = document.querySelector('li[data-category="hr1"]');
//     const liElementHr2 = document.querySelector('li[data-category="hr2"]');
//     const liElementHr3 = document.querySelector('li[data-category="hr3"]');
//     liElementUx1.style.display = 'none';
//     liElementUx2.style.display = 'none';
//     liElementUx3.style.display = 'none';
//     liElementHr1.style.display = 'none';
//     liElementHr2.style.display = 'none';
//     liElementHr3.style.display = 'none';
//   } else {
//     const liElementUx1 = document.querySelector('li[data-category="ux1"]');
//     const liElementUx2 = document.querySelector('li[data-category="ux2"]');
//     const liElementUx3 = document.querySelector('li[data-category="ux3"]');
//     const liElementHr1 = document.querySelector('li[data-category="hr1"]');
//     const liElementHr2 = document.querySelector('li[data-category="hr2"]');
//     const liElementHr3 = document.querySelector('li[data-category="hr3"]');
//     liElementUx1.style.display = '';
//     liElementUx2.style.display = '';
//     liElementUx3.style.display = '';
//     liElementHr1.style.display = '';
//     liElementHr2.style.display = '';
//     liElementHr3.style.display = '';
//   }
// }


// const ams_checkbox = document.getElementById("ams")
// ams_checkbox.addEventListener('change', ams_changed);

// function ams_changed() {
 
//   if (ams_checkbox.checked) {
//     const liElementEind1 = document.querySelector('li[data-category2="eind1"]');
//     const liElementEind2 = document.querySelector('li[data-category2="eind2"]');
//     const liElementEind3 = document.querySelector('li[data-category2="eind3"]');
//     liElementEind1.style.display = 'none';
//     liElementEind2.style.display = 'none';
//     liElementEind3.style.display = 'none';

//   } else {
//     const liElementEind1 = document.querySelector('li[data-category2="eind1"]');
//     const liElementEind2 = document.querySelector('li[data-category2="eind2"]');
//     const liElementEind3 = document.querySelector('li[data-category2="eind3"]');
//     liElementEind1.style.display = '';
//     liElementEind2.style.display = '';
//     liElementEind3.style.display = '';
//   }
// }

// const eind_checkbox = document.getElementById("eind")
// eind_checkbox.addEventListener('change', eind_changed);

// function eind_changed() {
 
//   if (eind_checkbox.checked) {
//     const liElementAms1 = document.querySelector('li[data-category2="ams1"]');
//     const liElementAms2 = document.querySelector('li[data-category2="ams2"]');
//     const liElementAms3 = document.querySelector('li[data-category2="ams3"]');
//     const liElementAms4 = document.querySelector('li[data-category2="ams4"]');
//     const liElementAms5 = document.querySelector('li[data-category2="ams5"]');
//     liElementAms1.style.display = 'none';
//     liElementAms2.style.display = 'none';
//     liElementAms3.style.display = 'none';
//     liElementAms4.style.display = 'none';
//     liElementAms5.style.display = 'none';

//   } else {
//     const liElementAms1 = document.querySelector('li[data-category2="ams1"]');
//     const liElementAms2 = document.querySelector('li[data-category2="ams2"]');
//     const liElementAms3 = document.querySelector('li[data-category2="ams3"]');
//     const liElementAms4 = document.querySelector('li[data-category2="ams4"]');
//     const liElementAms5 = document.querySelector('li[data-category2="ams5"]');
//     liElementAms1.style.display = '';
//     liElementAms2.style.display = '';
//     liElementAms3.style.display = '';
//     liElementAms4.style.display = '';
//     liElementAms5.style.display = '';
//   }
// }



window.addEventListener('scroll', function () {
  const header = document.querySelector('header');

  if (window.scrollY > 100) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});