/**New code */
// Questions will be asked
const Questions = [{
   id: 0,
   q: "1. JavaScript booleans can have one of two values: ",
   a: [{ text: "0 or 1", isCorrect: false },
      { text: "x or y", isCorrect: false },
      { text: "true or false", isCorrect: true },
      { text: "HTML or CSS", isCorrect: false }
   ]

},
{
   id: 1,
   q: "2. Object used to store multiple values in a single variable: ",
   a: [{ text: "A function", isCorrect: false, isSelected: false },
      { text: "A method", isCorrect: false },
      { text: "document.window", isCorrect: false },
      { text: "An Array", isCorrect: true }
   ]

},
{
   id: 2,
   q: "3. The most important attribute of the <a> element is the href attribute, which indicates the link's destination ",
   a: [{ text: "It's not important", isCorrect: false },
      { text: "Yes and No", isCorrect: false },
      { text: "Yes it's the most important", isCorrect: true },
      { text: "It does not matter to define href", isCorrect: false }
   ]

   },
   {
      id: 3,
      q: "4. The property used to add rounded borders to an element is:  ",
      a: [{ text: "background-color", isCorrect: false },
         { text: "color", isCorrect: false },
         { text: "border-radius", isCorrect: true },
         { text: "padding", isCorrect: false }
      ]
   
   }

]


// Set start
var count = 0;
start = true;
var startbutton = document.getElementById('start-button');
var cardSection = document.querySelector(".card");
var navigation = document.querySelector(".navigation");
// Next button and method
const next = document.getElementsByClassName('next')[0];

var sec = 15;//How many seconds for timer function
var time = setInterval(myTimer, 1000);

//Start button - click even
startbutton.addEventListener("click", function () {
   window.location.reload(true)
   sec = 15;
   var time = setInterval(myTimer, 1000);
   //alert("Startalert");
   //myTimer();
   
})

//Defining timer function
function myTimer() {
   startbutton.disabled = true;
   startbutton.textContent = sec + " Sec left";
    sec--;
    if (sec == -1) {
       clearInterval(time);
       validationFunction(2)
       //alert("Time out!! :(");
       sec = 15;
       startbutton.textContent = "Start";
       startbutton.disabled = false;
    }
}

var correctAnswer = 0;

selected = "";
// Iterate
function iterate(id) {
  
   // Getting the result display section
   var result = document.getElementsByClassName("result");
   //result[0].innerText = "";
   
   // Getting the question
   const question = document.getElementById("question");
   
   
   // Setting the question text
   //Getting the question from the array
   cardSection.children[0].innerText =  Questions[id].q;
   //Making the reference for the buttons (answers)
   const answer1 = document.getElementById('answer1');
   const answer2 = document.getElementById('answer2');
   const answer3 = document.getElementById('answer3');
   const answer4 = document.getElementById('answer4');
   
   // Providing option text
   answer1.innerText = Questions[id].a[0].text;
   answer2.innerText = Questions[id].a[1].text;
   answer3.innerText = Questions[id].a[2].text;
   answer4.innerText = Questions[id].a[3].text;
   
   // Providing the true or false value to the options
   answer1.value = Questions[id].a[0].isCorrect;
   answer2.value = Questions[id].a[1].isCorrect;
   answer3.value = Questions[id].a[2].isCorrect;
   answer4.value = Questions[id].a[3].isCorrect;
   console.log("A1" + answer1.value +
      "A2" + answer2.value +
      "A3" + answer3.value +
      "A4" + answer4.value);
   
  //First answer button 
   answer1.addEventListener("click", function () {
      answer1.style.backgroundColor = "lightskyblue";
      answer2.style.backgroundColor = "#067eaa";
      answer3.style.backgroundColor = "#067eaa";
      answer4.style.backgroundColor = "#067eaa";
      
      
      selected = answer1.value; 
})
   
   //Second answer button 
   answer2.addEventListener("click", function(){  
      
      answer1.style.backgroundColor = "#067eaa";
      answer2.style.backgroundColor = "lightskyblue";
      answer3.style.backgroundColor = "#067eaa";
      answer4.style.backgroundColor = "#067eaa";

      selected = answer2.value;
})
   //Third answer button 
   answer3.addEventListener("click", function () { 
      answer1.style.backgroundColor = "#067eaa";
      answer2.style.backgroundColor = "#067eaa";
      answer3.style.backgroundColor = "lightskyblue";
      answer4.style.backgroundColor = "#067eaa";
      
     
   selected = answer3.value;
})
   
   //Fourth answer button 
   answer4.addEventListener("click", function () {
      answer1.style.backgroundColor = "#067eaa";
      answer2.style.backgroundColor = "#067eaa";
      answer3.style.backgroundColor = "#067eaa";
      answer4.style.backgroundColor = "lightskyblue";
      selected = answer4.value;
   })
   

}


console.log(iterate);
if (start) {
   iterate("0");
}
   
/************ */


var id = 0;
//Next button click even
next.addEventListener("click", function () {
   console.log("id -->" + id);

   start = false;
   //Defining colors for each answer button
      answer1.style.backgroundColor = "#067eaa";
      answer2.style.backgroundColor = "#067eaa";
      answer3.style.backgroundColor = "#067eaa";
      answer4.style.backgroundColor = "#067eaa";
      console.log("selected: " + selected)
      
   //If the answer is correct and still on the array options, will increment the correct answer counter
      if (selected === "true" && id <= 3) {
         count = count + 10;   
      }
      else {
         //count++;
      }
   
   //If its the last question, will save the count variable in the localStorage and will open a new window.
   if (id === 3) {
         
      if (localStorage.getItem("count") < count)
         {
         localStorage.setItem("count", count); 
      }
         window.location.replace("./result.html");
   }
   
   //Change the id to show the next question
      if (id < 3) {
         id++;
         iterate(id);
         console.log(id);
      }
      console.log("count: " + count);
      /*
      if (id == 3)
      {
         next.setAttribute("desabled", "true");
         evaluate.innerText = "Evaluation";
         }
         */
})

//console.log("Correct answer: " + correctAnswer);


//Creating a Modal to be shown once the time expires
function showError(message, type) {

   BootstrapDialog.show({
     title: (type == 1 ? 'Time is Over!' : 'Try Again!') + ' message',
     message: message,
     buttons: [{
       label: 'Close',
       cssClass: (type == 1 ? 'btn btn-warning' : 'btn btn-danger'),
       action: function(dialog) {
         dialog.close();
       }
     }]
   });
 }
 
 
 
 function validationFunction(i){
   
   if(i==2)
   {
     showError('Game Over! Time Out... Close and PRESS the START Button...',1);
      return false;
      
   }
 }