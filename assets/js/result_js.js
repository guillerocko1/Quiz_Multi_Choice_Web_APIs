
//Defining variables
var result = document.getElementById("result");
var count_answer = localStorage.getItem("count");
var comeback = document.getElementById("comeback");

//Assigning the localStorage variable to be shows to the user
result.innerHTML = "The Higher score is: " + count_answer;
console.log(result.innerHTML);
console.log(count_answer);

//Comeback button click even, will open the main window
comeback.addEventListener("click", function () {
   window.location.replace("./index.html");
});