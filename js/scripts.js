function numberCheck(number) {
  if (((parseInt(number) % 3) === 0) && (parseInt(number) !== 1) && (parseInt(number) !== 0)) {
    newNumber = "I'm sorry, Dave. I'm afraid you can't do that";
  };
  for (i = 0; i < number.length; i++){
      if (number.charAt(i) === "1") {
        newNumber = "Boop!";
        i +=100;

      } if (number.charAt(i) === "0") {
        newNumber = "Beep!";

      }
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
