'use strict';
export default class Finance{
	/**
	 *  @Title 		Название	  
	 *  @Income 	Доходы		  
	 *  @Expense 	Расходы		  
	 *  @cashFlow Денежный поток 
	 *  @Money 		Наличные	
	 *  @Credit 	Кредиты		  
	 *  @Children Процент расходов на детей	  
	 */
	constructor(Title="Студент",Income=3000,Expense=2500,Money=5000,Credit=0,Children=9.3){
		this.title = Title;
		this.income = Income;
		this.expense = Expense;
		this.cashFlow = Income - Expense;
		this.money = Money;
		this.credit = Credit;
		this.children = Children;
	}

	getTitle(){return this.title}
	getIncome(){return this.income}
	getExpense(){return this.expense}
	getCashFlow(){return this.cashFlow}
	getMoney(){return this.money}
	getCredit(){
		if(typeof this.credit === 'object'){
			return this.credit.payment;
		}
		return this.credit
	}
	// getChildren(){return this.children}
	getChildren(coll){		
		return Math.floor(this.income*(this.children/100))*coll;
	}

	setTitle(value){this.title = value;}
	setIncome(value){
		this.income = value;		
		this.cashFlow = value - this.expense;
	}
	setExpense(value){
		this.expense = value;
		this.cashFlow = this.income - value;
	}
	setMoney(value){this.money = value}
	setCredit(value){this.credit = value}
	setChildren(value){this.children = value}
}