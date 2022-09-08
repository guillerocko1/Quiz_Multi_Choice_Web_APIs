var result = document.getElementById("result");
var count_answer = localStorage.getItem("count");
var comeback = document.getElementById("comeback");


result.innerHTML = "The Higher score is: " + count_answer;
console.log(result.innerHTML);
console.log(count_answer);

comeback.addEventListener("click", function () {
   window.location.replace("./index.html");
});