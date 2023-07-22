function AddName(){
    Player1=document.getElementById("player_1_login").value;
    Player2=document.getElementById("player_2_login").value;
    localStorage.setItem("player1name", Player1)
    localStorage.setItem("player2name", Player2)
    window.location="game_page.html"
}
