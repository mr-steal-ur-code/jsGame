// const catData: (number | string)[] = [
//   "Jeffery",
//   3,
//   "Mittens",
//   4,
//   "Scooter",
//   2,
//   "Wilson",
//   1,
//   "Jeremy",
//   11,
//   "Alphonse",
//   0,
// ];

// const catNames: string[] = catData.filter(names => typeof names === "string");
// const catAges: number[] = catData.filter(ages => typeof ages === 'number');

// console.log("Names: ", catNames);
// console.log("Ages: ", catAges);

// document.body.innerHTML = `
//     <ul>
//       ${catNames
//         .map((name, index) => `<li>${name} - ${catAges[index]}</li>`)
//         .join("")}
//     </ul>
//   `;
// console.log();

const Cats: {
  name: "Jeffery";
  age: 3;
  alive?: true;

  name: "Mittens";
  age: 4;
  alive?: true;

  name: "Scooter";
  age: 2;
  alive?: true;

  name: "Wilson";
  age: 1;
  alive?: true;

  name: "Jeremy";
  age: 11;
  alive?: true;

  name: "Alphonse";
  age: 0;
  alive?: true;
}[] = [];


console.log("Cats: ", cats);

document.body.innerHTML = `
  <ul>
    ${catNames
      .map((name, index) => `<li>${name} - ${catAges[index]}</li>`)
      .join("")}
  </ul>
`;
