function numberCheck(number) {
  if (number === "1") {
    newNumber = "Boop!";
  }
  if (number === "0") {
  newNumber = "Beep!";
  }
  if ((parseInt(number) % 3) === 0) {
    newNumber = "I'm sorry, Dave. I'm afraid you can't do that";
  }

}



$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var number = $("#number").val();

    numberCheck(number);

    $("#output").text(newNumber)
    $(".result").show();

  });
});
