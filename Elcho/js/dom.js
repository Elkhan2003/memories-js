// ! Задание №1
let admin = "Джон";
let name = "Джон";

// ! Задание №2
// 1
let srt = "Привет, мир!";

// 2
let srt1 = "Привет, ";
let srt2 = "мир!";
let srt3 = srt1 + srt2;

// 3
let name1 = "Привет, ";
let name2 = "Эльхан!";
let name3 = name1 + name2;

// 4
let name_4 = "Мне ";
let age = 18;
let years = " лет!";
let result = name_4 + age + years;

// ! Задание №3
// 1
let num_1 = 3;

// 2
let a_2 = 10;
let b_2 = 2;
let result_2_1 = a_2 + b_2;
let result_2_2 = a_2 - b_2;
let result_2_3 = a_2 * b_2;
let result_2_4 = a_2 / b_2;

// 3
let c_3 = 15;
let d_3 = 2;
let result_3 = c_3 + d_3;

// 4
let a_4 = 10;
let b_4 = 2;
let c_4 = 5;
let result_4 = a_4 + b_4 + c_4;

// 5
let a_5 = 17;
let b_5 = 10;
let c_5 = a_5 - b_5;
let d_5 = 7;
let result_5 = c_5 + d_5;

const windowWidth = window.innerWidth;
console.log(`Ширина окна браузера ${windowWidth}px`);

const content = document.querySelector("#elcho");
const text = content.innerHTML;
console.log(content);

content.innerHTML = `						
<div class="boxes">
<div class="box">
	<div class="box__title">
		<h1>Задание №1</h1>
	</div>
	<hr />
	<p class="box__text"><span>1) </span>${admin}</p>
	<hr />
</div>
<div class="box">
	<div class="box__title">
		<h1>Задание №2</h1>
	</div>
	<hr />
	<p class="box__text"><span>1) </span>${srt}</p>
	<hr />
	<p class="box__text"><span>2) </span>${srt3}</p>
	<hr />
	<p class="box__text"><span>3) </span>${name3}</p>
	<hr />
	<p class="box__text"><span>4) </span>${result}</p>
	<hr />
</div>
<div class="box">
	<div class="box__title">
		<h1>Задание №3</h1>
	</div>
	<hr />
	<p class="box__text"><span>1) </span>${num_1}</p>
	<hr />
	<p class="box__text"><span>2) </span>${result_2_1}, ${result_2_2}, ${result_2_3}, ${result_2_4}</p>
	<hr />
	<p class="box__text"><span>3) </span>${result_3}</p>
	<hr />
	<p class="box__text"><span>4) </span>${result_4}</p>
	<hr />
	<p class="box__text"><span>5) </span>${result_5}</p>
	<hr />
</div>
</div>
`;
