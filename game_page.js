player_1_name=localStorage.getItem("player1name");
player_2_name=localStorage.getItem("player2name");
player_1_score=0
player_2_score=0
document.getElementById("player1name").innerHTML= player_1_name + ":";
document.getElementById("player2name").innerHTML= player_2_name + ":";
document.getElementById("player1score").innerHTML= player_1_score;
document.getElementById("player2score").innerHTML= player_2_score;
document.getElementById("player_question").innerHTML= "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn - " + player_2_name;


function Send(){
num1 = document.getElementById("number1").value;
num2 = document.getElementById("number2").value;
AA = parseInt(num1) * parseInt(num2);
question_number= "<h4> "+num1+" X "+num2+" </h4>"
input_box = "<br>Answer: <input type='text' id='input_check_box'>"
check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == AA)
    {
        if(answer_turn == "player1")
        {
            update_player_1_score = player_1_score + 1;
            document.getElementById("player1score").innerHTML = update_player_1_score
        }
        else
        {
            update_player_2_score = player_2_score + 1;
            document.getElementById("player2score").innerHTML = update_player_2_score
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_2_name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1_name;
    }
    document.getElementById("output").innerHTML = "";
}
