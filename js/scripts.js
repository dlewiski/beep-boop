function zeroCheck(number) {
  if (number === "0") {
  newNumber = "Beep!";
  }
}



$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var number = $("#number").val();

    zeroCheck(number);

    $("#output").text(newNumber)
    $(".result").show();

  });
});
