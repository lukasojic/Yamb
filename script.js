"strict";

const btnRoll = document.querySelector(".btn-roll");

const kockiceEl = document.querySelector(".kockice");
const diceEl1 = document.querySelector(".dice1");
const diceEl2 = document.querySelector(".dice2");
const diceEl3 = document.querySelector(".dice3");
const diceEl4 = document.querySelector(".dice4");
const diceEl5 = document.querySelector(".dice5");
const diceEl6 = document.querySelector(".dice6");

const brPoteza = document.querySelector(".br-poteza");

//Sum naizmenicne kolone
let sumaSkorovaNazimenicnih = 0;

let istina1 = true;
let istina2 = true;
let istina3 = true;
let istina4 = true;
let istina5 = true;
let istina6 = true;

let skor1 = 0;
let skor2 = 0;
let skor3 = 0;
let skor4 = 0;
let skor5 = 0;
let skor6 = 0;

let buleanKockica1 = 0;
let buleanKockica2 = 0;
let buleanKockica3 = 0;
let buleanKockica4 = 0;
let buleanKockica5 = 0;
let buleanKockica6 = 0;

let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let dice4 = 0;
let dice5 = 0;
let dice6 = 0;

let brNaizmenicnih1 = 0;
let brNaizmenicnih2 = 0;
let brNaizmenicnih3 = 0;
let brNaizmenicnih4 = 0;
let brNaizmenicnih5 = 0;
let brNaizmenicnih6 = 0;

let brojPoteza = 3;

let broj1 = 0;
let broj2 = 0;
let broj3 = 0;
let broj4 = 0;
let broj5 = 0;
let broj6 = 0;
let niz = [];

document.querySelector(".prazna-celija").textContent = "";

// Bacanje kockica

btnRoll.addEventListener("click", function () {
  buleanKockica1 = Boolean(document.querySelector(".zakljucana-kockica1"));
  buleanKockica2 = Boolean(document.querySelector(".zakljucana-kockica2"));
  buleanKockica3 = Boolean(document.querySelector(".zakljucana-kockica3"));
  buleanKockica4 = Boolean(document.querySelector(".zakljucana-kockica4"));
  buleanKockica5 = Boolean(document.querySelector(".zakljucana-kockica5"));
  buleanKockica6 = Boolean(document.querySelector(".zakljucana-kockica6"));

  if (buleanKockica1 === true) {
    dice1 = Math.trunc(Math.random() * 6) + 1;

    diceEl1.src = `dice-${dice1}.png`;
    console.log(Boolean(document.querySelector(".buleanKockica1")));
  }
  if (buleanKockica2 === true) {
    dice2 = Math.trunc(Math.random() * 6) + 1;

    diceEl2.src = `dice-${dice2}.png`;
    console.log(Boolean(document.querySelector(".buleanKockica2")));
  }
  if (buleanKockica3 === true) {
    dice3 = Math.trunc(Math.random() * 6) + 1;

    diceEl3.src = `dice-${dice3}.png`;
    console.log(Boolean(document.querySelector(".buleanKockica3")));
  }
  if (buleanKockica4 === true) {
    dice4 = Math.trunc(Math.random() * 6) + 1;

    diceEl4.src = `dice-${dice4}.png`;
    console.log(Boolean(document.querySelector(".buleanKockica4")));
  }
  if (buleanKockica5 === true) {
    dice5 = Math.trunc(Math.random() * 6) + 1;

    diceEl5.src = `dice-${dice5}.png`;
    console.log(Boolean(document.querySelector(".buleanKockica5")));
  }
  if (buleanKockica6 === true) {
    dice6 = Math.trunc(Math.random() * 6) + 1;

    diceEl6.src = `dice-${dice6}.png`;
    console.log(Boolean(document.querySelector(".buleanKockica6")));
  }

  kockiceEl.classList.remove("unselectable");
  niz.push(dice1, dice2, dice3, dice4, dice5, dice6);

  console.log(niz);

  for (let i = 0; i < 6; i++) {
    if (niz[i] === 1) {
      broj1++;
    } else if (niz[i] === 2) {
      broj2++;
    } else if (niz[i] === 3) {
      broj3++;
    } else if (niz[i] === 4) {
      broj4++;
    } else if (niz[i] === 5) {
      broj5++;
    } else if (niz[i] === 6) {
      broj6++;
    }
  }
  brNaizmenicnih1 = broj1;
  brNaizmenicnih2 = broj2;
  brNaizmenicnih3 = broj3;
  brNaizmenicnih4 = broj4;
  brNaizmenicnih5 = broj5;
  brNaizmenicnih6 = broj6;

  //    Brojanje kockica

  istina1 = Boolean(document.querySelector(".celijax-4y-6"));

  if (istina1 === true) {
    document.querySelector(".celijax-4y-6").textContent = `${broj1}`;
  }

  istina2 = Boolean(document.querySelector(".celijax-4y-5"));

  if (istina2 === true) {
    document.querySelector(".celijax-4y-5").textContent = `${broj2}`;
  }

  istina3 = Boolean(document.querySelector(".celijax-4y-4"));

  if (istina3 === true) {
    document.querySelector(".celijax-4y-4").textContent = `${broj3}`;
  }

  istina4 = Boolean(document.querySelector(".celijax-4y-3"));

  if (istina4 === true) {
    document.querySelector(".celijax-4y-3").textContent = `${broj4}`;
  }

  istina5 = Boolean(document.querySelector(".celijax-4y-2"));

  if (istina5 === true) {
    document.querySelector(".celijax-4y-2").textContent = `${broj5}`;
  }

  istina6 = Boolean(document.querySelector(".celijax-4y-1"));

  if (istina6 === true) {
    document.querySelector(".celijax-4y-1").textContent = `${broj6}`;
  }

  // document.querySelector(".celijax-4y-1").textContent = `${broj6}`;

  niz = [];

  broj1 = 0;
  broj2 = 0;
  broj3 = 0;
  broj4 = 0;
  broj5 = 0;
  broj6 = 0;

  brojPoteza--;

  brPoteza.textContent = brojPoteza;

  if (brojPoteza === 0) {
    document.querySelector(".btn-roll").classList.add("kraj-poteza");
  }
});

