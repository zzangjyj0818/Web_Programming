var height = prompt("input the key");
console.log(height, typeof(height));
//prompt는 문자열로 받아오기 떄문에 string으로 간주됨
// 문자열을 number로 변환하는 방법
var height_int = parseInt(height);
console.log(height_int, typeof(height_int));

var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));


//parseFloat -> 문자열을 실수로
//parseInt -> 문자열을 정수로