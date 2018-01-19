function numberCheck(number) {
  if ((number % 3) === 0) {
    newNumber = "I'm sorry, Dave. I'm afraid you can't do that";

  } if (number === 0) {
    newNumber = "Boop!";

  } if (number === 1) {
  newNumber = "Beep!";
  }
}



$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#number").val());

    numberCheck(number);

    $("#output").text(newNumber)
    $(".result").show();

  });
});
