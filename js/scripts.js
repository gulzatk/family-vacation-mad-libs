
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var lastnameInput = $("input#last-name").val();
    var locationInput = $("input#location").val();
    var activityInput= $("input#activity").val();
    var foodInput = $("input#food").val();
    var adjectiveInput = $("input#adjective").val();

    $(".last-name").text(lastnameInput);
    $(".location").text(locationInput);
    $(".activity").text(activityInput);
    $(".food").text(foodInput);
    $(".adjective").text(adjectiveInput);

    $("#story").show();

    event.preventDefault();
  });
});
