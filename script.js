const score = document.querySelector('.score');
const result = document.querySelector('.result');
const options = document.querySelectorAll('.option');
const rusName = {
	'Rock': ['Камень', 'Камень'],
	'Scissors': ['Ножницы', 'Ножницы'],
	'Paper': ['Бумага', 'Бумагу'],
}

let compScore = 0;
let userScore = 0;

options.forEach(i => {
	i.addEventListener('click', (e) => {
		let userChoice = e.target.dataset.option;
		game(userChoice);
	})
})

const game = (userChoice) => {
	let compChoice = Math.ceil(Math.random(0, 1) * 3);

	if (compChoice === 1) {
		compChoice = 'Rock';
	} else if (compChoice === 2) {
		compChoice = 'Scissors';
	} else {
		compChoice = 'Paper';
	}

	switch (compChoice[0] + userChoice[0]) {
		case 'RP':
			userWin(userChoice, compChoice);
			break;
		case 'RS':
			compWin(compChoice, userChoice);
			break;
		case 'PR':
			compWin(compChoice, userChoice);
			break;
		case 'PS':
			userWin(userChoice, compChoice);
			break;
		case 'SP':
			compWin(compChoice, userChoice);
			break;
		case 'SR':
			userWin(userChoice, compChoice);
			break;
		default:
			draw(userChoice);
			break;
	}
}

const compWin = (compChoice, userChoice) => {
	score.innerHTML = `${userScore}:${++compScore}`;
	// result.innerHTML = `${compChoice} кроет ${userChoice}. Comp победил!`
	result.innerHTML = `${rusName[compChoice][0]} кроет ${rusName[userChoice][1]}. Комп победил!`
	optionAnimation(userChoice, 'lose')
}

const userWin = (userChoice, compChoice) => {
	score.innerHTML = `${++userScore}:${compScore}`;
	// result.innerHTML = `${userChoice} кроет ${compChoice}. Юзер победил!`
	result.innerHTML = `${rusName[userChoice][0]} кроет ${rusName[compChoice][1]}. Юзер победил!`
	optionAnimation(userChoice, 'win')
}

const draw = (userChoice) => {
	result.innerHTML = `Ничья!!! Вперёд!!`
	optionAnimation(userChoice, 'draw')
}

const optionAnimation = (choice, selector) => {
	const link = document.querySelector(`.${choice}`);
	link.classList.add(selector);
	setTimeout(() => {
		link.classList.remove(selector)
	}, 777);
}
