player1_name = localStorage.getItem("p1_key");
player2_name = localStorage.getItem("p2_key");
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
qturn = "p1";
aturn = "p2";
document.getElementById("question_turn").innerHTML = "Question Turn:" + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn:" + player2_name;
p1_score = 0;
p2_score = 0
document.getElementById("player1_score").innerHTML = p1_score;
document.getElementById("player2_score").innerHTML = p2_score;
function send() {
    number1 = document.getElementById("input1").value;
    number2 = document.getElementById("input2").value;
    actual_answer = parseInt(number1) * parseInt(number2)
    question_number = "<h4>" + number1 + "X" + number2 +"</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question_number + input_box + check_button ;
    documnet.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    documnet.getElementById("number2").value = "";
}
    
