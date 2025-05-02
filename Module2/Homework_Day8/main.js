// Quizz 0

// let s = prompt("Nhập vào 1 chuỗi s: ");
// if (s.length >= 8) {
//     console.log("Chuỗi này ok");
// }
// else {
//     console.log("Ngắn quá, dài thêm tí nữa");
// }




// let a = prompt("Nhập vào 1 số a: ");
// let mes = a >= 18 ? "Đủ 18 thì quẩy tiếp" : "Còn quá nà trẻ";
// console.log(mes)



// let sum = 0;
// for(let i = -10; i <= 50; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
// }

// console.log(sum);





// for (let i = -100; i <= 100; i++) {
//     if (i % 9 == 0) {
//         console.log(i);
//     }
// }



// let i = 1;
// while (i <= 200) {
//     console.log(i)
//     i++;
// }



// let s = prompt("Nhập vào 1 chuỗi s: ");
// let l = prompt("Nhập vào 1 số l: ");

// while (s.length < l) {
//     s += 'a';
//     console.log(s);
// }


// let x = parseInt(prompt("Nhập vào số x: "));
// let y = parseInt(prompt("Nhập vào số y: "));

// for (x; x <= y; x++, y--) {
//     console.log(x,y)

//     if (x >= y) {
//         break;
//     }
// }





// Exercise

// Task1
// for (let i =  1; i <= 500; i++) {
//     console.log(i);
// }



// Task2
// for (let i = 1; i <= 300; i++) {
//     if(i % 2 == 0 && i % 3 == 0) {
//         console.log(i);
//     }
// }


// Task3
// let sum = 0;
// for (let i = -30; i <= 50; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);


// Task4
// let n = parseInt(prompt("Nhập vào số n: "));
// let factorial = 1;
// for(let i = 1; i <= n; i++) {
//     factorial *= i;
// }
// console.log("Giai thừa của số n: " + factorial);



// Task5
// let a = parseInt(prompt("Nhập vào số a: "));
// let b = parseInt(prompt("Nhập vào số b: "));
// let x = parseInt(prompt("Nhập vào số x: "));


// for (let i = a; i <= b; i++) {
//        if (i % x == 0) {
//         alert(i);
//         break;
//     }
// }


// Task6
// let n = parseInt(prompt("Nhập vào số n: "));
// let sum = 0;
// let S = 0;

// for (let i = 1; i <= n; i++) {
//     S = 1 / (i * (i + 1));
//     sum += S;
// }

// console.log(sum);



// Task7
// let n = parseInt(prompt("Nhập vào số n: "));

// for(let i = 1; i <= n; i++ ) {
//     if(n % i == 0) {
//         console.log(i);
//     }
// }



// Task8 
// let n = parseInt(prompt("Nhập vào số n: "));

// for (let i = 2; i < n; i++) {
//     isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }



// Task9
// let s = prompt("Nhập vào chuỗi s: ");
// let l = parseInt(prompt("Nhập vào số l: "));

// while (s.length < l) {
//     s = '0' + s;
//     console.log(s);
// }


// Task10
// let m = parseInt(prompt("Nhập vào số m: "));
// let n = parseInt(prompt("Nhập vào số n: "));

// function lcm(a, b) {
//     return (a * b) / gcd(a, b);
// }

// function gcd(a, b) {
//     if (b === 0) {
//         return a;
//     } else {
//         return gcd(b, a % b);
//     }
// }

// gcd(m, n);
// lcm(m, n);
// console.log("Ước chung lớn nhất của " + m + " và " + n + " là: " + gcd(m, n));
// console.log("Bội chung nhỏ nhất của " + m + " và " + n + " là: " + lcm(m, n));


// Task11
// let ans = parseInt(prompt("Nhập vào số answer: "));
// let ran = Math.floor(Math.random() * 20) + 1;
// let count = 0;

// if (ans === ran) {
//     console.log("Đoán đúng");
// } else {
//     alert("Đoán sai");
//     count++;
//     for (let i = count; i < 5; i++) {
//         ans = parseInt(prompt("Nhập vào số answer: "));
//         if (ans === ran) {
//             console.log("Đoán đúng");
//             break;
//         } else {
//             alert("Đoán sai");
//             count++;
//         }
//     }
//     if (count === 5) {
//         console.log("Bạn đã hết lượt chơi");
//     }
// }



// Task12
// let n = parseInt(prompt("Nhập vào số n: "));
// let result = 0;

// if (n >= 2 && n <= 10) {
//     for (let i = 1; i <= 10; i++) {
//         result = n * i;
//         console.log(n + " x " + i + " = " + result);
//     }
// }   
// else {
//     alert("Nhập lại số n từ 2 đến 10");
//     n = parseInt(prompt("Nhập lại số n: "));
//     if (n >= 2 && n <= 10) {
//         for (let i = 1; i <= 10; i++) {
//             result = n * i;
//             console.log(n + " x " + i + " = " + result);
//         }
//     }
// }



// Task13
// let n = parseInt(prompt("Nhập vào số n: "));

// if (n >= 2) {
//     for (let i = 1; i <= n; i++) {
//         console.log("*".repeat(n));
//     }
// } else {
//     alert("Nhập lại số n từ 2 trở lên");
//     n = parseInt(prompt("Nhập lại số n: "));
//     if (n >= 2) {
//         for (let i = 1; i <= n; i++) {
//             console.log("*".repeat(n));
//         }
//     }
// }


// Task14
// let m = parseInt(prompt("Nhập vào số m: "));
// let n = parseInt(prompt("Nhập vào số n: "));
// let line = "";

// if (m >= 2 && n >= 2) {
//     line = "*".repeat(m);
//     for (let i = 0; i < n; i++) {
//         console.log(line);
//     }
// } else {
//     alert("Vui lòng nhập m và n đều >= 2.");
//     m = parseInt(prompt("Nhập lại số m: "));
//     n = parseInt(prompt("Nhập lại số n: "));
//     if (m >= 2 && n >= 2) {
//         line = "*".repeat(m);
//         for (let i = 0; i < n; i++) {
//             console.log(line);
//         }
//     }
// }


// Task15
// let n = parseInt(prompt("Nhập vào số n: "));

// if (n >= 3) {
//     for (let i = 1; i <= n; i++) {
//         console.log("*".repeat(i));
//     }
// } else {
//     alert("Vui lòng nhập số n >= 3.");
//     n = parseInt(prompt("Nhập lại số n: "));
//     if (n >= 3) {
//         for (let i = 1; i <= n; i++) {
//             console.log("*".repeat(i));
//         }
//     }
// }



// Task16
// let w = parseInt(prompt("Nhập vào cân nặng: "));
// let h = parseInt(prompt("Nhập vào chiều cao: "));
// let bmi = w / (h * h);

// if (bmi < 18.5) {
//     console.log("Thiếu cân");
// }
// else if (bmi >= 18.5 && bmi < 23) {
//     console.log("Bình thường");
// } else if (bmi >= 23 && bmi < 25) {
//     console.log("Thừa cân");
// } else {
//     console.log("Béo phì");
// }



// Task17
// let a = Math.floor(Math.random() * 6) + 5;

// do {
//     n = parseInt(prompt("Nhập số n (đoán số từ 5 đến 10):"));
// } while (n !== a);

// console.log("Đoán đúng số là: " + a);


