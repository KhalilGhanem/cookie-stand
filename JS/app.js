// 'use strict';
// eslint-disable-next-line no-unused-vars;

const Seattle = {
  minCustomer:23,
  maxCustomer:65,
  avgCustomer:6.3,
  operationHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  cookiePerHour:[],

  randomCustomer:function(){
    for(let i=0;i<this.operationHours.length;i++){
      let cookieNumber =getRandom(this.minCustomer,this.maxCustomer);
      cookieNumber=cookieNumber*this.avgCustomer;
      console.log(cookieNumber);
      this.cookiePerHour.push(cookieNumber);
    }
  },
  // AvgCookieSale:function(){
  //   this.cookiePerHour.push()
  // }

};

Seattle.randomCustomer();
console.log('avg the cook'+Seattle.cookiePerHour);


// This funtcion is from The MDN
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
