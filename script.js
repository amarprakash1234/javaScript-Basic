function min(...args) {
    let min = args.reduce((a ,e) => {
        if(a > e) return e;
        else return a;
    });
    return min;
}

console.log(min(1, 2, 3, 4, 5, 6, 7));