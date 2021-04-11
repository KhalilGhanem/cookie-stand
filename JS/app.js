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
      this.cookiePerHour.push(cookieNumber);
    }
  },
  creatingList:function(){
    let container= document.getElementById('FisrtDiv');
    let h2=document.createElement('h2');
    container.appendChild(h2);
    h2.textContent='Seattle';
    let unordered =document.createElement('ul');
    container.appendChild(unordered);
    let li=null;
    let total=0;
    for(let i=0;i<=this.operationHours.length;i++){
      if(i===14){
        li=document.createElement('li');
        unordered.appendChild(li);
        li.textContent=`Total: ${total} cookies`;
        break;
      }
      li=document.createElement('li');
      unordered.appendChild(li);
      li.textContent=`${this.operationHours[i]}: ${Math.ceil(this.cookiePerHour[i])} cookies`;
      total=total+Math.ceil(this.cookiePerHour[i]);
    }
  }
  // AvgCookieSale:function(){
  //   this.cookiePerHour.push()
  // }

};
Seattle.randomCustomer();
Seattle.creatingList();

// Tokyo Store

const Tokyo = {
  minCustomer:3,
  maxCustomer:24,
  avgCustomer:1.2,
  operationHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  cookiePerHour:[],

  randomCustomer:function(){
    for(let i=0;i<this.operationHours.length;i++){
      let cookieNumber =getRandom(this.minCustomer,this.maxCustomer);
      cookieNumber=cookieNumber*this.avgCustomer;
      this.cookiePerHour.push(cookieNumber);
    }
  },
  creatingList:function(){
    let container= document.getElementById('FisrtDiv');
    let h2=document.createElement('h2');
    container.appendChild(h2);
    h2.textContent='Tokyo';
    let unordered =document.createElement('ul');
    container.appendChild(unordered);
    let li=null;
    let total=0;
    for(let i=0;i<=this.operationHours.length;i++){
      if(i===14){
        li=document.createElement('li');
        unordered.appendChild(li);
        li.textContent=`Total: ${total} cookies`;
        break;
      }
      li=document.createElement('li');
      unordered.appendChild(li);
      li.textContent=`${this.operationHours[i]}: ${Math.ceil(this.cookiePerHour[i])} cookies`;
      total=total+Math.ceil(this.cookiePerHour[i]);
    }
  }

};
Tokyo.randomCustomer();
Tokyo.creatingList();

//Dubai store

const Dubai = {
  minCustomer:11,
  maxCustomer:38,
  avgCustomer:3.7,
  operationHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  cookiePerHour:[],

  randomCustomer:function(){
    for(let i=0;i<this.operationHours.length;i++){
      let cookieNumber =getRandom(this.minCustomer,this.maxCustomer);
      cookieNumber=cookieNumber*this.avgCustomer;
      this.cookiePerHour.push(cookieNumber);
    }
  },
  creatingList:function(){
    let container= document.getElementById('FisrtDiv');
    let h2=document.createElement('h2');
    container.appendChild(h2);
    h2.textContent='Dubai';
    let unordered =document.createElement('ul');
    container.appendChild(unordered);
    let li=null;
    let total=0;
    for(let i=0;i<=this.operationHours.length;i++){
      if(i===14){
        li=document.createElement('li');
        unordered.appendChild(li);
        li.textContent=`Total: ${total} cookies`;
        break;
      }
      li=document.createElement('li');
      unordered.appendChild(li);
      li.textContent=`${this.operationHours[i]}: ${Math.ceil(this.cookiePerHour[i])} cookies`;
      total=total+Math.ceil(this.cookiePerHour[i]);
    }
  }

};
Dubai.randomCustomer();
Dubai.creatingList();

// Paris store
const Paris = {
  minCustomer:20,
  maxCustomer:38,
  avgCustomer:2.3,
  operationHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  cookiePerHour:[],

  randomCustomer:function(){
    for(let i=0;i<this.operationHours.length;i++){
      let cookieNumber =getRandom(this.minCustomer,this.maxCustomer);
      cookieNumber=cookieNumber*this.avgCustomer;
      this.cookiePerHour.push(cookieNumber);
    }
  },
  creatingList:function(){
    let container= document.getElementById('FisrtDiv');
    let h2=document.createElement('h2');
    container.appendChild(h2);
    h2.textContent='Paris';
    let unordered =document.createElement('ul');
    container.appendChild(unordered);
    let li=null;
    let total=0;
    for(let i=0;i<=this.operationHours.length;i++){
      if(i===14){
        li=document.createElement('li');
        unordered.appendChild(li);
        li.textContent=`Total: ${total} cookies`;
        break;
      }
      li=document.createElement('li');
      unordered.appendChild(li);
      li.textContent=`${this.operationHours[i]}: ${Math.ceil(this.cookiePerHour[i])} cookies`;
      total=total+Math.ceil(this.cookiePerHour[i]);
    }
  }

};
Paris.randomCustomer();
Paris.creatingList();

//Lima store

const Lima = {
  minCustomer:2,
  maxCustomer:16,
  avgCustomer:4.6,
  operationHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  cookiePerHour:[],

  randomCustomer:function(){
    for(let i=0;i<this.operationHours.length;i++){
      let cookieNumber =getRandom(this.minCustomer,this.maxCustomer);
      cookieNumber=cookieNumber*this.avgCustomer;
      this.cookiePerHour.push(cookieNumber);
    }
  },
  creatingList:function(){
    let container= document.getElementById('FisrtDiv');
    let h2=document.createElement('h2');
    container.appendChild(h2);
    h2.textContent='Lima';
    let unordered =document.createElement('ul');
    container.appendChild(unordered);
    let li=null;
    let total=0;
    for(let i=0;i<=this.operationHours.length;i++){
      if(i===14){
        li=document.createElement('li');
        unordered.appendChild(li);
        li.textContent=`Total: ${total} cookies`;
        break;
      }
      li=document.createElement('li');
      unordered.appendChild(li);
      li.textContent=`${this.operationHours[i]}: ${Math.ceil(this.cookiePerHour[i])} cookies`;
      total=total+Math.ceil(this.cookiePerHour[i]);
    }
  }

};
Lima.randomCustomer();
Lima.creatingList();





// This funtcion is from The MDN
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
