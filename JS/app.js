'use strict';
// eslint-disable-next-line no-unused-vars;

// This funtcion is from The MDN
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


let operationHours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let container= document.getElementById('FisrtDiv');
let table=document.createElement('table');
container.appendChild(table);
let headerRow = document.createElement('tr');
table.appendChild(headerRow);

function addheader(){

  let thEl = document.createElement('th');
  headerRow.appendChild(thEl);
  thEl.textContent='  `   ';
  for(let i=0;i<operationHours.length;i++){
    let thEl1 = document.createElement('th');
    headerRow.appendChild(thEl1);
    thEl1.textContent=operationHours[i];
  }
  let thEl2=document.createElement('th');
  headerRow.appendChild(thEl2);
  thEl2.textContent='Daily Location Total';
}

function Branch(location,minCustomer,maxCustomer,avgCustomer){
  this.location=location;
  this.minCustomer=minCustomer;
  this.maxCustomer=maxCustomer;
  this.avgCustomer=avgCustomer;
  this.cookiePerHour=[];
  this.cNumber=0;
}

Branch.prototype.randomCustomer=function(){
  for(let i=0;i<operationHours.length;i++){
    let cookieNumber =getRandom(this.minCustomer,this.maxCustomer);
    cookieNumber=cookieNumber*this.avgCustomer;
    this.cookiePerHour.push(Math.ceil(cookieNumber));
    this.cNumber=this.cNumber+Math.ceil(cookieNumber);
    console.log(cookieNumber);
  }
};
Branch.prototype.render=function(){
  let tableRow=document.createElement('tr');
  table.appendChild(tableRow);
  let tdEl=document.createElement('td');
  tableRow.appendChild(tdEl);
  tdEl.textContent=this.location;
  for(let i=0;i<operationHours.length;i++){
    let tdEl1=document.createElement('td');
    tableRow.appendChild(tdEl1);
    tdEl1.textContent=this.cookiePerHour[i]+' cookies';
  }
  let tdEl2=document.createElement('td');
  tableRow.appendChild(tdEl2);
  tdEl2.textContent=this.cNumber+' cookies';


};


addheader();
let seattle=new Branch('Seattle',23,65,6.3);
seattle.randomCustomer();
seattle.render();
let tokyo= new Branch('Tokyo',3,24,1.2);
tokyo.randomCustomer();
tokyo.render();
let dubai=new Branch('Dubai',11,38,7.3);
dubai.randomCustomer();
dubai.render();
let paris=new Branch('Paris',20,38,2.3);
paris.randomCustomer();
paris.render();
let lima=new Branch('Lima',2,16,4.6);
lima.randomCustomer();
lima.render();

//console.log(Seattle.cookiePerHour,Seattle.location);

/*
Tokyo Store

const Tokyo = {
  minCustomer:3,
  maxCustomer:24,
  avgCustomer:1.2,
-------
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

*/




