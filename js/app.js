//From data.js

for(let subject of subjects){
	//console.log(subject);
}

var choices = [];
var numb = 0;

  display();

function toonstelling(){
  document.getElementById("title").innerHTML = (subjects[numb].title);
  document.getElementById("statement").innerHTML = (subjects[numb].statement);
}

function next() {

  if (numb < subjects.length-1) {
    numb++;
    toonstelling();
  }
}

function back() {

  if (numb > 0) {
    numb--;
    display();
  }
}
