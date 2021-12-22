var catData = [
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
var catNames = catData.filter(function (names) { return typeof names === "string"; });
var catAges = catData.filter(function (ages) { return typeof ages === 'number'; });
console.log("Names: ", catNames);
console.log("Ages: ", catAges);
document.body.innerHTML = "\n    <ul>\n      ".concat(catNames
    .map(function (name, index) { return "<li>".concat(name, " - ").concat(catAges[index], "</li>"); })
    .join(""), "\n    </ul>\n  ");
console.log();
// const Cats: {
//   name: "string";
//   age: number;
//   alive?: boolean;
