'use strict';
// import {generate} from '../utilites/helpers';
// import Finance from './finance';
import Credit from './credit';

const cards = [
	{
		title:"Студент",
		income:3000,
		expense:2500,
		money:5000,
		credit:0,
		children:9.3
	},
	{
		title:"Полиейский",
		income:60000,
		expense:40000,
		money:15000,
		credit:0,
		children:9.3
	},
	{
		title:"Менеджер",
		income:40000,
		expense:20000,
		money:10000,
		credit:0,
		children:9.3
	},
	{
		title:"Кассир",
		income:50000,
		expense:35000,
		money:10000,
		credit:0,
		children:9.3
	},
	{
		title:"Бухгалтер",
		income:90000,
		expense:55000,
		money:20000,
		credit:0,
		children:9.3
	},
	{
		title:"Банкир",
		income:200000,
		expense:120000,
		money:50000,
		credit:new Credit(30000,6,18),
		children:9.3
	},
]
export default cards;
// export default class Cards{
// 	constructor(){
// 		this.card = new Finance(cards[4].title,cards[4].income,cards[4].expense,cards[4].money,cards[4].credit,cards[4].children);
// 	}

// 	getCard(){return this.card;}
// 	setTitle(value){this.title = value;}
// }