//     zakljucavanje vrednosti u celije

//celija X-4 Y-6
document.querySelector(".celijax-4y-6").addEventListener("click", function () {
  document.querySelector(".celijax-4y-6").classList.add("celija-selektovana");

  document.querySelector(".celijax-4y-6").textContent = `${brNaizmenicnih1}`;
  document.querySelector(".celijax-4y-6").classList.remove("celijax-4y-6");

  skor1 = brNaizmenicnih1;

  console.log(skor1);

  // ROLOVANJE POSLE UNETE VREDNOSTI

  let dice1 = Math.trunc(Math.random() * 6) + 1;
  diceEl1.src = `dice-${dice1}.png`;
  let dice2 = Math.trunc(Math.random() * 6) + 1;
  diceEl2.src = `dice-${dice2}.png`;
  let dice3 = Math.trunc(Math.random() * 6) + 1;
  diceEl3.src = `dice-${dice3}.png`;
  let dice4 = Math.trunc(Math.random() * 6) + 1;
  diceEl4.src = `dice-${dice4}.png`;
  let dice5 = Math.trunc(Math.random() * 6) + 1;
  diceEl5.src = `dice-${dice5}.png`;
  let dice6 = Math.trunc(Math.random() * 6) + 1;
  diceEl6.src = `dice-${dice6}.png`;

  kockiceEl.classList.remove("unselectable");
  niz.push(dice1, dice2, dice3, dice4, dice5, dice6);

  console.log(niz);

  for (let i = 0; i < 6; i++) {
    if (niz[i] === 1) {
      broj1++;
    } else if (niz[i] === 2) {
      broj2++;
    } else if (niz[i] === 3) {
      broj3++;
    } else if (niz[i] === 4) {
      broj4++;
    } else if (niz[i] === 5) {
      broj5++;
    } else if (niz[i] === 6) {
      broj6++;
    }
  }
  brNaizmenicnih1 = broj1;
  brNaizmenicnih2 = broj2;
  brNaizmenicnih3 = broj3;
  brNaizmenicnih4 = broj4;
  brNaizmenicnih5 = broj5;
  brNaizmenicnih6 = broj6;

  //    Brojanje kockica

  istina1 = Boolean(document.querySelector(".celijax-4y-6"));

  if (buleanKockica1 === true) {
    diceEl1.classList.remove("zakljucana-kockica1");
  } else if (buleanKockica1 === false) {
    diceEl1.classList.add("zakljucana-kockica1");
  }

  if (buleanKockica2 === true) {
    diceEl2.classList.remove("zakljucana-kockica2");
  } else if (buleanKockica2 === false) {
    diceEl2.classList.add("zakljucana-kockica2");
  }

  if (istina1 === true) {
    document.querySelector(".celijax-4y-6").textContent = `${broj1}`;
  }

  istina2 = Boolean(document.querySelector(".celijax-4y-5"));

  if (istina2 === true) {
    document.querySelector(".celijax-4y-5").textContent = `${broj2}`;
  }

  istina3 = Boolean(document.querySelector(".celijax-4y-4"));

  if (istina3 === true) {
    document.querySelector(".celijax-4y-4").textContent = `${broj3}`;
  }

  istina4 = Boolean(document.querySelector(".celijax-4y-3"));

  if (istina4 === true) {
    document.querySelector(".celijax-4y-3").textContent = `${broj4}`;
  }

  istina5 = Boolean(document.querySelector(".celijax-4y-2"));

  if (istina5 === true) {
    document.querySelector(".celijax-4y-2").textContent = `${broj5}`;
  }

  istina6 = Boolean(document.querySelector(".celijax-4y-1"));

  if (istina6 === true) {
    document.querySelector(".celijax-4y-1").textContent = `${broj6}`;
  }

  // document.querySelector(".celijax-4y-1").textContent = `${broj6}`;

  niz = [];

  broj1 = 0;
  broj2 = 0;
  broj3 = 0;
  broj4 = 0;
  broj5 = 0;
  broj6 = 0;

  sumaSkorovaNazimenicnih = sumaSkorovaNazimenicnih + skor1;

  document.querySelector(".brojac-skora").textContent = sumaSkorovaNazimenicnih;

  brojPoteza = 2;

  brPoteza.textContent = brojPoteza;

  document.querySelector(".btn-roll").classList.remove("kraj-poteza");

  if (buleanKockica1 === true) {
    diceEl1.classList.remove("zakljucana-kockica1");
  } else if (buleanKockica1 === false) {
    diceEl1.classList.add("zakljucana-kockica1");
  }

  // if (buleanKockica2 === true) {
  //   diceEl2.classList.remove("zakljucana-kockica2");
  // } else if (buleanKockica2 === false) {
  //   diceEl2.classList.add("zakljucana-kockica2");
  // }

  if (buleanKockica1 === false) {
    diceEl1.classList.add("zakljucana-kockica1");
  }
  if (buleanKockica2 === false) {
    diceEl2.classList.add("zakljucana-kockica2");
  }
  if (buleanKockica3 === false) {
    diceEl3.classList.add("zakljucana-kockica3");
  }
  if (buleanKockica4 === false) {
    diceEl4.classList.add("zakljucana-kockica4");
  }
  if (buleanKockica5 === false) {
    diceEl5.classList.add("zakljucana-kockica5");
  }
  if (buleanKockica6 === false) {
    diceEl6.classList.add("zakljucana-kockica6");
  }

  diceEl1.classList.remove("zakljucane-kockice");
  diceEl2.classList.remove("zakljucane-kockice");
  diceEl3.classList.remove("zakljucane-kockice");
  diceEl4.classList.remove("zakljucane-kockice");
  diceEl5.classList.remove("zakljucane-kockice");
  diceEl6.classList.remove("zakljucane-kockice");
});

