// Business Logic 
function add (num1, num2, num3, num4, num5, num6, num7) {
  return num1 + num2 + num3 +num4 + num5 + num6 +num7;
}

// User Interface Logic
$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    event.preventDefault();
    const name = ($("#name").val());
    const favoriteAnimal = ($("#favoriteAnimal").val());
    const experience = parseInt($("input:radio[name=experience]:checked").val());
    const frontBack = parseInt($("input:radio[name=where]:checked").val());
    const location = parseInt($("#location").val());
    let hat1;
    let hat2;
    let hat3;
    let hat4;
    
    if ($("#hat1").is(":checked")) {
      hat1 = parseInt($("input:checkbox[name=hat1]:checked").val());
    }
    else {
      hat1 = 0;
    }
    if ($("#hat2").is(":checked")) {
      hat2 = parseInt($("input:checkbox[name=hat2]:checked").val());
    }
    else {
      hat2 = 0;
    }
    if ($("#hat3").is(":checked")) {
      hat3 = parseInt($("input:checkbox[name=hat3]:checked").val());
    }
    else {
      hat3 = 0;
    }
    if ($("#hat4").is(":checked")) {
      hat4 = parseInt($("input:checkbox[name=hat4]:checked").val());
    }
    else {
      hat4 = 0;
    }
    
    let result = add(experience, frontBack, location, hat1, hat2, hat3, hat4);
    if (favoriteAnimal === "cat") {
      result += 2;
    }
    else if (favoriteAnimal === "dog"){
      result +- 2;
    }
    else if (favoriteAnimal === "bird") {
      result += 1;
    }

    if (result <= 3) {
      $("#resultSentence").show();
      $("#username").text(name);
      $("#appropriateLanguage").text("Javascript ");
      $("#reset").show();
    }
    else if (result > 3 && result < 8)
    {
      
      $("#resultSentence").show();
      $("#username").text(name);
      $("#appropriateLanguage").text("Ruby ");
      $("#reset").show();
    }
    else {
      $("#resultSentence").show();
      $("#username").text(name);
      $("#appropriateLanguage").text("C# ");
      $("#reset").show();
    }
    $("#reset").click(function(){
      $("#reset").hide();
      $("#resultSentence").hide();
    })
  });
});

