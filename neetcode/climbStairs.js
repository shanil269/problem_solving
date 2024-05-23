var climbStairs = function (n) {
    let [a, b] = [1, 1];
    for (let i = 0; i < n - 1; i++) {
        [a, b] = [a + b, a];
    }
    return a;
};

console.log(climbStairs(5));