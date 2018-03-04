import * as fs from "fs";
import {Perceptron} from "./Perceptron";
import {shuffle} from "./util";

const propel = require("propel");

const gnuplot = require("gnuplot");
const csvParse = require("csv-parse/lib/sync");


// fs.createReadStream('src/data/group_A_spaces.csv')
//     .pipe(gnuplot()
//         .set('term png')
//         .set('output "A.png"')
//         .plot('"-" using 1:2 title "Column"')
//     );

const csvFile1 = fs.readFileSync("src/data/group_A.csv", "utf8");
const csvFile2 = fs.readFileSync("src/data/group_B.csv", "utf8");
const parseOptions = {
    auto_parse: true,
    delimiter: ",",
};
let groupA = csvParse(csvFile1, parseOptions);
let groupB = csvParse(csvFile2, parseOptions);

const perceptron = new Perceptron(1, 0.001);

const dataSet = shuffle(groupB.concat(groupA));

for (const a of dataSet) {
    perceptron.learn([a[0]], a[1]);
}


console.log(" test ", perceptron.value([1]));
console.log(perceptron.weights);
console.log(perceptron.bias);

