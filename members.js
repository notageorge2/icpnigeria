var gallery = document.querySelector(".gallery");
gallery.innerHTML = members
  .map((x) => {
    return `
        <a
          href="images/${x.img}"
          data-lightbox="${x.category}"
          data-title="${x.name}"
        >
          <img
            src="images/${x.img}"
            alt="${x.name}"
          />
        </a>
        `;
  })
  .join("");
