function min(...args) {
    let min = args.reduce((a ,e) => {
        if(a > e) return e;
        else return a;
    });
    return min;
}


let arr = [-2, 4, 2, -5, 8, 6, -9];

let [x, y, ...others] = arr;

let obj = {
    name: "Amar Prkash",
    age: 21,
    city: "Bhopal",
}

let {name: naam, age, isMarried = false} = obj;


let obj2 = {
    func: function() {
        console.log(this);  
    },
    func2: () => {
        console.log(this);
    }
}

let brr = [2, 4, 6];

let isAllEven = brr.every(ele => ele%2==0);




