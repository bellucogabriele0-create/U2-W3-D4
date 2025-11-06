const pexelURL = "https://api.pexels.com/v1/search?query=hamsters";
const secondURL = "https://api.pexels.com/v1/search?query=tigers";

const apiimg = (url) => {
  return fetch(url, {
    headers: {
      Authorization: "HJ7g1y3DCfV4pdnMApiqmWk9iEL0qFy9hjLbO9NWzwaL4wkecdBxeRne",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("ERRORE QUA1 " + res.status);
      }
    })
    .then((data) => {
      console.log("IMMAGINI ", data);
      return data.photos;
    })
    .catch((err) => {
      console.log("ERRORE QUA 2", err);
    });
};
const btnimg = (p) => {
  const imgElements = document.querySelectorAll("img");

  imgElements.forEach((img, i) => {
    if (p[i]) {
      img.src = p[i].src.medium;
      img.alt = p[i].alt;
    }
  });
};

const loadBtn = document.querySelector(".btn-primary");

loadBtn.addEventListener("click", function () {
  apiimg(pexelURL)
    .then((p) => {
      if (p) {
        btnimg(p);
      }
    })
    .catch((err) => {
      console.log("ERRORE QUA 3", err);
    });
});

const tigerBtn = document.querySelector(".btn-secondary");

tigerBtn.addEventListener("click", function () {
  apiimg(secondURL)
    .then((p) => {
      if (p) {
        btnimg(p);
      }
    })
    .catch((err) => {
      console.log("ERRORE QUA 4", err);
    });
});

const hideBtn = document.querySelectorAll(".btn-outline-secondary");

hideBtn.forEach((b) => {
  b.addEventListener("click", function () {
    const card = b.closest(".card");
    if (b.innerText === "Edit") {
      b.innerText = "Hide";
    } else if (b.innerText === "Hide") {
      card.remove();
    }
  });
});


const minuti 