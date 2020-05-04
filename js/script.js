'use strict';

let startBtn = document.getElementById('start'), 	
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName("button")[0],
	optionalExpensesBtn = document.getElementsByTagName("button")[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector("#savings"),
	sumValue = document.querySelector(".choose-sum"),
	percentValue = document.querySelector(".choose-percent"),
	yearValue = document.querySelector(".year-value"),
	monthValue = document.querySelector(".month-value"),
	dayValue = document.querySelector(".day-value");

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?");
	time = prompt('Введите дату в формате YYYY-MM-DD');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?");
	}
}
//start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpences: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце"),
				b = prompt("Во сколько обойдется?");

			if (typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
				console.log('done!');
				appData.expenses[a] = b;
			} else {
				console.log('bad data!');
				i--;
			}
		}
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ежедневный бюджет: " + appData.moneyPerDay);
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка!");
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");
			appData.monthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц в вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function () {
		for (let i = 0; i < 3; i++) {
			let a = prompt("Статья необязательных расходов?");
			if (a != null && a != "") {
				appData.optionalExpenses[i] = a;
			}
		}
		console.log(appData.optionalExpenses);
	},
	chooseIncome: function () {

		let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)");
		if (typeof(items) === 'string' && items != '') {
			console.log('done!');
		} else {
			console.log('bad data!');
			do{
				items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)");
			}
			while (typeof(items) != 'string' || items === '');
		}
		appData.income = items.split(', ');
		appData.income.push(prompt("Может что-то ещё?"));
		appData.income.sort();
		appData.income.forEach(function(item,i){
			alert("Способ доп заработка "+(i+1)+": "+item);	
		});
	}
};

// appData.chooseIncome();
// console.log("Наша программа включает в себя данные:");
// for (let key in appData) {
// 	console.log(key+": "+appData[key]);
// }