//celeija X-4 Y-5

document.querySelector(".celijax-4y-5").addEventListener("click", function () {
  document.querySelector(".celijax-4y-5").classList.add("celija-selektovana");

  document.querySelector(".celijax-4y-5").textContent = `${brNaizmenicnih2}`;
  document.querySelector(".celijax-4y-5").classList.remove("celijax-4y-5");

  skor2 = brNaizmenicnih2;

  console.log(skor2);
  // ROLOVANJE POSLE UNETE VREDNOSTI

  let dice1 = Math.trunc(Math.random() * 6) + 1;
  diceEl1.src = `dice-${dice1}.png`;
  let dice2 = Math.trunc(Math.random() * 6) + 1;
  diceEl2.src = `dice-${dice2}.png`;
  let dice3 = Math.trunc(Math.random() * 6) + 1;
  diceEl3.src = `dice-${dice3}.png`;
  let dice4 = Math.trunc(Math.random() * 6) + 1;
  diceEl4.src = `dice-${dice4}.png`;
  let dice5 = Math.trunc(Math.random() * 6) + 1;
  diceEl5.src = `dice-${dice5}.png`;
  let dice6 = Math.trunc(Math.random() * 6) + 1;
  diceEl6.src = `dice-${dice6}.png`;

  kockiceEl.classList.remove("unselectable");
  niz.push(dice1, dice2, dice3, dice4, dice5, dice6);

  console.log(niz);

  for (let i = 0; i < 6; i++) {
    if (niz[i] === 1) {
      broj1++;
    } else if (niz[i] === 2) {
      broj2++;
    } else if (niz[i] === 3) {
      broj3++;
    } else if (niz[i] === 4) {
      broj4++;
    } else if (niz[i] === 5) {
      broj5++;
    } else if (niz[i] === 6) {
      broj6++;
    }
  }
  brNaizmenicnih1 = broj1;
  brNaizmenicnih2 = broj2;
  brNaizmenicnih3 = broj3;
  brNaizmenicnih4 = broj4;
  brNaizmenicnih5 = broj5;
  brNaizmenicnih6 = broj6;

  //    Brojanje kockica

  istina1 = Boolean(document.querySelector(".celijax-4y-6"));

  if (istina1 === true) {
    document.querySelector(".celijax-4y-6").textContent = `${broj1}`;
  }

  istina2 = Boolean(document.querySelector(".celijax-4y-5"));

  if (istina2 === true) {
    document.querySelector(".celijax-4y-5").textContent = `${broj2}`;
  }

  istina3 = Boolean(document.querySelector(".celijax-4y-4"));

  if (istina3 === true) {
    document.querySelector(".celijax-4y-4").textContent = `${broj3}`;
  }

  istina4 = Boolean(document.querySelector(".celijax-4y-3"));

  if (istina4 === true) {
    document.querySelector(".celijax-4y-3").textContent = `${broj4}`;
  }

  istina5 = Boolean(document.querySelector(".celijax-4y-2"));

  if (istina5 === true) {
    document.querySelector(".celijax-4y-2").textContent = `${broj5}`;
  }

  istina6 = Boolean(document.querySelector(".celijax-4y-1"));

  if (istina6 === true) {
    document.querySelector(".celijax-4y-1").textContent = `${broj6}`;
  }

  // document.querySelector(".celijax-4y-1").textContent = `${broj6}`;

  niz = [];

  broj1 = 0;
  broj2 = 0;
  broj3 = 0;
  broj4 = 0;
  broj5 = 0;
  broj6 = 0;

  sumaSkorovaNazimenicnih = sumaSkorovaNazimenicnih + skor2;

  document.querySelector(".brojac-skora").textContent = sumaSkorovaNazimenicnih;

  brojPoteza = 2;

  brPoteza.textContent = brojPoteza;

  document.querySelector(".btn-roll").classList.remove("kraj-poteza");

  if (buleanKockica1 === false) {
    diceEl1.classList.add("zakljucana-kockica1");
  }
  if (buleanKockica2 === false) {
    diceEl2.classList.add("zakljucana-kockica2");
  }
  if (buleanKockica3 === false) {
    diceEl3.classList.add("zakljucana-kockica3");
  }
  if (buleanKockica4 === false) {
    diceEl4.classList.add("zakljucana-kockica4");
  }
  if (buleanKockica5 === false) {
    diceEl5.classList.add("zakljucana-kockica5");
  }
  if (buleanKockica6 === false) {
    diceEl6.classList.add("zakljucana-kockica6");
  }
  diceEl1.classList.remove("zakljucane-kockice");
  diceEl2.classList.remove("zakljucane-kockice");
  diceEl3.classList.remove("zakljucane-kockice");
  diceEl4.classList.remove("zakljucane-kockice");
  diceEl5.classList.remove("zakljucane-kockice");
  diceEl6.classList.remove("zakljucane-kockice");
});

