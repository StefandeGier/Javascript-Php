//From data.js

for(let subject of subjects){
	//console.log(subject);
}

var choices = [];
var numb = 0;

volgende();

function volgende() {
  console.log(numb);
  if (numb < subjects.length) {
    if (typeof subjects[numb] != 'undefined') {
      document.getElementById("title").innerHTML = (subjects[numb].title);
      document.getElementById("statement").innerHTML = (subjects[numb].statement);
      if (numb != subjects.length-1){
        numb++;
      }
    }
  }
}

function terug() {

  numb --;
  console.log(numb);
  if (numb <= -1) {

    numb = 0;
    //terug naar start misschien ?
  }
  document.getElementById("title").innerHTML = (subjects[numb].title);
  document.getElementById("statement").innerHTML = (subjects[numb].statement);


}
