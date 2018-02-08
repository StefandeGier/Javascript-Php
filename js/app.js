//From data.js

for(let subject of subjects){
	//console.log(subject);
}

var choicesweight = [];
var choices = [];
var numb = 0;

choicesWeight()

function displayStart(test){
  if (test == true) {
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

  console.log(numb);
  console.log(subjects.length);
  console.log(choices);
}

function displayWeight(){
  document.getElementById("title").innerHTML = "Zijn er onderwerpen die u extra belangrijk vindt?";
  document.getElementById("statement").innerHTML = "Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.";
  document.getElementById("statement").style.fontSize = "20px";
  document.getElementById("buttons").style.display = "none";
  document.getElementById("selectparties").style.display = "block";
  choicesWeight();
}

function choicesWeight(){

    var text = "";
    var textid = "";
    var i;
    for (i = 0; i < subjects.length; i++) {

        text += "<h4>"+subjects[i].title + '<input style="margin-left:10px;" type="checkbox" id="myField" data-id="" value="">'+"</h4>"+"<br>"+"<hr>";
        document.getElementById("test").innerHTML = text;


    }
  }




function next() {

  if (numb < subjects.length-1) {
    numb++;
    display();
  }
  else if (numb == subjects.length-1) {
    alert("diplayResults");

    displayWeight();
  }
}

function back() {

  if (numb > 0) {
    numb--;
    display();
  }else if(numb == 0) {

    displayStart(true);
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
