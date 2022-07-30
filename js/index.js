const hamburger = document.querySelector(".hamburger");
// const HamBurger = document.querySelector('.ham-container');

hamburger.addEventListener("click", () => {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myHamburger").classList.toggle("change");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    document.getElementById("myDropdown").classList.remove("show");
    document.getElementById("myHamburger").classList.remove("change");
  })
);



const gallery = [
  {
    image: "./images/ankaraGown.jpg",
    imageAlternative: "Ankara Gown",
    title: "Ankara Gowns",
    description: "This is a beautiful female ankara printed gown",
  },
  {
    image: "./images/ankaraGown.jpg",
    imageAlternative: "Ankara Gown",
    title: "Ankara Gowns",
    description: "This is a beautiful female ankara printed gown",
  },
];
const galleryCards = document.querySelector(".gallery-cards");
gallery.forEach(function (card) {
  let cardImage = document.createElement("img");
  cardImage.className = "card-img";
  cardImage.src = `${card.image}`;
  cardImage.alt = `${card.imageAlternative}`;

  let title = document.createElement("h5");
  title.className = "card-title";
  title.innerHTML = `${card.title}`;

  let description = document.createElement("p");
  description.className = "card-text";
  description.innerHTML = `${card.description}`;

  let imgDiv = document.createElement("div");
  imgDiv.className = "col-md-6";
  imgDiv.appendChild(cardImage);

  let contentDiv = document.createElement("div");
  contentDiv.className = "card-body mt-5";
  contentDiv.appendChild(title);
  contentDiv.appendChild(description);

  let contentDiv2 = document.createElement("div");
  contentDiv2.className = "col-md-6 bg-gradient";
  contentDiv2.appendChild(contentDiv);

  let contentDiv3 = document.createElement("div");
  contentDiv3.className = "row no-gutters";
  contentDiv3.appendChild(imgDiv);
  contentDiv3.appendChild(contentDiv2);

  let contentDiv4 = document.createElement("div");
  contentDiv4.className = "card mb-3";
  contentDiv4.appendChild(contentDiv3);

  let contentDiv5 = document.createElement("div");
  contentDiv5.className = "card-deck col-6";
  contentDiv5.appendChild(contentDiv4);

  galleryCards.appendChild(contentDiv5);
});
