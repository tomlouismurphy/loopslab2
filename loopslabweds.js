//question 1

for (i = 50; i >= 20; i--) {
	if (i % 3 === 0) {
		console.log(i);
	}
}

//question 2

for (i = 0; i > 0; i++) {
	if (i === 1000) {
		console.log('uh oh.');
	}
}

//question 3

const classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];

for (i = 0; i < classmates.length; i++) {
	if (i === 0 || i % 2 === 0) {
		console.log(classmates[i]);
	}
}

//question 4

const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];
const menu2 = []

for (i = 0; i < menu.length; i++) {
	if (menu[i].glutenFree === true) {
		menu2.push(menu[i]);
		console.log(menu[i].glutenFree);
	}
}

//bonus question

const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}];
const assoc = [];
const goats = [];

for (let see in league) {
	if (see < 2) {
		assoc.push(league[0].players[see]);
		assoc.push(league[1].players[see]);
		assoc.push(league[2].players[see]);
	}
}

for (let value in assoc) {
	if (assoc[value].goat === true) {
		goats.push(assoc[value]);
	}
}