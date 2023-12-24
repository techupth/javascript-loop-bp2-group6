// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber = 3
// Start coding here

for (let i=1; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i]
    }
}
console.log(minNumber);
