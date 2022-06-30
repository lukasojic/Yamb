"strict";

// const eleKockica1 = document.querySelector(".dice1");

// eleKockica1.addEventListener("click", function () {
//   eleKockica1.classList.add("selektovane-kockice");
//   eleKockica1.classList.remove("dice1");

//   eleKockica1.addEventListener("click", function () {
//     eleKockica1.classList.add("neselektovana-kockica");
//   });
// });

diceEl1.addEventListener("click", function () {
  if (buleanKockica1 === true) {
    diceEl1.classList.remove("zakljucana-kockica1");
    diceEl1.classList.add("zakljucane-kockice");
  } else if (buleanKockica1 === false) {
    diceEl1.classList.add("zakljucana-kockica1");
    diceEl1.classList.remove("zakljucane-kockice");
  }
});

diceEl2.addEventListener("click", function () {
  if (buleanKockica2 === true) {
    diceEl2.classList.remove("zakljucana-kockica2");
    diceEl2.classList.add("zakljucane-kockice");
  } else if (buleanKockica2 === false) {
    diceEl2.classList.add("zakljucana-kockica2");
    diceEl2.classList.remove("zakljucane-kockice");
  }
});
diceEl3.addEventListener("click", function () {
  if (buleanKockica3 === true) {
    diceEl3.classList.remove("zakljucana-kockica3");
    diceEl3.classList.add("zakljucane-kockice");
  } else if (buleanKockica3 === false) {
    diceEl3.classList.add("zakljucana-kockica3");
    diceEl3.classList.remove("zakljucane-kockice");
  }
});

diceEl4.addEventListener("click", function () {
  if (buleanKockica4 === true) {
    diceEl4.classList.remove("zakljucana-kockica4");
    diceEl4.classList.add("zakljucane-kockice");
  } else if (buleanKockica4 === false) {
    diceEl4.classList.add("zakljucana-kockica4");
    diceEl4.classList.remove("zakljucane-kockice");
  }
});
diceEl5.addEventListener("click", function () {
  if (buleanKockica5 === true) {
    diceEl5.classList.remove("zakljucana-kockica5");
    diceEl5.classList.add("zakljucane-kockice");
  } else if (buleanKockica5 === false) {
    diceEl5.classList.add("zakljucana-kockica5");
    diceEl5.classList.remove("zakljucane-kockice");
  }
});

diceEl6.addEventListener("click", function () {
  if (buleanKockica6 === true) {
    diceEl6.classList.remove("zakljucana-kockica6");
    diceEl6.classList.add("zakljucane-kockice");
  } else if (buleanKockica6 === false) {
    diceEl6.classList.add("zakljucana-kockica6");
    diceEl6.classList.remove("zakljucane-kockice");
  }
});
