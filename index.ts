const catData: (number | string)[] = [
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


console.log("Names: ", catNames);
console.log("Ages: ", catAges);

document.body.innerHTML = `
                              <ul>
                                  ${catNames
        .map((name, index) => `<li>${name} - ${catAges[index]}</li>`)
        .join("")}
                                                </ul>`
                                  