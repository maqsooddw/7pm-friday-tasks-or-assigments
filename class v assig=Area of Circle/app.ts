let diametter = [20, 30, 40, 100];
let count = 0;

// creating function
function aoc(diametter1: number) {
    let pie = 3.1415;
    let redious = 0;
    let area = 0;

  // Area of circle formula = π × r2

  console.log(
    "------------This program is for calculating area of circle------------"
  );
  console.log(`\nDiametter Value is\t\t=\t${diametter1}`);

  console.log(`\nRedious Valueious is\t\t=\t${(redious = diametter1 / 2)}`);

  console.log(`\nArea of circile formula\t\t=\tArea of circle = π × r2`);

  console.log(`\n\t\t\t\t=\tπ × (${redious})^2`);

  console.log(`\n\t\t\t\t=\tπ × (${(area = redious * redious)})`);

  console.log(`\n\t\t\t\t=\t${pie} × (${area})`);

  console.log(`\n\t\t\t\t=\t${(area = pie * area)}sqf Anwser`);
}
aoc(diametter[count]);
aoc(diametter[count=count+1]);
aoc(diametter[count=count+1]);
aoc(diametter[count=count+1]);
