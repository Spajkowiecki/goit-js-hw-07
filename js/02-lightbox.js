import { galleryItems } from "./gallery-items.js";
// Change code below this line
const { log } = console;
const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    log(e.target);
    const obrotnica = new SimpleLightbox(".gallery .gallery__item", {
      captionsData: "alt",
      captionPosition: 250,
    });
    obrotnica.open();

    //obrotnica.on();
  }
});

for (let item of galleryItems) {
  //deklaracja elementów DOM
  let gallery__item = document.createElement("a");
  let gallery__image = document.createElement("img");
  //-------------------------------------------------------------
  gallery__item.classList.add("gallery__item");
  gallery__image.classList.add("gallery__image");

  gallery__item.setAttribute("href", item.original);
  //class="gallery__image"
  //src="small-image.jpg"
  //data-source="large-image.jpg"
  //alt="Image description"
  gallery__image.setAttribute("src", item.preview);
  gallery__image.setAttribute("data-source", item.original);
  gallery__image.setAttribute("alt", item.description);
  //dodanie elementów do DOM do gallery
  gallery__item.appendChild(gallery__image);
  gallery.appendChild(gallery__item);
}
