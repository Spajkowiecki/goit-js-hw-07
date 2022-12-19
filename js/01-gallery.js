import { galleryItems } from "./gallery-items.js";
// Change code below this line
//-------------------------------------
//            My steps:
// 1.
// 2.
// 3.
// 4.
// 5.
//////////////////////////////////////
const { log } = console;
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    console.log(e.target);
    const window = basicLightbox.create(`<img src=${e.target.dataset.source}>
      `);
    window.show();
    gallery.addEventListener("keyup", (k) => {
      if (k.key === "Escape") {
        window.close();
      }
    });
  }
});

for (let item of galleryItems) {
  //deklaracja elementów DOM
  let gallery__item = document.createElement("div");
  let gallery__link = document.createElement("a");
  let gallery__image = document.createElement("img");
  //-------------------------------------------------------------
  gallery__item.classList.add("gallery__item");
  gallery__link.classList.add("gallery__link");
  gallery__image.classList.add("gallery__image");

  gallery__link.setAttribute("href", item.original);
  //class="gallery__image"
  //src="small-image.jpg"
  //data-source="large-image.jpg"
  //alt="Image description"
  gallery__image.setAttribute("src", item.preview);
  gallery__image.setAttribute("data-source", item.original);
  gallery__image.setAttribute("alt", item.description);
  //dodanie elementów do DOM do gallery
  gallery__link.appendChild(gallery__image);
  gallery__item.appendChild(gallery__link);
  gallery.appendChild(gallery__item);
}
