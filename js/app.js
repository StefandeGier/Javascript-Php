//From data.js

for(let subject of subjects){
	//console.log(subject);
}

var choices = [];
choices[0] = "eens";
var numb = 0;

  display();

function display(){
  document.getElementById("title").innerHTML = (subjects[numb].title);
  document.getElementById("statement").innerHTML = (subjects[numb].statement);
  console.log(numb);
  console.log(choices);
}

function next() {

  if (numb < subjects.length-1) {
    numb++;
    display();
  }
}

function back() {

  if (numb > 0) {
    numb--;
    display();
  }
}

function agree(){

}

function disagree(){

}

function neither(){

}
