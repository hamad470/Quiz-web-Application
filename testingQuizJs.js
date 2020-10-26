function submitForm(e){
    e.preventDefault();
    let name = document.forms["welcome-form"]["name"].value;
    sessionStorage.setItem("name",name);
    location.href = "testing2.html";
    //console.log(name);
}

let questions = [
    {
        id:1,
        question:"what is f",
        answer :"normal",
        options:[
            "normal",
            "not normal",
            "high",
            "high4"
        ]
    },
    {
        id:2,
        question:"what is p",
        answer :"normal2",
        options:[
            "normal2",
            "not normal2",
            "high2",
            "high4"
        ]

    },
    {id:3,
        question:"what is t",
        answer :"normal3",
        options:[
            "normal3",
            "not normal3",
            "high3",
            "high4"
        ]
    }
]
window.onload=function(){
    show(counter);
}
let counter = 0;
let point = 0;
function next(){
let quizAnswer = document.querySelector("li.option.active").innerHTML
//console.log(quizAnswer);

if(quizAnswer==questions[counter].answer)
{
    point++;
    sessionStorage.setItem("points",point);
    
   //console.log(" you are right");
}
if(counter==questions.length-1)
{
    location.href = "end.html"
    return;
}
counter++;
show(counter);
}
//console.log(counter);not access of func
function show(count){
    let questionare = document.getElementById("questions");
    questionare.innerHTML = `
    <h2>Q${counter+1}.${questions[count].question}</h2>
    <ul class = "option-group">
       <li class = "option">${questions[count].options[0]}</li>
       <li class = "option">${questions[count].options[1]}</li>
       <li class = "option">${questions[count].options[2]}</li>
       <li class = "option">${questions[count].options[3]}</li>


    </ul>
    `
activate();
}
next();
function activate(){
    activeValue = document.querySelectorAll("li.option");
    
    for(let i=0;i<activeValue.length;i++)
    {
        activeValue[i].onclick = function(){
            for(let j=0;j<activeValue.length;j++)
            {
                if(activeValue[j].classList.contains("active"))
                {
                    activeValue[j].classList.remove("active");
                }
            }
            activeValue[i].classList.add("active");
        }
     

    }
}

