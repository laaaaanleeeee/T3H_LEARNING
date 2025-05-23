let getele = document.getElementById("clock");
let choose = prompt("Nhập vào thời gian muốn đếm ngược: ");
let getStop = document.getElementById("stop");
let getConti = document.getElementById("continue");
let getReset = document.getElementById("reset");
getConti.onclick = ContinueCounting;
getStop.onclick = StopCounting;
getReset.onclick = ResetCounting;

let count = setInterval(function () {
  choose -= 1;
  getele.innerText = choose;
  if (choose == 0) {
    clearInterval(count);
  }
}, 1000);

function StopCounting() {
  clearInterval(count);
}

function ContinueCounting() {
    count = setInterval(function () {
        choose -= 1;
        getele.innerText = choose;
        if (choose == 0) {
        clearInterval(count);
        }
    }, 1000);
}

function ResetCounting() {
    clearInterval(count);
    choose = prompt("Nhập vào thời gian muốn đếm ngược: ");
    getele.innerText = choose;
    count = setInterval(function () {
        choose -= 1;
        getele.innerText = choose;
        if (choose == 0) {
        clearInterval(count);
        }
    }, 1000);
}
