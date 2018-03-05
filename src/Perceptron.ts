export class Perceptron {
    weights: number[];
    bias: number;
    learningRate: number;

    constructor(dimensions: number, learningRate: number) {
        this.weights = new Array(dimensions);
        for (let i = 0; i < dimensions; i++) {
            this.weights[i] = Math.random() * 2 - 1;
        }
        this.bias = Math.random() * 2 - 1;

        this.learningRate = learningRate;
    }

    activation(input: number[]): number {
        if (input.length !== this.weights.length) {
            throw "incompatible input: " + input.length + " != " + this.weights.length;
        }

        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += input[i] * this.weights[i];
        }
        sum += this.bias;

        return sum;
    }

    learn(input: number[], expectedValue: number): void {
        const value = this.activation(input);
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += input[i] * (expectedValue - value) * this.learningRate;
        }

        this.bias += (expectedValue - value) * this.learningRate;
    }

    value(input: number[]): number {
        if (this.activation(input) >= 0) {
            return 1;
        } else {
            return -1
        }
    }

    testAccuracy(testGroup: number[][]): string {
        let positiveCount = 0;
        let overallCount = 0;
        for (let testPoint of testGroup) {
            if (this.value([testPoint[0], testPoint[1]]) == testPoint[2]) {
                positiveCount++;
            }
            overallCount++;
        }
        return (positiveCount / overallCount).toString() + "%";
    }

}