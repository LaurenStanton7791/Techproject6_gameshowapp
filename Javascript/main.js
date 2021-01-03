var qwerty
const phrase = [
    ['Alice in Wonderland'],
    ['I Travel the World and the Seven Seas'],
    ['Along Came a Spider'],
    ['Green Eggs and Ham'], 
    ['The Call of The Wild']
 ];

const correct = [];
const incorrect = []; 
missedAnswers = 0;


for ( let i = 0; i < questions.length; i++ ) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);
    
    if ( response === answer ) {
      correctAnswers++;
      correct.push(question);
    } else {
      incorrect.push(question);
    }
  }
  
  function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
      items += `<li>${arr[i]}</li>`;
    }
    return items;
  }
  
  
  // 4. Display the number of correct answers to the user
  
  let html = `
    <h1>You got ${correctAnswers} question(s) correct</h1>
    <h2>You got these questions right:</h2>
    <ol>${ createListItems(correct) }</ol>
  
    <h2>You got these questions wrong:</h2>
    <ol>${ createListItems(incorrect) }</ol>
  `;
  
  document.querySelector('main').innerHTML = html;


