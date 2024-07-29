"use strict";

// Consts

//Consts for float notes above the images
const floatNotes = document.querySelectorAll(".note__container");

const angkor = document.querySelector(".angkorWat");
const chineseWall = document.querySelector(".chinese-wall");
const tajMahal = document.querySelector(".tajMahal");
const romanColosseum = document.querySelector(".romanColosseum");
const machuPicchu = document.querySelector(".machuPicchu");
const acropolisAthens = document.querySelector(".acropolisAthens");
const easterIsland = document.querySelector(".easterIsland");
const chichenItza = document.querySelector(".chichenItza");
const westminsterPalace = document.querySelector(".westminsterPalace");
const mountRushmore = document.querySelector(".mountRushmore");
const christRedeemer = document.querySelector(".christRedeemer");
const statueLiberty = document.querySelector(".statueLiberty");

//Consts to close the float windows
const xmarks = document.querySelectorAll(".float-window__icon");
const placeWindow = document.querySelectorAll(".float-window");

//navbar constants to show the selected continent
const seleccionarContinentes = document.querySelectorAll(".menu__options");
const all = document.querySelector(".all");
const asia = document.querySelector(".asia");
const europe = document.querySelector(".europe");
const northAmerica = document.querySelector(".north-america");
const southAmerica = document.querySelector(".south-america");

//sync between sections desktop & responsive
//desktop consts:
const allOption = document.getElementById("nav-all");
const asiaOption = document.getElementById("nav-asia");
const europeOption = document.getElementById("nav-europe");
const nAmericaOption = document.getElementById("nav-nAmerica");
const sAmericaOption = document.getElementById("nav-sAmerica");

//Responsive consts
const allOptionResponsive = document.getElementById("nav-all-responsive");
const asiaOptionResponsive = document.getElementById("nav-asia-responsive");
const europeOptionResponsive = document.getElementById("nav-europe-responsive");
const nAmericaOptionResponsive = document.getElementById("nav-nAmerica-responsive");
const sAmericaOptionResponsive = document.getElementById("nav-sAmerica-responsive");

//Responsive side menu
const menuBtn = document.querySelector(".menu__btn-responsive");
const menuResponsive = document.querySelector(".menu__responsive");
const menuIconResponsive = document.querySelector(".menu__icon");
const backgroundResponsive = document.querySelector(".menu__background-responsive");

//const for select all the options of the reponsiv side menu
const sectionsResponsive = document.querySelectorAll(".menu__items-responsive");

//Home buttom
const homeBtn = document.querySelector(".logo");

//consts(classes) to specify selected section
const classDesktop = "menu__options--active";
const classResponsive = "menu__items-responsive--active";

//function for navigate between sections
const selectedSection = (options, section, modifier)=> {
  options.forEach((option) => {
    option.classList.remove(modifier);
  });

  section.classList.add(modifier);
}

//code for the page to go to the beginning of the scroll when refreshed
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}


//Array that contains the information of the notes that appear when the cursor is over the images.
let notes = [
  {
    name: "Angkor Wat",
    description: "It is the largest Hindu temple in the world",
  },
  {
    name: "Great Wall of China",
    description:
      "Is a series of fortifications that were built in ancient China",
  },
  {
    name: "Taj Mahal",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India",
  },
  {
    name: "Roman Colosseum",
    description:
      "Is an elliptical amphitheatre in the centre of the city of Rome",
  },
  {
    name: "Machu Picchu",
    description: "Is an Incan citadel set high in the Andes Mountains in Peru",
  },
  {
    name: "Acropolis of Athens",
    description:
      "Is an ancient citadel located on a rocky outcrop above the city of Athens",
  },
  {
    name: "Easter Island",
    description: "Is a remote volcanic island in Polynesia",
  },
  {
    name: "Chichén Itzá",
    description: "Is a complex of Mayan ruins on Mexico's Yucatán Peninsula",
  },
  {
    name: "Palace of Westminster",
    description:
      "Is the meeting place of the Parliament of the United Kingdom and is located in London. It is commonly called the Houses of Parliament",
  },
  {
    name: "Mount Rushmore National Memorial",
    description:
      "Is a massive sculpture carved into Mount Rushmore in the Black Hills region of South Dakota.",
  },
  {
    name: "Christ the Redeemer",
    description:
      "Is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski",
  },
  {
    name: "The Statue of Liberty",
    description:
      "Is a colossal neoclassical sculpture on Liberty Island in New York Harbor, within New York City",
  },
];


