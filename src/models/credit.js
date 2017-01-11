'use strict';

export default class Credit{
	/*
	A = S*p/1-(1+p)-n;
	var a=document.forma1.t1.value; сумма кредита
	var b=document.forma1.t2.value; срок в месяцах
	var c=document.forma1.t3.value; процентная ставка (0.05=5%) пот такому образцу

	var s=a*c; здесь я нахожу размер процента за год
	var g=s+a; здесь я к проценту прибавляю основную сумму
	var t=g/b; здесь я основную сумму делю на количество месяцев

	document.forma1.res.value=t; здесь я вывожу результат
	где
	A — Ежемесячный платеж,
	S — сумма кредита,
	p — процентная ставка в месяц,
	n — количество месяцев погашения кредита.
	*/
	constructor(Limit=30000,Mount=6,Pr=18){
		this.limit = Limit;
		this.mount = Mount;
		this.pr = Pr;
		this.payment = this.getMountTotal();		
	}

	getLimit(){
		return this.limit;
	}
	getMountTotal(){
		let s = this.limit*(this.pr/100);
		let g = this.limit+s;
		return g/this.mount;
	}
}