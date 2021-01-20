/* draggable element */
const item = document.querySelector('.card-body');
item.addEventListener('dragstart', dragStart);
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
    }, 0);
}
/* drop targets */
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave(e) {
}

function drop(e) {

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');
}

let statements = [
    {   numb: 1,
        statement: "Es gibt einen einheitlichen Kodex, der Richtlinien für Journalist*innen festlegt.",
        answer: "1",
    },
    {
        numb: 2,
        statement: "Es gibt Einrichtungen, bei denen man melden kann, dass Nachrichten nicht korrekt berichtet wurden.",
        answer: "1",
    },
    {
        numb: 3,
        statement: "Journalist*innen müssen vor der Veröffentlichung von Inhalten überprüfen, wo sie herkommen und ob sie richtig sind.",
        answer: "1",
    },
    {
        numb: 4,
        statement: "Eine Nachricht über einen Bundesminister darf nur nach Genehmigung durch das Ministerium veröffentlicht werden.",
        answer: "0",

    },
    
];


//selecting all required elements
/*const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");*/


//let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let currentQuestion;
let availableQuestions=[];

const next_btn = document.querySelector("footer .next_btn");
const footer = document.querySelector(".card-footer");
shuffle(statements);
    getNewQuestion(0); //calling showQestions function
    queCounter(1);
//shuffle the array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    //console.log(array);
}
// getting questions and options from array
function getNewQuestion(index){
    const que_text = document.querySelector(".que_text"); 

    let card = 
    '<p class="card-text"><div class="quesnumber">'+statements[index].statement +'</div></p>'+
    '</div>';


    item.innerHTML = card; //adding new div tag inside option_tag
    
}
//if user clicked on option
function optionSelected(answer){
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
          //****************************write fct to classify the selected option***********************
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
       //***************************write fct to calculate the score*************************
        console.log("Wrong Answer");}

    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        getNewQuestion(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
    }else{
        showResult(); //calling showResult function
    }
}
/*function showResult(){
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore >= 7){ // if user scored more equal or more than 7
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ '3' +'</p> out of <p>'+ '3' +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore =6){ // if user scored 6 right answers
        let scoreTag = '<span> You got <b>'+ '2' +'</b> out of <b>'+ '3' +'</b></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if (userScore=5){ // if user scored 5 right answers
        let scoreTag = '<span> You got only <b>'+ '1' +'</b> out of <b>'+ '3 +</b></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than5 right answers
        let scoreTag = '<span> 😐You got only <b>'+ '0' +'</b> out of <b>'+ '3' +'</b></span>';
        scoreText.innerHTML = scoreTag;
    }
}*/

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><b>'+ index +'/'+ statements.length +'</b></span>';
    footer.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
