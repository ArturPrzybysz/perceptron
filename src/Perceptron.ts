export class Perceptron {
    weights: number[];
    readonly bias: number;
    biasWeight: number;

    constructor(bias: number = 1) {
        this.weights = new Array(3);
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = Math.random();
        }
        this.bias = bias;
    }

    learn(input: number[], expectedOutput: number): void {
        const output = this.output(input);

        for (let i in this.weights) {
            this.weights[i] += (expectedOutput - output) * input[i];
        }

        this.biasWeight += (expectedOutput - output) * this.bias;
    }

    value(input: number[]): number {
        if (this.output(input)) {
            return 1;
        } else {
            return 0;
        }
    }

    private output(input: number[]): number {
        let value = 0;
        if (input.length !== this.weights.length) {
            throw "Incorrect input size!";
        }

        for (let i in input) {
            value += input[i] * this.weights[i];
        }

        return value;
    }
}