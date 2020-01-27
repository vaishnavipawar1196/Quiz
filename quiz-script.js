var currentQuestion=0;
var score=0;
var totQuestion=questions.length;

var container=document.getElementById('quize');
var questionEl=document.getElementById('question');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');
var nxtbtn=document.getElementById('next-btn');
var result=document.getElementById('result');

function loadQuestion(questionIndex){
    var q=questions[questionIndex];
    questionEl.textContent=(questionIndex+1)+'. '+q.question;
    opt1.textContent=q.opt1;
    opt2.textContent=q.opt2;
    opt3.textContent=q.opt3;
    opt4.textContent=q.opt4;
};

function loadNextQuestion(){
    var selectedOption=document.querySelector('input[type=radio]:checked');

    if(!selectedOption){
        alert('Please select your option!');
        return;
    }

    var ans=selectedOption.value;
    if(questions[currentQuestion].ans==ans){
        score+=20;
    }
    selectedOption.checked=false;
    currentQuestion++;
    if(currentQuestion==totQuestion-1){
        nxtbtn.textContent='Finish';
    }
    if(currentQuestion==totQuestion){
        container.style.display='none';
        result.style.display='';
        result.textContent='Your Score:'+score;
        if(score==100){
            result.textContent='Congrates! Your Score is 100%!';
        }
        else if(score<=40){
            result.textContent='You are failed! Your score is low:'+score;
        }
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);