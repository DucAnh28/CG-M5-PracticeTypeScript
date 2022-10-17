function fibonacci(num) {
    if (num <= 1)
        return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
    let sum = 0;
    sum += fibonacci(i);
}
//# sourceMappingURL=fibonacci.js.map