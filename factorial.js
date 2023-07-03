function fact(n) {
    if (n === 0) {
        console.log('********************************');
        return;
    }
    for (let i = 0; i < n; i++) {
        fact(n - 1);
    }
}
fact(3)