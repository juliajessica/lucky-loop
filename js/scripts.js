$(document).ready(function(){
  var score = 0
  $("form#fortuneSurvey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=fortunes]:checked").each(function(){
      score += parseInt($(this).val());
    });
    if (score <= 3){
      $("#good").show();
    }
    if (score < 6 && score >3) {
      $("#ok").show();
    }
    if (score >= 6){
      $("#bad").show();
    }
  });
});
