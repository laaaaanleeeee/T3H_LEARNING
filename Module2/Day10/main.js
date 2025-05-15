const data = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: getRandomName(),
  age: getRandomInt(18, 32),
  math: getRandomFloat(0, 10),
  literature: getRandomFloat(0, 10),
  english: getRandomFloat(0, 10)
}));

function getRandomName() {
  const names = ["An", "Bình", "Chi", "Dũng", "Hà", "Huy", "Lan", "Minh", "Ngọc", "Phúc", "Quang", "Trang", "Tú", "Vân", "Yến"];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
  return +(Math.random() * (max - min) + min).toFixed(2);
}

// console.log(data);

// Task1
const math_score = [];
for (let i = 0; i < data.length; i++) {
  math_score.push(data[i].math);
}

for (let i = 0; i < math_score.length - 1; i++) {
  for (let j = 0; j < math_score.length - i - 1; j++) {
    if (math_score[j] > math_score[j + 1]) {
      let temp = math_score[j];
      math_score[j] = math_score[j + 1];
      math_score[j + 1] = temp;
    }
  }
}

console.log(math_score);



// Task2
let maxAverage = 0;
let studentsWithAverage = [];
let studentWithMaxAverage = [];

for (let i = 0; i < data.length; i++) {
  const item = data[i];
  const average = (item.math + item.literature + item.english) / 3;
  studentsWithAverage.push({ name_sv: item.name, average: average });

  if (average > maxAverage) {
    maxAverage = average;
    studentWithMaxAverage = [{ name_sv: item.name, average: average }];
  }
}

console.log(studentsWithAverage);
console.log(`Người có điểm trung bình cao nhất là: ${studentWithMaxAverage[0].name_sv} với điểm trung bình là: ${maxAverage}`);



// Task3
for (let i = 0; i < studentsWithAverage.length - 1; i++) {
  for (let j = 0; j < studentsWithAverage.length - i - 1; j++) {
    if (studentsWithAverage[j].average < studentsWithAverage[j + 1].average) {
      let temp = studentsWithAverage[j];
      studentsWithAverage[j] = studentsWithAverage[j + 1];
      studentsWithAverage[j + 1] = temp;
    }
  }
}

console.log(studentsWithAverage);


// Task4

let level = "";  
function compute_level(average) {     
  if(average >= 8.0) {
    level = 'giỏi';
  }
  else if (average < 8 && average >= 6.5) {
    level = 'khá';
  }
  else {
    level = 'trung bình';
  }
  return level;
}

for (let i = 0; i < data.length; i++) {
  const average = (data[i].math + data[i].literature + data[i].english) / 3;
  data[i].level = compute_level(average);
}

console.log(data);