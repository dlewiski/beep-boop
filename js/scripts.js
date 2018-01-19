

$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var number = $("#number").val();

    $("#output").text(number)
    $(".result").show();

  });
});