//notes that appear when the cursor is over the images.-------------

floatNotes.forEach((note, index) => {
  const noteData = notes[index];
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const selectElement = note.querySelector(".note");

  title.classList.add("note__title");
  description.classList.add("note__desc");

  title.innerText = `${noteData.name}`;
  description.innerText = `${noteData.description}`;

  selectElement.appendChild(title);
  selectElement.appendChild(description);


  const overNote = (e)=> {
    if (e.matches) {
      note.addEventListener("mouseover", () => {
        selectElement.style.display = "flex";
      });
    
      note.addEventListener("mouseout", () => {
        selectElement.style.display = "none";
      });
    } else {
      note.addEventListener("mouseover", () => {
        selectElement.style.display = "none";
      });
    }
  }

  const responsiveSize = window.matchMedia("(min-width: 1325px)");

  overNote(responsiveSize);

  responsiveSize.addEventListener("change", ()=> {
    overNote(responsiveSize);
  });

//Information that appears when you click on the images.----------
    note.addEventListener("click", () => {
      selectElement.style.display = "none";
      if (note.id == "angkor-wat") {
        angkor.style.visibility = "visible";
        angkor.style.opacity = "1";
      } else if (note.id == "china-wall") {
        chineseWall.style.visibility = "visible";
        chineseWall.style.opacity = "1";
      } else if (note.id == "taj-mahal") {
        tajMahal.style.visibility = "visible";
        tajMahal.style.opacity = "1";
      } else if (note.id == "roman-colosseum") {
        romanColosseum.style.visibility = "visible";
        romanColosseum.style.opacity = "1";
      } else if (note.id == "machu-picchu") {
        machuPicchu.style.visibility = "visible";
        machuPicchu.style.opacity = "1";
      } else if (note.id == "acropolis-athens") {
        acropolisAthens.style.visibility = "visible";
        acropolisAthens.style.opacity = "1";
      } else if (note.id == "easter-island") {
        easterIsland.style.visibility = "visible";
        easterIsland.style.opacity = "1";
      } else if (note.id == "chichen-itza") {
        chichenItza.style.visibility = "visible";
        chichenItza.style.opacity = "1";
      } else if (note.id == "westminster-palace") {
        westminsterPalace.style.visibility = "visible";
        westminsterPalace.style.opacity = "1";
      } else if (note.id == "mount-rushmore") {
        mountRushmore.style.visibility = "visible";
        mountRushmore.style.opacity = "1";
      } else if (note.id == "christ-redeemer") {
        christRedeemer.style.visibility = "visible";
        christRedeemer.style.opacity = "1";
      } else if (note.id == "statue-liberty") {
        statueLiberty.style.visibility = "visible";
        statueLiberty.style.opacity = "1";
      }
    });
});


//To close te float window
xmarks.forEach((xmark) => {
  xmark.addEventListener("click", (e) => {
    e.preventDefault();

    placeWindow.forEach((ventana) => {
      ventana.style.visibility = "hidden";
      ventana.style.opacity = "0";
    });
  });
});