//celeija X-4 Y-4

document.querySelector(".celijax-4y-4").addEventListener("click", function () {
  document.querySelector(".celijax-4y-4").classList.add("celija-selektovana");

  document.querySelector(".celijax-4y-4").textContent = `${brNaizmenicnih3}`;
  document.querySelector(".celijax-4y-4").classList.remove("celijax-4y-4");

  skor3 = brNaizmenicnih3;

  console.log(skor3);
  // ROLOVANJE POSLE UNETE VREDNOSTI

  let dice1 = Math.trunc(Math.random() * 6) + 1;
  diceEl1.src = `dice-${dice1}.png`;
  let dice2 = Math.trunc(Math.random() * 6) + 1;
  diceEl2.src = `dice-${dice2}.png`;
  let dice3 = Math.trunc(Math.random() * 6) + 1;
  diceEl3.src = `dice-${dice3}.png`;
  let dice4 = Math.trunc(Math.random() * 6) + 1;
  diceEl4.src = `dice-${dice4}.png`;
  let dice5 = Math.trunc(Math.random() * 6) + 1;
  diceEl5.src = `dice-${dice5}.png`;
  let dice6 = Math.trunc(Math.random() * 6) + 1;
  diceEl6.src = `dice-${dice6}.png`;

  kockiceEl.classList.remove("unselectable");
  niz.push(dice1, dice2, dice3, dice4, dice5, dice6);

  console.log(niz);

  for (let i = 0; i < 6; i++) {
    if (niz[i] === 1) {
      broj1++;
    } else if (niz[i] === 2) {
      broj2++;
    } else if (niz[i] === 3) {
      broj3++;
    } else if (niz[i] === 4) {
      broj4++;
    } else if (niz[i] === 5) {
      broj5++;
    } else if (niz[i] === 6) {
      broj6++;
    }
  }
  brNaizmenicnih1 = broj1;
  brNaizmenicnih2 = broj2;
  brNaizmenicnih3 = broj3;
  brNaizmenicnih4 = broj4;
  brNaizmenicnih5 = broj5;
  brNaizmenicnih6 = broj6;

  //    Brojanje kockica

  istina1 = Boolean(document.querySelector(".celijax-4y-6"));

  if (istina1 === true) {
    document.querySelector(".celijax-4y-6").textContent = `${broj1}`;
  }

  istina2 = Boolean(document.querySelector(".celijax-4y-5"));

  if (istina2 === true) {
    document.querySelector(".celijax-4y-5").textContent = `${broj2}`;
  }

  istina3 = Boolean(document.querySelector(".celijax-4y-4"));

  if (istina3 === true) {
    document.querySelector(".celijax-4y-4").textContent = `${broj3}`;
  }

  istina4 = Boolean(document.querySelector(".celijax-4y-3"));

  if (istina4 === true) {
    document.querySelector(".celijax-4y-3").textContent = `${broj4}`;
  }

  istina5 = Boolean(document.querySelector(".celijax-4y-2"));

  if (istina5 === true) {
    document.querySelector(".celijax-4y-2").textContent = `${broj5}`;
  }

  istina6 = Boolean(document.querySelector(".celijax-4y-1"));

  if (istina6 === true) {
    document.querySelector(".celijax-4y-1").textContent = `${broj6}`;
  }

  // document.querySelector(".celijax-4y-1").textContent = `${broj6}`;

  niz = [];

  broj1 = 0;
  broj2 = 0;
  broj3 = 0;
  broj4 = 0;
  broj5 = 0;
  broj6 = 0;

  sumaSkorovaNazimenicnih = sumaSkorovaNazimenicnih + skor3;

  document.querySelector(".brojac-skora").textContent = sumaSkorovaNazimenicnih;

  brojPoteza = 2;

  brPoteza.textContent = brojPoteza;

  document.querySelector(".btn-roll").classList.remove("kraj-poteza");

  if (buleanKockica1 === false) {
    diceEl1.classList.add("zakljucana-kockica1");
  }
  if (buleanKockica2 === false) {
    diceEl2.classList.add("zakljucana-kockica2");
  }
  if (buleanKockica3 === false) {
    diceEl3.classList.add("zakljucana-kockica3");
  }
  if (buleanKockica4 === false) {
    diceEl4.classList.add("zakljucana-kockica4");
  }
  if (buleanKockica5 === false) {
    diceEl5.classList.add("zakljucana-kockica5");
  }
  if (buleanKockica6 === false) {
    diceEl6.classList.add("zakljucana-kockica6");
  }

  diceEl1.classList.remove("zakljucane-kockice");
  diceEl2.classList.remove("zakljucane-kockice");
  diceEl3.classList.remove("zakljucane-kockice");
  diceEl4.classList.remove("zakljucane-kockice");
  diceEl5.classList.remove("zakljucane-kockice");
  diceEl6.classList.remove("zakljucane-kockice");
});

