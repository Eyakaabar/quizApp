
var score=0;
function getvalue(userInput) {
    if(event.keyCode == 13) {
        var val=userInput.value;
        if(val.toLowerCase()=="corona krise"){
            score=1;
        }
        else{
            score=0;
        }
    console.log(score);
    }
}