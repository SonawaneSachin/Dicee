if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  var player1Result = Math.ceil(Math.random() * 6);
  var player2Result = Math.ceil(Math.random() * 6);
  var player1Image = "images/dice" + player1Result + ".png";
  var player2Image = "images/dice" + player2Result + ".png";
  var result = "It's a Draw";

  if (player1Result > player2Result)
    result = '<i class="fas fa-flag-checkered"></i> Sachin Wins';
  else if (player2Result > player1Result)
    result = 'Varsha Wins <i class="fas fa-flag-checkered"></i>';

  document.querySelector(".main-heading").innerHTML = result;
  document.querySelector(".player1 img").setAttribute("src", player1Image);
  document.querySelector(".player2 img").setAttribute("src", player2Image);
}
