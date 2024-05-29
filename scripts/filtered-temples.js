//select the DOM element.
const year = document.querySelector("#currentyear");
const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");
let lastModified = document.querySelector("#lastModified");
const templeCard = document.querySelector(".container");

const today = new Date();

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav_menu.classList.toggle("active");
})

year.innerHTML = `<span>${today.getFullYear()}</span>`;



const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Lusaka Zambia",
        location: "Lusaka Zambia",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Johannesburg, Gauteng",
        location: "Gauteng, South Africa",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Accra Ghana",
        location: "Accra, Gahan",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
  ];

  const templeCardsContainer = document.querySelector(".container");

  temples.forEach(temple => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    templeCard.innerHTML = `
    <div class="container">
      <figure>
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedication Date:</strong> ${temple.dedicated}</p>
        <p><strong>Total Area:</strong> ${temple.area} square feet</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      </figure>
    </div>`;

    templeCardsContainer.appendChild(templeCard);
  });

  const OldTemples = document.getElementById("#OldTemples");
  const NewTemples = document.getElementById("#NewTemples");
  const LargeTemple = document.getElementById("#LargeTemple");
  const SmallTemple = document.getElementById("#SmallTemple");
  const home = document.getElementById("#home");

  OldTemples.addEventListener("click", temples);
  NewTemples.addEventListener("click", temples);
  LargeTemple.addEventListener("click", temples);
  SmallTemple.addEventListener("click", temples);
  home.addEventListener("click", temples);


  function filterTemples() {
    
    if (OldTemples) {
      let filteredTemples;
      filteredTemples = temples.filter(temple => {
        const dedicationYear = new Date(temple.dedicated).getFullYear();
        return dedicationYear < 2000;
      });
    } else if (NewTemples) {
      let filteredTemples;
      filteredTemples = temples.filter(temple => {
        const dedicationYear = new Date(temple.dedicated).getFullYear();
        return dedicationYear >= 2000;
      });
    } else if (LargeTemple) {
      let filteredTemples;
      filteredTemples = temples.filter(temple => {
        const SquareFeet = new Date(temple.area).getFullYear();
        return SquareFeet >= 90000;
      });
    } else if (SmallTemple) {
      let filteredTemples;
      filteredTemples = temples.filter(temple => {
        const SquareFeet = new Date(temple.area).getFullYear();
        return SquareFeet < 10000;
      });
    } else if (home){
      temples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");
    
        templeCard.innerHTML = `
        <div class="container">
          <figure>
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedication Date:</strong> ${temple.dedicated}</p>
            <p><strong>Total Area:</strong> ${temple.area} square feet</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
          </figure>
        </div>`;
    
        templeCardsContainer.appendChild(templeCard);
      });
    }
  }

  year.innerHTML = `<span>${today.getFullYear()}</span>`;
  
  lastModified.innerHTML = `<span class="highlight">Last Modification: ${new Intl.DateTimeFormat(
    "en-US",
    {
      dateStyle: "short"
    }
  ).format(today)}</span>`;