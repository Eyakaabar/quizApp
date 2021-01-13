var questions = [
    {   
    "option1": "voll und ganz",
    "option2": "eher ja",
    "option3": "teils/teils",
    "option4": "eher nicht",
    "option5": "überhaupt nicht",
    "option6": "weiss nicht",
    },
];
var score=0;

var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var opt5=document.getElementById('opt5');
var opt6=document.getElementById('opt6');

function loadQuestion (questionIndex){

    var q=questions[questionIndex];
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;
    opt5.textContent=q.option5;
    opt6.textContent=q.option6; 
}
// if a radio button has been selected check if it's the right answer
function resultfct (){
    var selectedOption = document.querySelector('input[name="option"]:checked');
    var answerselected=selectedOption.value;
    //console.log(answerselected);
    //console.log(typeof(answerselected));
    if(answerselected=="3"||answerselected=="4"||answerselected=="5"){
        score=1;
        //console.log("actuel=", score);
    }
}
loadQuestion(0);

