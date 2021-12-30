class Factorial {
    constructor(...numbers) {
        this.array = [];
        numbers.forEach(number => {
            this.array.push(number);
        })
    }

    fatorial() {
        let array = [];
        this.array.forEach(number => {
            let fatorial = 1;
            for (let i = 1; i <= number; i++) {
                fatorial *= i;
            }
            array.push(fatorial);
        })
        return array;
    }
}

module.exports = Factorial;