const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];
  
  function populateProductOptions() {
      var select = document.getElementById("productName");
  
      products.forEach(function(product) {
          var option = document.createElement("option");
          option.value = product.id;
          option.text = product.name;
          select.appendChild(option);
      });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
      populateProductOptions();
  });
  

const year = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">Last Modification: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;