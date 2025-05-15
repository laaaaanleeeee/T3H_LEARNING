//Quizzes
// Task1

// const a = ['a', 'b', 'c'];
// const b = ['a', 'b', 'c'];

// console.log(typeof(a,b));
// console.log(a + b);
// let mes = a == b ? "2 mang bang nhau" : "2 mang khong bang nhau";
// console.log(mes);

// Task2

// const arr = [9,2,5,1];

// console.log(arr[0], arr[3]);
// console.log(arr[1] + arr[2]);
// let b = [];
// b = arr[1];
// arr[1] = arr[3];
// arr[3] = b;
// console.log(arr);

// Task3

// const arr = [4,3,6,2,7,9,1,8];
// let sum = 0;
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
// if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
// }

// sum += arr[i];

//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// console.log(sum);
// console.log(min);

// Task4

// const a = [];

// let n = parseInt(prompt("Nhập vào số n: "));
// if (n > 0) {
//     a.push(n);
// }

// console.log(a);

// Task5

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

// Task6

// const c = ["J", "Q", "K"];

// for (let i = 0; i < c.length; i++) {
//   if (c.length > 1) {
//     c.pop();
//   } else {
//     break;
//   }
// }
// console.log(c);

// Task7

// const s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3];
// const n = parseInt(prompt("Nhập vào số n: "));

// let new_s = s.map((item) => item ** 2);
// console.log(new_s);

// for (let i = 0; i < s.length; i++) {
//     if (s[i] >= n) {
//         console.log(s[i]);
//     }
// }

// for (let i = 0; i < s.length; i++) {
//     if (s[i] == n) {
//         console.log(s[i]);
//         break;
//     }
// }

// PRACTICE

// Task1

// const a = [3, 4, 6, 2, 7, 8, 9, 3, 4, 6, 1];

// let rs1 = 1;
// for (let i = 0; i < a.length; i++) {
//   rs1 *= a[i];
// }
// console.log(rs1);

// let min = a[0];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 == 0) {
//     if (a[i] < a[0]) {
//       min = a[i];
//     }
//   }
// }
// console.log(min);

// let max = a[0];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 3 == 0) {
//     if (a[i] > max) {
//       max = a[i];
//     }
//   }
// }
// console.log(max);

// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   sum += a[i];
// }
// let mean = sum / a.length;
// console.log(mean);



// let prime = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] <= 1) continue;

//   let isPrime = true;
//   for (let j = 2; j <= Math.sqrt(a[i]); j++) {
//     if (a[i] % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     prime.push(a[i]);
//   }
// }
// console.log(prime);


// for (let i = 0; i < a.length; i++) {
//   if (a[i] < 10) {
//     console.log("Trong mảng có số < 10");
//     break;
//   }
//   else {
//     console.log("Trong mảng không có số < 10");
//     break;
//   }
// }


// for (let i = 0; i < a.length; i++) {
//   if (a[i] > 20) {
//     console.log("Trong mảng có số > 20");
//     break
//   }
//   else {
//     console.log("Trong mảng không có số > 20");
//     break
//   }
// }


// let n = parseInt(prompt("Nhập vào số n: "));
// for (let i = 0; i < a.length; i++) {
//   if (a[i] == n) {
//     console.log("n là phần tử trong mảng");
//     break;
//   }
//   else {
//     console.log("n không là phần tử trong mảng");
//   }
// }


// // Optimized javaScript implementation
// // of Bubble sort
// function bubbleSort(a, n){
//     var i, j, temp;
//     var swapped;
//     for (i = 0; i < n - 1; i++){
//         swapped = false;
//         for (j = 0; j < n - i - 1; j++){
//             if (a[j] > a[j + 1]) {
//                 // Swap a[j] and a[j+1]
//                 temp = a[j];
//                 a[j] = a[j + 1];
//                 a[j + 1] = temp;
//                 swapped = true;
//             }
//         }

//         // IF no two elements were 
//         // swapped by inner loop, then break
//         if (swapped == false)
//         break;
//     }
// }

// // Function to print an array 
// function printArray(a, size){
//   var i;
//   for (i = 0; i < size; i++)
//       console.log(a[i] + " ");
// }

// // Driver program
// var n = a.length;
// bubbleSort(a, n);
// console.log("Sorted array: ");
// printArray(a, n);



