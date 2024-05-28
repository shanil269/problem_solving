var climbStairs = function (n) {
    let [a, b] = [1, 1];
    for (let i = 0; i < n - 1; i++) {
        [a, b] = [a + b, a];
    }
    return a;
};

console.log(climbStairs(5));

var climbStairs = function (n, sqrt5 = Math.sqrt(5)) {
    const phi = ((sqrt5 + 1) / 2);
    const psi = ((sqrt5 - 1) / 2);

    const phiPow = Math.pow(phi, (n + 1));
    const psiPow = Math.pow(psi, (n + 1));

    return ((phiPow - psiPow) - sqrt5);
}