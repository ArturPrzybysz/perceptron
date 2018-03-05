import {Perceptron} from "./Perceptron";
import * as util from "./util";


let groupA = util.download("src/data/group_A.csv");
let groupB = util.download("src/data/group_B.csv");

// Marking groups as 1 or -1
for (let i = 0; i < groupA.length; i++) {
    groupA[i].push(1);
}

for (let i = 0; i < groupB.length; i++) {
    groupB[i].push(-1);
}

// This should not have a big impact on perceptron accuracy
const dataSet = util.shuffle(groupB.concat(groupA));


const perceptron = new Perceptron(2, 0.0001);

for (const a of dataSet) {
    perceptron.learn([a[0], a[1]], a[2]);
}

const testGroup = util.download("src/data/groupTest.csv");

console.log("success rate = ", perceptron.testAccuracy(testGroup));