// Task2

// const s = ["Tralalero Tralala", "Bombardiro Crocodilo", "Tung Tung Tung Sahur", "Ballerina Cappuccina", "Trippi Troppi", "Brr Brr Patapim"];

// let min = s[0];
// for (let i = 0; i < s.length; i++) {
//   if (s[i].length < min.length) {
//     min = s[i];
//     break;
//   }
// }
// console.log(min);


// let text = prompt("Nhập vào một chuỗi: ");

// for (let i = 0; i < s.length; i++) {
//     if(s[i] == text) {
//         console.log("Có trong mảng");
//         break;
//     }
//     else {
//         console.log("Không có trong mảng");
//         break;
//     }
// }


// let newS = [];
// for (let i = 0; i < s.length; i++) {
//     newS.push(s[i].slice(0, 3));
// }
// console.log(newS);


// let merge_string = "";
// for (let i = 0; i < s.length; i++ ) {
//     merge_string += s[i] + "-";
// }
// console.log(merge_string);


// Task3

// let d1 = prompt("Nhập vào dãy số d1 (cách nhau bởi dấu phẩy): ");
// let d2 = prompt("Nhập vào dãy số d2 (cách nhau bởi dấu phẩy): ");

// let array1 = d1.split(',').map(Number);
// let array2 = d2.split(',').map(Number);

// console.log(array1);
// console.log(array2);


// for (let i = 0; i < array1.length; i++) {
//     if (!array2.includes(array1[i])) {
//         console.log("Có giá trị của d1 không nằm trong d2");
//         break;
//     }
//     else {
//         console.log("Có giá trị của d1 nằm trong d2");
//     }
// }


// let sum_d1 = 0;
// for (let i = 0; i < array1.length; i++) {
//     sum_d1 += array1[i];
// }
// for (let j = 0; j < array2.length; j++) {
//     if(array2[j] % sum_d1 == 0) {
//         console.log("Có phần tử chia hết cho tổng của d1");
//         break;
//     }
//     else {
//         console.log("Không có phần tử chia hết cho tổng của d1");
//     }
// }


// let new_arr = [];
// for (let i = 0; i < array1.length; i++) {
//     if(array1[i] % 2 == 0) {
//         new_arr.push(array1[i]);
//     }
// }
// for (let j = 0; j < array2.length; j++) {
//     if(array2[j] % 2 == 0) {
//         new_arr.push(array2[j]);
//     }
// }
// console.log(new_arr);


// let new_arr = [];
// for (let i = 0; i < array1.length; i++) {
//     new_arr.push(array1[i]);
// }
// for (let j = 0; j < array2.length; j++) {
//     new_arr.push(array2[j]);
// }
// new_arr.sort((a, b) => a - b);
// console.log(new_arr);


// Task4

let growth = [[5,8,9,16], [2,7,1,9], [5,6,8,12], [10,2,1,8], [20,4,9,1]];

// let sum = 0;
// let mean = 0;
// let new_a = [];

// for(let i = 0; i < growth.length; i++) {
//     for (let j = 0; j < growth[i].length; j++) {
//         sum += growth[i][j];
//     }
//     mean = sum / 5;
//     console.log(mean);
//     new_a.push(mean);
// }
// console.log(new_a);

// let maxA = new_a[0];
// for(let a = 0; a < new_a.length; a++) {
//     if(new_a[a] > maxA) {
//         maxA = new_a[a];
//     }
// }
// console.log(maxA);

// let maxC = growth[0][0];
// for(let i = 0; i < growth.length; i++) { 
//     for (let j = 0; j < growth[i].length; j++) {
//         if(growth[i][j] > maxC) {
//             maxC = growth[i][j]; 
//         }
//     }
// }

// console.log(maxC);


// let sum = 0;
// let mean = 0;
// let new_c = [];

// for(let i = 0; i < growth[0].length; i++) {
//     for (let j = 0; j < growth.length; j++) {
//         sum += growth[j][i];
//     }
//     mean = sum / 5;
//     console.log(mean);
//     new_c.push(mean);
// }
// console.log(new_c);


// Task5

// const a = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//     if(a[i] % 2 != 0) {
//         sum += a[i];
//     }
// }
// console.log(sum);