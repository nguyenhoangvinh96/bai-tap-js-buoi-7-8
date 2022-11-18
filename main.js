// Bài 1:
var numArray = [], arrayFloat = [];

function getEle(n) {
    return document.getElementById(n);
}
function number() {
    var n = Number(getEle("inputNum").value);
    numArray.push(n), (getEle("txtArray").innerHTML = numArray);
}
function sum() {
    for (var n = 0, a = 0; a < numArray.length; a++)
    numArray[a] > 0 && (n += numArray[a]);
    getEle("txtSum").innerHTML = "Tổng số dương: " + n;
}
// Bài 2:
function count() {
    for (var n = 0, a = 0; a < numArray.length; a++) numArray[a] > 0 && n++;
    getEle("txtCount").innerHTML = "Số dương: " + n;
  }
  // Bài 3:
  function Min() {
    for (var n = numArray[0], a = 1; a < numArray.length; a++)
      numArray[a] < n && (n = numArray[a]);
    getEle("txtMin").innerHTML = "Số nhỏ nhất: " + n;
  }
  // Bài 4:
  function minPos() {
    for (var n = [], a = 0; a < numArray.length; a++)
      numArray[a] > 0 && n.push(numArray[a]);
    if (n.length > 0) {
      for (var b = n[0], a = 1; a < n.length; a++) n[a] < b && (b = n[a]);
      getEle("txtMinPos").innerHTML = "Số dương nhỏ nhất: " + b;
    } else getEle("txtMinPos").innerHTML = "Không có số dương trong mảng";
  }
  function minPos() {
    for (var n = [], a = 0; a < numArray.length; a++)
      numArray[a] > 0 && n.push(numArray[a]);
    if (n.length > 0) {
      for (var b = n[0], a = 1; a < n.length; a++) n[a] < b && (b = n[a]);
      getEle("txtMinPos").innerHTML = "Số dương nhỏ nhất: " + b;
    } else getEle("txtMinPos").innerHTML = "Không có số dương trong mảng";
  }
  // Bài 5:
  function even() {
    for (var n = 0, a = 0; a < numArray.length; a++)
      numArray[a] % 2 == 0 && (n = numArray[a]);
    getEle("txtEven").innerHTML = "Số chẵn cuối cùng: " + n;
  }
  // Bài 6:
  function swap(n, a) {
    var b = numArray[n];
    (numArray[n] = numArray[a]), (numArray[a] = b);
  }
  function changePosition() {
    swap(getEle("inputIndex1").value, getEle("inputIndex2").value),
      (getEle("txtChangePos").innerHTML = "Mảng sau khi đổi: " + numArray);
  }
  // Bài 7:
  function sortIncrease() {
    for (var n = 0; n < numArray.length; n++)
      for (var a = 0; a < numArray.length - 1; a++)
        numArray[a] > numArray[a + 1] && swap(a, a + 1);
    getEle("txtIncrease").innerHTML = "Mảng sau khi sắp xếp: " + numArray;
  }
  // Bài 8:
  function checkPrime(n) {
    if (n < 2) return !1;
    for (var a = 2; a <= Math.sqrt(n); a++) if (n % a == 0) return !1;
    return !0;
  }
  function findPrime() {
    for (var n = -1, a = 0; a < numArray.length; a++) {
      if (checkPrime(numArray[a])) {
        n = numArray[a];
        break;
      }
    }
    getEle("txtPrime").innerHTML = n;
  }
  
  function getFloat() {
    var n = Number(getEle("inputFloat").value);
    arrayFloat.push(n), (getEle("txtArrayFloat").innerHTML = arrayFloat);
  }
  // Bài 9:
  function findInt() {
    for (var n = 0, a = 0; a < arrayFloat.length; a++)
      Number.isInteger(arrayFloat[a]) && n++;
    getEle("txtInt").innerHTML = "Số nguyên: " + n;
  }
