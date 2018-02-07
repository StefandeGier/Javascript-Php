//From data.js

for(let subject of subjects){
	//console.log(subject);
}

var numb = 0;

document.getElementById("title").innerHTML = (subjects[numb].title);
document.getElementById("statement").innerHTML = (subjects[numb].statement);


function Volgende() {

  numb += 1;

  document.getElementById("title").innerHTML = (subjects[numb].title);
  document.getElementById("statement").innerHTML = (subjects[numb].statement);


}

function Terug() {

  numb -= 1;
  console.log(numb);
  if (numb <= -1) {

    numb = 0;
    //terug naar start misschien ?
  }

  document.getElementById("title").innerHTML = (subjects[numb].title);
  document.getElementById("statement").innerHTML = (subjects[numb].statement);


}
