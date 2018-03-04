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

    value(input: number[]): number {
        if (input.length !== this.weights.length) {
            throw "incompatible input";
        }

        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += input[i] * this.weights[i];
        }
        sum += this.bias;

        return sum;
    }

    learn(input: number[], expectedValue: number): void {
        const value = this.value(input);
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += input[i] * (expectedValue - value) * this.learningRate;
        }

        this.bias += (expectedValue - value) * this.learningRate;
    }

}