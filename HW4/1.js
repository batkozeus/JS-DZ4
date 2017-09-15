// Task 1

// var pp = document.getElementsByTagName('p');

// for (var i = 0; i<pp.length; i++) {
// 	pp[i].onclick = f1;
// }

// function f1() {
// 	this.style.background = 'red';
// }


// Task 2

var img = document.getElementsByTagName('img');

for (var i = 0; i<img.length; i++) {
	img[i].onclick = f2;
}

function f2() {
	this.style.boxShadow = "10px 20px 30px blue";
}


// Task 3

document.getElementById('b0').onclick = but0;

function but0 () {
var pp = document.getElementsByTagName('p');

for (var i = 0; i<pp.length; i++) {
	pp[i].innerHTML = i+1 + ') ' + pp[i].innerHTML;
	}
}


// var pp = document.getElementsByTagName('p');
// for (var i = 0; i<pp.length; i++) {
// 	pp[i].onclick = f3;
// }

// function f3 () {
// 	for (var i = 0; i<pp.length; i++) {
// 		if (this == pp[i]) {
// 			break;
// 		}
// 	}
// 	this.innerHTML = (i + 1) + ') ' + this.innerHTML;
// }

// Task 4

var butNum = document.getElementById('colNazh') ;
var count = 0;

document.getElementById('b1').onclick = but1;
function but1 () {
	count++;
	butNum.innerHTML = 'Ты нажал меня ' + count + ' раз'; 
}

document.getElementById('b2').onclick = but2;
function but2 () {
	count++;
	butNum.innerHTML = 'Ты нажал меня ' + count + ' раз'; 
}


// Task 5

document.getElementById('b5').onclick = numStep;
function numStep() {
	var num5 = document.getElementById('num5').value;
	var step5 = document.getElementById('step5').value;
	var Result5 = Math.pow(num5, step5);;
	alert (Result5);
}

// Task 6

document.getElementById('b6').onclick = textDecor;
function textDecor() {
	var teg = document.getElementById('i6').value;
	var newTeg = document.getElementsByTagName(teg);
	for (var i of newTeg) {
		i.style.textDecoration = 'underline';
	}
}


// Task 7

document.getElementById('b7').onclick = userAge;
function userAge() {
	var num5 = document.getElementById('i7').value;
		if (num5 < 16 && num5 >= 0) {
			alert ('Вы еще молоды');
		}
		else if (num5 < 120 && num5 >= 16){
			alert ('Добро пожаловать');
		}
		else {
			alert ('Да ты киборг');
		}
}

// Task 8

document.getElementById('b8').onclick = userAge2;
function userAge2() {
	var num6 = document.getElementById('i8').value;
		if (num6 == '' || typeof num6 == 'undefined' || num6 == null) {
			alert ('Введите возраст');
		}
		else {
			if (num6 < 16 && num6 >= 0) {
				alert ('Вы еще молоды');
			}
			else if (num6 < 120 && num6 >= 16){
				alert ('Добро пожаловать');
			}
			else {
				alert ('Введите возраст');
			}
		}
}


// Task 9

var n1 = [99, 33, 55];

function masOut () {
	var p = document.getElementById('new');
	var str = '';
	for (var i = 0; i<n1.length; i++) {
		str += i + ' --- ' + n1[i] + '<br>';
	}
	p.innerHTML = str;
}
masOut ();

document.getElementById('p2').onclick = masOut2;
function masOut2 () {
	var i1 = document.getElementById('i1').value;
	var i2 = document.getElementById('i2').value;
	n1.splice(i1, 0, i2);
	masOut ();
}

document.getElementById('p3').onclick = masOut3;
function masOut3 () {
	var p2 = document.getElementById('new2');
	var colElement = dlinaMassiva (n1);
	if (colElement == '') {
		p2.innerHTML = 'Ошибка!';
	}
	else {
		p2.innerHTML = colElement;		
	}
}

function dlinaMassiva (d) {
	return d.length;
}


// Task 10

document.getElementById('b10').onclick = myFunct;
function myFunct () {
	var p10 = document.getElementById('new10');
	chisloFunct (p10);
}

function chisloFunct (ch) {
	var num10 = document.getElementById('i10').value;
	if (num10 < 7) {
		return ch.innerHTML = 'Число меньше 7';
	}
	else if (num10 == 7){
		return ch.innerHTML = 'Возвращает 7';
	}
	else if (num10 == 8){
		return ch.innerHTML = 'Возвращает 8';
	}
	else {
		return ch.innerHTML = 'Квадрат числа - ' + num10*num10;
	}
}


// Task 11

var prNum;
	// 1-10
	prNum = Math.floor((Math.random() * 10) +1);
	console.log (prNum);

var	popitka = 1;
document.getElementById('b11').onclick = ugadaiChislo;
function ugadaiChislo() {
	var num, out, out2;

	num = document.getElementById('i11').value;
	out = document.getElementById('new11');
	out2 = document.getElementById('new12');
	

	if (num == prNum) {
		out.innerHTML = 'Вы угадали';
		alert('Победа!');
		popitka = 1;
	}
	else {
		if (num > prNum){
			out.innerHTML = 'Вы ввели число больше, чем нужно';
		}
		else {
			out.innerHTML = 'Вы ввели число меньше, чем нужно';
		}
	}
	
	out2.innerHTML = 'Число попыток - ' + popitka;
	popitka++;
	
	if (popitka == 4) {
		alert('Конец игры');
		popitka = 1;
	}
	
}