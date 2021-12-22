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
var Cats = [];
console.log("Cats: ", cats);
document.body.innerHTML = "\n  <ul>\n    ".concat(catNames
    .map(function (name, index) { return "<li>".concat(name, " - ").concat(catAges[index], "</li>"); })
    .join(""), "\n  </ul>\n");