//celeija X-4 Y-3

document.querySelector(".celijax-4y-3").addEventListener("click", function () {
  document.querySelector(".celijax-4y-3").classList.add("celija-selektovana");

  document.querySelector(".celijax-4y-3").textContent = `${brNaizmenicnih4}`;
  document.querySelector(".celijax-4y-3").classList.remove("celijax-4y-3");

  skor4 = brNaizmenicnih4;

  console.log(skor4);

  // ROLOVANJE POSLE UNETE VREDNOSTI

  dice1 = Math.trunc(Math.random() * 6) + 1;
  diceEl1.src = `dice-${dice1}.png`;
  dice2 = Math.trunc(Math.random() * 6) + 1;
  diceEl2.src = `dice-${dice2}.png`;
  dice3 = Math.trunc(Math.random() * 6) + 1;
  diceEl3.src = `dice-${dice3}.png`;
  dice4 = Math.trunc(Math.random() * 6) + 1;
  diceEl4.src = `dice-${dice4}.png`;
  dice5 = Math.trunc(Math.random() * 6) + 1;
  diceEl5.src = `dice-${dice5}.png`;
  dice6 = Math.trunc(Math.random() * 6) + 1;
  diceEl6.src = `dice-${dice6}.png`;

  kockiceEl.classList.remove("unselectable");
  niz.push(dice1, dice2, dice3, dice4, dice5, dice6);

  console.log(niz);

  for (let i = 0; i < 6; i++) {
    if (niz[i] === 1) {
      broj1++;
    } else if (niz[i] === 2) {
      broj2++;
    } else if (niz[i] === 3) {
      broj3++;
    } else if (niz[i] === 4) {
      broj4++;
    } else if (niz[i] === 5) {
      broj5++;
    } else if (niz[i] === 6) {
      broj6++;
    }
  }
  brNaizmenicnih1 = broj1;
  brNaizmenicnih2 = broj2;
  brNaizmenicnih3 = broj3;
  brNaizmenicnih4 = broj4;
  brNaizmenicnih5 = broj5;
  brNaizmenicnih6 = broj6;

  //    Brojanje kockica

  istina1 = Boolean(document.querySelector(".celijax-4y-6"));

  if (istina1 === true) {
    document.querySelector(".celijax-4y-6").textContent = `${broj1}`;
  }

  istina2 = Boolean(document.querySelector(".celijax-4y-5"));

  if (istina2 === true) {
    document.querySelector(".celijax-4y-5").textContent = `${broj2}`;
  }

  istina3 = Boolean(document.querySelector(".celijax-4y-4"));

  if (istina3 === true) {
    document.querySelector(".celijax-4y-4").textContent = `${broj3}`;
  }

  istina4 = Boolean(document.querySelector(".celijax-4y-3"));

  if (istina4 === true) {
    document.querySelector(".celijax-4y-3").textContent = `${broj4}`;
  }

  istina5 = Boolean(document.querySelector(".celijax-4y-2"));

  if (istina5 === true) {
    document.querySelector(".celijax-4y-2").textContent = `${broj5}`;
  }

  istina6 = Boolean(document.querySelector(".celijax-4y-1"));

  if (istina6 === true) {
    document.querySelector(".celijax-4y-1").textContent = `${broj6}`;
  }

  // document.querySelector(".celijax-4y-1").textContent = `${broj6}`;

  niz = [];

  broj1 = 0;
  broj2 = 0;
  broj3 = 0;
  broj4 = 0;
  broj5 = 0;
  broj6 = 0;

  sumaSkorovaNazimenicnih = sumaSkorovaNazimenicnih + skor4;

  document.querySelector(".brojac-skora").textContent = sumaSkorovaNazimenicnih;

  brojPoteza = 2;

  brPoteza.textContent = brojPoteza;

  document.querySelector(".btn-roll").classList.remove("kraj-poteza");

  if (buleanKockica1 === false) {
    diceEl1.classList.add("zakljucana-kockica1");
  }
  if (buleanKockica2 === false) {
    diceEl2.classList.add("zakljucana-kockica2");
  }
  if (buleanKockica3 === false) {
    diceEl3.classList.add("zakljucana-kockica3");
  }
  if (buleanKockica4 === false) {
    diceEl4.classList.add("zakljucana-kockica4");
  }
  if (buleanKockica5 === false) {
    diceEl5.classList.add("zakljucana-kockica5");
  }
  if (buleanKockica6 === false) {
    diceEl6.classList.add("zakljucana-kockica6");
  }
  diceEl1.classList.remove("zakljucane-kockice");
  diceEl2.classList.remove("zakljucane-kockice");
  diceEl3.classList.remove("zakljucane-kockice");
  diceEl4.classList.remove("zakljucane-kockice");
  diceEl5.classList.remove("zakljucane-kockice");
  diceEl6.classList.remove("zakljucane-kockice");
});

