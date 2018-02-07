//From data.js

for(let subject of subjects){
	//console.log(subject);
}

var choices = [];
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

function end(){
  if (numb == subjects.length) {
    alert("Dat was em dan");
  }
}

function agree(){
  choices[numb] = "eens";
  next();

}

function disagree(){
  choices[numb] = "oneens";
  next();
  end();
}

function neither(){
  choices[numb] = "geen van beide";
  next();
  end();
}
