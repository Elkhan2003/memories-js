// ! Задание №1
console.log("***************Задание №1***************");
// ? 1-способ
function one() {
	let admin = "Джон";
	let name = "Джон";

	console.log(admin);
}
one();

// ! Задание №2
console.log("***************Задание №2***************");
function two() {
	// 1
	let srt = "Привет, мир!";

	console.log(srt);

	// 2
	let srt1 = "Привет,";
	let srt2 = "мир!";

	console.log(srt1, srt2);

	// 3
	let name = "Эльхан!";

	console.log("Привет," + " " + name);

	// 4
	let age = 18;

	console.log("Мне" + " " + age + " " + "лет!");
}
two();

// ! Задание №3
console.log("***************Задание №3***************");
function three() {
	// 1
	function number_1() {
		let num = 3;

		console.log(num);
	}
	number_1();

	// 2
	function number_2() {
		let a = 10;
		let b = 2;

		console.log(a + b, a - b, a * b, a / b);
	}
	number_2();

	// 3
	function number_3() {
		let c = 15;
		let d = 2;
		let result = c + d;

		console.log(result);
	}
	number_3();

	// 4
	function number_4() {
		let a = 10;
		let b = 2;
		let c = 5;

		console.log(a + b + c);
	}
	number_4();

	// 5
	function number_5() {
		let a = 17;
		let b = 10;
		let c = a - b;
		let d = 7;

		console.log(c + d);
	}
	number_5();
}
three();

// const windowWidth = window.innerWidth;
// console.log(`Ширина окна браузера ${windowWidth}px`);