//Choose section function
const ChooseSection = (section)=> {

  if (section.innerText === "All") {
    all.style.display = "grid";
    asia.style.display = "none";
    europe.style.display = "none";
    northAmerica.style.display = "none";
    southAmerica.style.display = "none";
    selectedSection(seleccionarContinentes, allOption,  classDesktop);
    selectedSection(sectionsResponsive, allOptionResponsive, classResponsive);
  } else if (section.innerText === "Asia") {
    all.style.display = "none";
    asia.style.display = "flex";
    europe.style.display = "none";
    northAmerica.style.display = "none";
    southAmerica.style.display = "none";
    selectedSection(seleccionarContinentes, asiaOption,  classDesktop);
    selectedSection(sectionsResponsive, asiaOptionResponsive, classResponsive);
  } else if (section.innerText === "Europe") {
    all.style.display = "none";
    asia.style.display = "none";
    europe.style.display = "flex";
    northAmerica.style.display = "none";
    southAmerica.style.display = "none";
    selectedSection(seleccionarContinentes, europeOption,  classDesktop);
    selectedSection(sectionsResponsive, europeOptionResponsive, classResponsive);
  } else if (section.innerText === "North America") {
    all.style.display = "none";
    asia.style.display = "none";
    europe.style.display = "none";
    northAmerica.style.display = "flex";
    southAmerica.style.display = "none";
    selectedSection(seleccionarContinentes, nAmericaOption,  classDesktop);
    selectedSection(sectionsResponsive, nAmericaOptionResponsive, classResponsive);
  } else if (section.innerText === "South America") {
    all.style.display = "none";
    asia.style.display = "none";
    europe.style.display = "none";
    northAmerica.style.display = "none";
    southAmerica.style.display = "flex";
    selectedSection(seleccionarContinentes, sAmericaOption,  classDesktop);
    selectedSection(sectionsResponsive, sAmericaOptionResponsive, classResponsive);
  }
}

//Navigation between sections
seleccionarContinentes.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0,0);

    selectedSection(seleccionarContinentes, option, classDesktop);

   ChooseSection(option);
  });
});


//Responsive side menu
menuBtn.addEventListener("click", (e)=> {
  e.preventDefault();

  if(!menuBtn.classList.contains("menu__btn-responsive--active")) {
    menuBtn.classList.add("menu__btn-responsive--active");
    menuIconResponsive.style.color = "#fff";
    menuResponsive.style.right = "0";
    backgroundResponsive.style.visibility = "visible";
  } else if (menuBtn.classList.contains("menu__btn-responsive--active")) {
    menuBtn.classList.remove("menu__btn-responsive--active");
    menuIconResponsive.style.color = "#272727";
    menuResponsive.style.right = "-100%";
    backgroundResponsive.style.visibility = "hidden";
  }
})

//close the side menu by clicking outside of it
backgroundResponsive.addEventListener("click", ()=> {

    const closeSideMenu = ()=> {
      menuBtn.classList.remove("menu__btn-responsive--active");
      menuIconResponsive.style.color = "#272727";
      menuResponsive.style.right = "-100%";
      backgroundResponsive.style.visibility = "hidden";
    }

    const sizeForMenuSide = window.matchMedia("(max-width: 1325px)");

    closeSideMenu(sizeForMenuSide);

    sizeForMenuSide.addEventListener("change", ()=> {
      closeSideMenu(sizeForMenuSide);
    })
})

//navegate between sections responsive
sectionsResponsive.forEach((option)=> {
  option.addEventListener("click", (e)=>{
    e.preventDefault();
    scrollTo(0,0);

    selectedSection(sectionsResponsive, option, classResponsive);
    ChooseSection(option);
  })
})

//Home button
homeBtn.addEventListener("click", ()=> {
  window.scrollTo(0,0);

  selectedSection(seleccionarContinentes,allOption, classDesktop);
  selectedSection(sectionsResponsive,allOptionResponsive,classResponsive);

  menuBtn.classList.remove("menu__btn-responsive--active");
  menuIconResponsive.style.color = "#272727";
  menuResponsive.style.right = "-100%";
  
  all.style.display = "grid";
  asia.style.display = "none";
  europe.style.display = "none";
  northAmerica.style.display = "none";
  southAmerica.style.display = "none";
})






