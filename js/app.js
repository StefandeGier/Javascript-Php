//From data.js

for(let subject of subjects){

}
for(let partie of parties){

}
var backadv = 0;
var choicesweight = [];
var choices = [];
var numb = 0;

choicesWeight()

function displayParties(){
  document.getElementById("back").style.display = "none"; // moest gebeuren
  document.getElementById("nextweight").style.display = "none";
  document.getElementById("selectparties").style.display = "none";
  document.getElementById("parties").style.display = "block";
  document.getElementById("title").innerHTML = "Resultaten";

  for (var i = 0; i < subjects.length; i++) {
      for (var c = 0; c < subjects[i].parties.length; c++) {
        if (subjects[i].parties[c].position == choices[i]) {
          let obj = parties.find(o => o.name === subjects[i].parties[c].name);
            obj.points += 1;
            if (choicesweight[i] == "Extra punten") {
              obj.points += 10;
            }
        }
      }
    }
    parties.sort(function (a, b) {
      return b.points - a.points;
    });
}

function testresult(objButton){

  alert(objButton.value);
  document.getElementById("results").innerHTML = "";
  for (var m = 0; m < parties.length; m++) {
    if (objButton.value == 0) {
      document.getElementById("results").innerHTML += parties[m].name + "<br>" +parties[m].points+"<br>";
    }
    if (objButton.value == 1) {
      if (parties[m].size > 0) {
        document.getElementById("results").innerHTML += parties[m].name + "<br>" +parties[m].points+"<br>";
      }
    }
    if (objButton.value == 2) {
      if (parties[m].secular == true) {
        document.getElementById("results").innerHTML += parties[m].name + "<br>" +parties[m].points+"<br>";
      }
    }
  }
}
function displayStart(startb){
  if (startb == true) {
    document.getElementById("start").style.display = "block";
    document.getElementById("questions").style.display = "none";

  }else {
    choices = []; // wanneer opnieuwe op start gedrukt empty array ?
    display();
  }
}
function display(){
  document.getElementById("parties").style.display = "none";
  document.getElementById("questions").style.display = "block";
  document.getElementById("title").innerHTML = (subjects[numb].title);
  document.getElementById("statement").innerHTML = (subjects[numb].statement);
  document.getElementById("statement").style.fontSize = "35px";
  document.getElementById("buttons").style.display = "block";
  document.getElementById("selectparties").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("nextweight").style.display = "none";
}
function displayWeight(){
  document.getElementById("title").innerHTML = "Zijn er onderwerpen die u extra belangrijk vindt?";
  document.getElementById("statement").innerHTML = "Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("parties").style.display = "none";
  document.getElementById("selectparties").style.display = "block";
  document.getElementById("nextweight").style.display = "block";
  backadv = 0
  choicesWeight();
}
function choicesWeight(){
    var text = "";
    for (i = 0; i < subjects.length; i++) {
        text += "<h4 class='checkbox'>"+subjects[i].title + "<input type='checkbox' class='myField' value='"+ i +"'></h4><br><hr>";
        document.getElementById("checkbox").innerHTML = text;
    }
  }
function weightCalc(){
  var checkedValue = null;
  var inputElements = document.getElementsByClassName('myField');
  for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
             checkedValue = inputElements[i].value;
             alert(checkedValue);
             choicesweight[checkedValue] = "Extra punten";
        }
  }
   displayParties();
}
function next() {
  if (numb < subjects.length-1) {
    numb++;
    display();
  }
  else if (numb == subjects.length-1) {
    alert("diplayResults");
    numb = 7 // e
    displayWeight();
  }
}
function back() {

  if (backadv == 0) {
    if (numb > 0) {
      numb--;
      display();
    }else if(numb == 0) {
      displayStart(true);
    }
  }
    if (backadv == 1) {
      alert("Back weight");
      displayWeight();
    }
}

function agree(){
  choices[numb] = "pro";
  next();
}
function disagree(){
  choices[numb] = "contra";
  next();
}
function neither(){
  choices[numb] = "ambivalent";
  next();
}
