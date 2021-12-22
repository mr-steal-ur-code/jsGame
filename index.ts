const catData: (number | string)[] = [
<<<<<<< HEAD
  "Jeffery",
  3,
  "Mittens",
  4,
  "Scooter",
  2,
  "Wilson",
  1,
  "Jeremy",
  11,
  "Alphonse",
  0,
];

const catNames: string[] = catData.filter(names => typeof names === "string");
const catAges: number[] = catData.filter(ages => typeof ages === 'number');
=======
    "Jeffery",
    3,
    "Mittens",
    4,
    "Scooter",
    2,
    "Wilson",
    1,
    "Jeremy",
    11,
    "Alphonse",
    0,
];

const catNames: string[] = [catData.filter(name => name === "string")];
const catAges: number[] = [];
>>>>>>> 0afc4cbb21a80fdd624b7d856aee18d6240dc565


console.log("Names: ", catNames);
console.log("Ages: ", catAges);

document.body.innerHTML = `
<<<<<<< HEAD
    <ul>
      ${catNames
        .map((name, index) => `<li>${name} - ${catAges[index]}</li>`)
        .join("")}
    </ul>
  `;
console.log();

=======
                              <ul>
                                  ${catNames
        .map((name, index) => `<li>${name} - ${catAges[index]}</li>`)
        .join("")}
                                                </ul>`
                                  
>>>>>>> 0afc4cbb21a80fdd624b7d856aee18d6240dc565
