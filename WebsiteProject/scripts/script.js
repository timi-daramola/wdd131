document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
            img.removeAttribute('data-src');
        };
    });
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