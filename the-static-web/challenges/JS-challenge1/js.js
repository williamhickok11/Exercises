//***  LOWEST NUMBER DIVIDED  ***//

for (var i = 1; i < 30000; i++) {
  if (i%2 === 0 && i%3 === 0 && i%4 === 0 && i%5 === 0 && i%6 === 0 && i%7 === 0 && i%8 === 0 && i%9 === 0 && i%10 === 0) {
    console.log(i);
    break;
  };
};




//***  FIBONACCI NUMBER  ***//

var fibArray = [1, 1];

for (var i = 1; i < 500; i++) {
  console.log(fibArray[i]);

  var equ = fibArray[i] + fibArray[i-1]

  if (equ < 500) {
    fibArray.push( equ );
  } else {
    break;
  };
};


//***  NATURAL NUMBERS  ***//

var natNum = Math.pow(1, 2) + Math.pow(2, 2) + Math.pow(3, 2) + Math.pow(4, 2) + Math.pow(5, 2) + Math.pow(6, 2) + Math.pow(7, 2) + Math.pow(8, 2) + Math.pow(9, 2) + Math.pow(10, 2);

var natNum2 = Math.pow((1+2+3+4+5+6+7+8+9+10), 2);

var answer = natNum - natNum2;

console.log("natNum", natNum);
console.log("natNum2", natNum2);
console.log("answer", answer);