//celeija X-4 Y-2

document.querySelector(".celijax-4y-2").addEventListener("click", function () {
  document.querySelector(".celijax-4y-2").classList.add("celija-selektovana");

  document.querySelector(".celijax-4y-2").textContent = `${brNaizmenicnih5}`;
  document.querySelector(".celijax-4y-2").classList.remove("celijax-4y-2");

  skor5 = brNaizmenicnih5;

  console.log(skor5);
  // ROLOVANJE POSLE UNETE VREDNOSTI

  let dice1 = Math.trunc(Math.random() * 6) + 1;
  diceEl1.src = `dice-${dice1}.png`;
  let dice2 = Math.trunc(Math.random() * 6) + 1;
  diceEl2.src = `dice-${dice2}.png`;
  let dice3 = Math.trunc(Math.random() * 6) + 1;
  diceEl3.src = `dice-${dice3}.png`;
  let dice4 = Math.trunc(Math.random() * 6) + 1;
  diceEl4.src = `dice-${dice4}.png`;
  let dice5 = Math.trunc(Math.random() * 6) + 1;
  diceEl5.src = `dice-${dice5}.png`;
  let dice6 = Math.trunc(Math.random() * 6) + 1;
  diceEl6.src = `dice-${dice6}.png`;

  kockiceEl.classList.remove("unselectable");
  niz.push(dice1, dice2, dice3, dice4, dice5, dice6);

  console.log(niz);

  for (let i = 0; i < 6; i++) {
    if (niz[i] === 1) {
      broj1++;
    } else if (niz[i] === 2) {
      broj2++;
    } else if (niz[i] === 3) {
      broj3++;
    } else if (niz[i] === 4) {
      broj4++;
    } else if (niz[i] === 5) {
      broj5++;
    } else if (niz[i] === 6) {
      broj6++;
    }
  }
  brNaizmenicnih1 = broj1;
  brNaizmenicnih2 = broj2;
  brNaizmenicnih3 = broj3;
  brNaizmenicnih4 = broj4;
  brNaizmenicnih5 = broj5;
  brNaizmenicnih6 = broj6;

  //    Brojanje kockica

  istina1 = Boolean(document.querySelector(".celijax-4y-6"));

  if (istina1 === true) {
    document.querySelector(".celijax-4y-6").textContent = `${broj1}`;
  }

  istina2 = Boolean(document.querySelector(".celijax-4y-5"));

  if (istina2 === true) {
    document.querySelector(".celijax-4y-5").textContent = `${broj2}`;
  }

  istina3 = Boolean(document.querySelector(".celijax-4y-4"));

  if (istina3 === true) {
    document.querySelector(".celijax-4y-4").textContent = `${broj3}`;
  }

  istina4 = Boolean(document.querySelector(".celijax-4y-3"));

  if (istina4 === true) {
    document.querySelector(".celijax-4y-3").textContent = `${broj4}`;
  }

  istina5 = Boolean(document.querySelector(".celijax-4y-2"));

  if (istina5 === true) {
    document.querySelector(".celijax-4y-2").textContent = `${broj5}`;
  }

  istina6 = Boolean(document.querySelector(".celijax-4y-1"));

  if (istina6 === true) {
    document.querySelector(".celijax-4y-1").textContent = `${broj6}`;
  }

  // document.querySelector(".celijax-4y-1").textContent = `${broj6}`;

  niz = [];

  broj1 = 0;
  broj2 = 0;
  broj3 = 0;
  broj4 = 0;
  broj5 = 0;
  broj6 = 0;

  sumaSkorovaNazimenicnih = sumaSkorovaNazimenicnih + skor5;

  document.querySelector(".brojac-skora").textContent = sumaSkorovaNazimenicnih;

  brojPoteza = 2;

  brPoteza.textContent = brojPoteza;

  document.querySelector(".btn-roll").classList.remove("kraj-poteza");

  if (buleanKockica1 === false) {
    diceEl1.classList.add("zakljucana-kockica1");
  }
  if (buleanKockica2 === false) {
    diceEl2.classList.add("zakljucana-kockica2");
  }
  if (buleanKockica3 === false) {
    diceEl3.classList.add("zakljucana-kockica3");
  }
  if (buleanKockica4 === false) {
    diceEl4.classList.add("zakljucana-kockica4");
  }
  if (buleanKockica5 === false) {
    diceEl5.classList.add("zakljucana-kockica5");
  }
  if (buleanKockica6 === false) {
    diceEl6.classList.add("zakljucana-kockica6");
  }
  diceEl1.classList.remove("zakljucane-kockice");
  diceEl2.classList.remove("zakljucane-kockice");
  diceEl3.classList.remove("zakljucane-kockice");
  diceEl4.classList.remove("zakljucane-kockice");
  diceEl5.classList.remove("zakljucane-kockice");
  diceEl6.classList.remove("zakljucane-kockice");
});

