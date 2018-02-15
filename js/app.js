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

  document.getElementById("nextweight").style.display = "none";
  document.getElementById("selectparties").style.display = "none";
  document.getElementById("title").innerHTML = "Kies partijen";
  document.getElementById("statement").innerHTML = "Kies de partijen die u in uw test wilt";

  var divResults = document.getElementById("results");

  for (var i = 0; i < subjects.length; i++) {
      for (var c = 0; c < subjects[i].parties.length; c++) {
        if (subjects[i].parties[c].position == choices[i]) {

          //console.log(`naam die ik zoek: ${mijnPartij}`);
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

    for (var m = 0; m < parties.length; m++) {

      var result = "";

      document.getElementById("results").innerHTML += parties[m].name + "<br>" +parties[m].points+"<br>";

    }

    backadv = 1;
    alert(backadv);
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

  document.getElementById("questions").style.display = "block";
  document.getElementById("title").innerHTML = (subjects[numb].title);
  document.getElementById("statement").innerHTML = (subjects[numb].statement);
  document.getElementById("statement").style.fontSize = "35px";
  document.getElementById("buttons").style.display = "block";
  document.getElementById("selectparties").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("nextweight").style.display = "none";
  console.log(numb);
  console.log(subjects.length);
  console.log(choices);
  console.log(choicesweight);

}

function displayWeight(){

  document.getElementById("title").innerHTML = "Zijn er onderwerpen die u extra belangrijk vindt?";
  document.getElementById("statement").innerHTML = "Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.";
  document.getElementById("statement").style.fontSize = "20px";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("selectparties").style.display = "block";
  document.getElementById("nextweight").style.display = "block";
  backadv = 0
  choicesWeight();
}

function choicesWeight(){

    var text = "";
    var textid = "";
    var i;
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
    numb = 7
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
