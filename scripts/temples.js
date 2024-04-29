//select the DOM element.
const year = document.querySelector("#currentyear");
const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");
let lastModified = document.querySelector("#lastModified");

const today = new Date();

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav_menu.classList.toggle("active");
})

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">Last Modification: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;