//celeija X-4 Y-1

document.querySelector(".celijax-4y-1").addEventListener("click", function () {
  document.querySelector(".celijax-4y-1").classList.add("celija-selektovana");

  document.querySelector(".celijax-4y-1").textContent = `${brNaizmenicnih6}`;
  document.querySelector(".celijax-4y-1").classList.remove("celijax-4y-1");

  skor6 = brNaizmenicnih6;

  console.log(skor6);

  // ROLOVANJE POSLE UNETE VREDNOSTI

  let dice1 = Math.trunc(Math.random() * 6) + 1;
  diceEl1.src = `dice-${dice1}.png`;
  let dice2 = Math.trunc(Math.random() * 6) + 1;
  diceEl2.src = `dice-${dice2}.png`;
  let dice3 = Math.trunc(Math.random() * 6) + 1;
  diceEl3.src = `dice-${dice3}.png`;
  let dice4 = Math.trunc(Math.random() * 6) + 1;
  diceEl4.src = `dice-${dice4}.png`;
  let dice5 = Math.trunc(Math.random() * 6) + 1;
  diceEl5.src = `dice-${dice5}.png`;
  let dice6 = Math.trunc(Math.random() * 6) + 1;
  diceEl6.src = `dice-${dice6}.png`;

  kockiceEl.classList.remove("unselectable");
  niz.push(dice1, dice2, dice3, dice4, dice5, dice6);

  console.log(niz);

  for (let i = 0; i < 6; i++) {
    if (niz[i] === 1) {
      broj1++;
    } else if (niz[i] === 2) {
      broj2++;
    } else if (niz[i] === 3) {
      broj3++;
    } else if (niz[i] === 4) {
      broj4++;
    } else if (niz[i] === 5) {
      broj5++;
    } else if (niz[i] === 6) {
      broj6++;
    }
  }
  brNaizmenicnih1 = broj1;
  brNaizmenicnih2 = broj2;
  brNaizmenicnih3 = broj3;
  brNaizmenicnih4 = broj4;
  brNaizmenicnih5 = broj5;
  brNaizmenicnih6 = broj6;

  //    Brojanje kockica

  istina1 = Boolean(document.querySelector(".celijax-4y-6"));

  if (istina1 === true) {
    document.querySelector(".celijax-4y-6").textContent = `${broj1}`;
  }

  istina2 = Boolean(document.querySelector(".celijax-4y-5"));

  if (istina2 === true) {
    document.querySelector(".celijax-4y-5").textContent = `${broj2}`;
  }

  istina3 = Boolean(document.querySelector(".celijax-4y-4"));

  if (istina3 === true) {
    document.querySelector(".celijax-4y-4").textContent = `${broj3}`;
  }

  istina4 = Boolean(document.querySelector(".celijax-4y-3"));

  if (istina4 === true) {
    document.querySelector(".celijax-4y-3").textContent = `${broj4}`;
  }

  istina5 = Boolean(document.querySelector(".celijax-4y-2"));

  if (istina5 === true) {
    document.querySelector(".celijax-4y-2").textContent = `${broj5}`;
  }

  istina6 = Boolean(document.querySelector(".celijax-4y-1"));

  if (istina6 === true) {
    document.querySelector(".celijax-4y-1").textContent = `${broj6}`;
  }

  // document.querySelector(".celijax-4y-1").textContent = `${broj6}`;

  niz = [];

  broj1 = 0;
  broj2 = 0;
  broj3 = 0;
  broj4 = 0;
  broj5 = 0;
  broj6 = 0;

  sumaSkorovaNazimenicnih = sumaSkorovaNazimenicnih + skor6;

  document.querySelector(".brojac-skora").textContent = sumaSkorovaNazimenicnih;

  brojPoteza = 2;

  brPoteza.textContent = brojPoteza;

  document.querySelector(".btn-roll").classList.remove("kraj-poteza");

  if (buleanKockica1 === false) {
    diceEl1.classList.add("zakljucana-kockica1");
  }
  if (buleanKockica2 === false) {
    diceEl2.classList.add("zakljucana-kockica2");
  }
  if (buleanKockica3 === false) {
    diceEl3.classList.add("zakljucana-kockica3");
  }
  if (buleanKockica4 === false) {
    diceEl4.classList.add("zakljucana-kockica4");
  }
  if (buleanKockica5 === false) {
    diceEl5.classList.add("zakljucana-kockica5");
  }
  if (buleanKockica6 === false) {
    diceEl6.classList.add("zakljucana-kockica6");
  }
  diceEl1.classList.remove("zakljucane-kockice");
  diceEl2.classList.remove("zakljucane-kockice");
  diceEl3.classList.remove("zakljucane-kockice");
  diceEl4.classList.remove("zakljucane-kockice");
  diceEl5.classList.remove("zakljucane-kockice");
  diceEl6.classList.remove("zakljucane-kockice");
});

document.querySelector(".jebemliga").addEventListener("click", function () {
  console.log(skor1, skor2, skor3, skor4, skor5, skor6);

  console.log(sumaSkorovaNazimenicnih);
});
