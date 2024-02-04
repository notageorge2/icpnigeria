const populate = (selector, category) => {
  var NewSelector = document.getElementById(selector);
  NewSelector.innerHTML = category
    .map((x) => {
      return `
      <a href="images/${x.img}" data-lightbox="${x.category}" data-title="${x.name}">
        <img src="images/${x.img}" alt="${x.name}" style="border-radius: 8px;" />
      </a>
    `;
    })
    .join("");
};

populate("fellows", fellows);
populate("management", management);
