'use strict';
// eslint-disable-next-line no-unused-vars;

// This funtcion is from The MDN
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
// This funtcion is from stackoverflow

function deleterow(tableID) {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;

  table.deleteRow(rowCount -1);
}


let operationHours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let arrayObj=[];
let container= document.getElementById('FisrtDiv');
let table=document.createElement('table');
table.setAttribute('id','table1');
container.appendChild(table);
let headerRow = document.createElement('tr');
table.appendChild(headerRow);

function addheader(){

  let thEl = document.createElement('th');
  headerRow.appendChild(thEl);
  thEl.textContent='';
  for(let i=0;i<operationHours.length;i++){
    let thEl1 = document.createElement('th');
    headerRow.appendChild(thEl1);
    thEl1.textContent=operationHours[i];
  }
  let thEl2=document.createElement('th');
  headerRow.appendChild(thEl2);
  thEl2.textContent='Daily Location Total';
}

function addfooter(){
  let tableFooter=document.createElement('tr');
  table.appendChild(tableFooter);
  let foEl=document.createElement('td');
  tableFooter.appendChild(foEl);
  foEl.textContent='Total';
  for(let i=0;i<operationHours.length;i++){
    let foEl1=document.createElement('td');
    tableFooter.appendChild(foEl1);
    let ftotal=0;
    for(let j=0;j<arrayObj.length;j++){
      ftotal=+arrayObj[j].cookiePerHour[i];
    }
    foEl1.textContent=ftotal;
  }
  let foEl2=document.createElement('td');
  tableFooter.appendChild(foEl2);
  let megaTotal=0;
  for(let y=0;y<arrayObj.length;y++){
    megaTotal=megaTotal+arrayObj[y].cNumber;
  }
  foEl2.textContent=megaTotal;
}
/*
function addfooter(){
  let tableFooter=document.createElement('tr');
  table.appendChild(tableFooter);
  let foEl=document.createElement('td');
  tableFooter.appendChild(foEl);
  foEl.textContent='Total';
  for(let i=0;i<operationHours.length;i++){
    let foEl1=document.createElement('td');
    tableFooter.appendChild(foEl1);
    let ftotal=seattle.cookiePerHour[i]+tokyo.cookiePerHour[i]+dubai.cookiePerHour[i]+paris.cookiePerHour[i]+lima.cookiePerHour[i];
    foEl1.textContent=ftotal;
  }
  let foEl2=document.createElement('td');
  tableFooter.appendChild(foEl2);
  let megaTotal=seattle.cNumber+tokyo.cNumber+dubai.cNumber+paris.cNumber+lima.cNumber;
  foEl2.textContent=megaTotal;
}
*/

function Branch(location,minCustomer,maxCustomer,avgCustomer){
  this.location=location;
  this.minCustomer=minCustomer;
  this.maxCustomer=maxCustomer;
  this.avgCustomer=avgCustomer;
  this.cookiePerHour=[];
  this.cNumber=0;
  arrayObj.push(this);
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
    tdEl1.textContent=this.cookiePerHour[i];
  }
  let tdEl2=document.createElement('td');
  tableRow.appendChild(tdEl2);
  tdEl2.textContent=this.cNumber;


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
addfooter();




const form = document.getElementById('siteform');
form.addEventListener('submit', handleForm);

console.log(arrayObj);

function handleForm(event){
  deleterow('table1');
  event.preventDefault();
  let newSite=event.target.Sitename.value;
  console.log(newSite);
  let siteMin=parseInt(event.target.minnum.value);
  console.log(siteMin);
  let siteMax=parseInt(event.target.maxnum.value);
  console.log(siteMax);
  let siteAvg=parseInt(event.target.avgnum.value);
  console.log(siteAvg);
  let newLocation=new Branch(newSite,siteMin,siteMax,siteAvg);
  newLocation.randomCustomer();
  newLocation.render();
  console.log(arrayObj);
  addfooter();
  //add new footer 
  /*
  function addfooter1(OBJ){
    let tableFooter=document.createElement('tr');
    table.appendChild(tableFooter);
    let foEl=document.createElement('td');
    tableFooter.appendChild(foEl);
    foEl.textContent='Total';
    for(let i=0;i<operationHours.length;i++){
      let foEl1=document.createElement('td');
      tableFooter.appendChild(foEl1);
      let ftotal=+seattle.cookiePerHour[i]+tokyo.cookiePerHour[i]+dubai.cookiePerHour[i]+paris.cookiePerHour[i]+lima.cookiePerHour[i]+OBJ.cookiePerHour[i];
      foEl1.textContent=ftotal;
    }
    let foEl2=document.createElement('td');
    tableFooter.appendChild(foEl2);
    let megaTotal=+seattle.cNumber+tokyo.cNumber+dubai.cNumber+paris.cNumber+lima.cNumber+OBJ.cNumber;
    foEl2.textContent=megaTotal;
  }
  addfooter1(newLocation);
  */
}

console.log(arrayObj);


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




