// const a = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i <= a.length; i++) {
//     a[10] = 11;
// }



// for (let i = a.length; i > 0; i--) {
//     a[i] = a[i - 1];
// }
// a[0] = 0;


// for (let i = 0; i < a.length - 1; i++) {
//     a[i] = a[i+1];
// }


// console.log(a);



//Bai1

// const arr = [1,2,3,4];

// console.log(arr[0]);
// console.log(arr[3]);

// console.log(arr[1] + arr[2]);

// let b = []
// b = arr[1];
// arr[1] = arr[3];
// arr[3] = b;

// console.log(arr)


//Bai2

// const a = [6,4,3,5,1,2];

// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//         console.log(a[i]);
//     }
// }

// let sum = 0
// for (let i = 0; i < a.length; i++) {
//     sum += a[i];
// }
// console.log(sum);



// let mn = a[0];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] < mn) {
//         mn = a[i];
//     }
// }  
// console.log(mn);


//Bai3

// const b = [];
// let n = parseInt(prompt("Nhập vào số n: "));
// if (n > 0) {
//     b.push(n);
//     console.log(b);
// }
// else {
//     console.log("Nhập lại số n > 0");
// }


//Bai4

// const c = ['J', 'Q'];
// let n = parseInt(prompt("Nhập vào số n: "));
// if (n > 2) {
//     for (let i = 0; i < c.length; i++) {
//         if (c.length < n) {
//             c.unshift('0');
//         }
//         else {
//             break;
//         }
//     }
//     console.log(c);
// }
// else {
//     console.log("Nhập lại n > 2");
// }