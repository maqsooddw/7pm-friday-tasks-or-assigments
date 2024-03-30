var diametter = [20, 30, 40, 100];
var count = 1;
// creating function
function aoc(diametter1) {
    var pie = 3.1415;
    var redious = 0;
    var area = 0;
    // Area of circle formula = π × r2
    console.log("------------This program is for calculating area of circle------------");
    console.log("\nDiameeter Value is\t\t=\t".concat(diametter1));
    console.log("\nRedious Valueious is\t\t=\t".concat(redious = diametter1 / 2));
    console.log("\nArea of circile formula\t\t=\tArea of circle = \u03C0 \u00D7 r2");
    console.log("\n\t\t\t\t=\t\u03C0 \u00D7 (".concat(redious, ")^2"));
    console.log("\n\t\t\t\t=\t\u03C0 \u00D7 (".concat(area = redious * redious, ")"));
    console.log("\n\t\t\t\t=\t".concat(pie, " \u00D7 (").concat(area, ")"));
    console.log("\n\t\t\t\t=\t".concat(area = pie * area, "sqf Anwser"));
}
aoc(diametter[count]);
