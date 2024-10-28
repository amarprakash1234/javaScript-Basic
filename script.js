// function min(...args) {
//     let min = args.reduce((a ,e) => {
//         if(a > e) return e;
//         else return a;
//     });
//     return min;
// }


// let arr = [-2, 4, 2, -5, 8, 6, -9];

// let [x, y, ...others] = arr;

// let obj = {
//     name: "Amar Prkash",
//     age: 21,
//     city: "Bhopal",
// }

// let {name: naam, age, isMarried = false} = obj;


// let obj2 = {
//     func: function() {
//         console.log(this);  
//     },
//     func2: () => {
//         console.log(this);
//     }
// }

// let brr = [2, 4, 6];

// let isAllEven = brr.every(ele => ele%2==0);

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let div = document.querySelector("#box");

// btn.addEventListener("click", () => {

//     let r1 = Math.floor(Math.random()*256);
//     let r2 = Math.floor(Math.random()*256);
//     let r3 = Math.floor(Math.random()*256);

//     h1.innerText = `rgb(${r1}, ${r2}, ${r3})`;
//     div.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;

// });

// let inp = document.querySelector("input");
// let div = document.querySelector("div");

// div.addEventListener("keydown", function(event) {
//     console.log("KeyBoard event triggered!");
// });

// inp.addEventListener("keydown", function(event) {
//     console.log("KeyBoard event triggered!");
// });

// By Code Help

//code 1 -> slow
// const t1 = performance.now();

// for(let i = 1; i <= 100; i++) {
//     let para = document.createElement("p");
//     para.textContent = "This is para " + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("Total time taken by code 1 : " + (t2-t1));

// //code 2 -> fast
// const t3 = performance.now();

// let myDiv = document.createElement("div");

// for(let i = 1; i <= 100; i++) {
//     let para = document.createElement("p");
//     para.textContent = "This is para " + i;
//     myDiv.appendChild(para);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();

// console.log("Total time taken by code 2 : " + (t4-t3));


// best code

// let fragment = document.createDocumentFragment();

// for(let i = 1; i <= 100; i++) {
//     let para = document.createElement("p");
//     para.textContent = "This is para " + i;
//     // node reflow and repaint for below line. so thats why using documentFragement is considered a good practice.
//     fragment.appendChild(para);
// }

// the below line take 1 reflow and 1 repaint.
// document.body.appendChild(fragment);


// setTimeout(function sayHello() {
//     console.log("Hello Amar Prakash!");

// }, 3000);

// promise!

// let promise = new Promise((resolve, reject) => {
//     console.log("Amar Prakash!");
//     reject(101);
// });

// promise.then((msz) => {
//     console.log("Rishikest kumar!", msz);
//     return 102;
// }).then((msz) => {
//     console.log("Ved Prakash!", msz)
//     return 103;
// }).then((msz) => {
//     console.log("Suraj Kumar!", msz);
// }).catch((err) => {
//     console.log(err);
// }).finally((msz) => {
//     console.log("I am final, Hamesa chalunga!");
// })

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "First");
// })

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "Second");
// })

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "Third");
// })

// Promise.all([promise1, promise2, promise3])
// .then((values) => {
//     console.log(values);
// }).catch((err) => {
//     console.log(err);
// })

// let btn = document.querySelector("button");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         btn.style.backgroundColor = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("blue", 1000);
//     });
// });

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             btn.style.backgroundColor = color;
//             resolve("Color Changed!");
//         }, delay);
//     });
// }

// changeColor("red", 1000)
//     .then((res) => {
//         console.log(res);
//         console.log("Color changed to Red");
//         return changeColor("green", 1000);
//     })
//     .then((res) => {
//         console.log(res);
//         console.log("Color changed to Green!");
//         return changeColor("blue", 1000);
//     })
//     .then((res) => {
//         console.log(res);
//         console.log("color changed to Blue");
//     })
    

















