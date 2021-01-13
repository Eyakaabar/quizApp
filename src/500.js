let questions = [
    {   numb: 1,
        source: "src/img/N_q1_1.png",
        source_min: "src/img/N_q1_2_min.png",
        answer: "Werbung",
    },
    {
        numb: 2,
        source: "src/img/N_q1_2.png",
        source_min: "src/img/N_q1_2_min.png",
        answer: "Werbung",
    },
    {
        numb: 3,
        source: "src/img/N_q1_3.png",
        source_min: "src/img/N_q1_3_min.png",
        answer: "Falschinformation",
    },
    {
        numb: 4,
        source: "src/img/N_q1_4.png",
        source_min: "src/img/N_q1_4_min.png",
        answer: "Falschinformation",

    },
    {
        numb: 5,
        source: "src/img/N_q1_5.png",
        source_min: "src/img/N_q1_5_min.png",
        answer: "Meinung",
    },
    {
        numb: 6,
        source: "src/img/N_q1_6.png",
        source_min: "src/img/N_q1_6_min.png",
        answer: "Meinung",
    },
    {
        numb: 7,
        source: "src/img/N_q1_7.png",
        source_min: "src/img/N_q1_7_min.png",
        answer: "Information",
    },
    {
        numb: 8,
        source: "src/img/N_q1_8.png",
        source_min: "src/img/N_q1_8_min.png",
        answer: "Information",
    },
];

let options=["Information","Werbung","Meinung","Falschinformation","weiß nicht"];

//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
//const previous_btn = info_box.querySelector(".buttons .zuruck);
//const next_btn = info_box.querySelector(".buttons .next");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");


// if startQuiz button clicked
start_btn.onclick = ()=>{
    shuffle(questions);
    quiz_box.classList.add("activeQuiz"); //show quiz box
    getNewQuestion(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter

}

//let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let currentQuestion;
let availableQuestions=[];

const restart_quiz = result_box.querySelector(".buttons .restart");
//const quit_quiz = result_box.querySelector(".buttons .quit");

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector(".total_que");
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
    var post=document.querySelector(".post");
    let img = '<img src="'+ questions[index].source +'">';
    let option_table = 
    '<td class="option" scope="col"><span>'+ options[0] +'</span></td>'
    + '<td class="option" scope="col"><span>'+ options[1] +'</span></td>'
    + '<td class="option" scope="col" ><span>'+ options[2] +'</span></td>'
    + '<td class="option" scope="col"><span>'+ options[3] +'</span></td>'
    + '<td class="option" scope="col"><span>'+ options[4] +'</span></td>';
    option_list.innerHTML = option_table; //adding new div tag inside option_tag
    post.innerHTML = img; //adding new span tag inside que_tag
    const option = option_list.querySelectorAll(".option");

    //set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
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
    let totalQueCounTag = '<span><b>'+ index +'/'+ questions.length +'</b></span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

/*********************script600**********************/ 


/*********************610*****************************/




/*********************620*****************************/