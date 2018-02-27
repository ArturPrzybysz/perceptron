import * as fs from "fs";

const gnuplot = require("gnuplot");
const csvParse = require("csv-parse/lib/sync");

const parseOptions = {
    auto_parse: true,
    columns: ["x", "y"],
    delimiter: " ",
};

const csvFile1 = fs.readFileSync("src/data/approximation_train_1.txt", "utf8");
const csvFile2 = fs.readFileSync("src/data/approximation_train_2.txt", "utf8");

const groupA = csvParse(csvFile1, parseOptions);
const groupB = csvParse(csvFile2, parseOptions);

gnuplot()
    .set('term png')
    .set('output "out1.png"')
    .plot('"src/data/approximation_train_1.txt" using 1:2 title "Column"')
    .end();


gnuplot()
    .set('term png')
    .set('output "out1.png"')
    .plot('"src/data/approximation_train_1.txt" using 1:2 title "Group A", "src/data/approximation_train_2.txt" using 1:2 title "Group B"')
    .end();
