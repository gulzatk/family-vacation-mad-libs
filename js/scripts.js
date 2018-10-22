
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["last-name", "location", "activity", "food", "adjective"]

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
