import * as fs from "fs";

const csvParse = require("csv-parse/lib/sync");


export const shuffle = (array: any[]) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

export const download = (fileName: string): number[][] => {
    const csvFile = fs.readFileSync(fileName, "utf8");
    const parseOptions = {
        auto_parse: true,
        delimiter: ",",
    };

    return csvParse(csvFile, parseOptions);
};
