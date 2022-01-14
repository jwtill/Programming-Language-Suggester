// Business Logic 

function add (num1, num2, num3, num4, num5, num6, num7) {
  return num1 + num2 + num3 +num4 + num5 + num6 +num7;
}
// function ignoreUnchecked(itemID, checkReturn) {
//   if ($("itemID").is(":checked")) {
//     checkReturn = parseInt($("input:checkbox[name=itemID]:checked").val());
//   }
//   else {
//     checkReturn = 0;
//   }

// }






$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    event.preventDefault();

    // for name
    const name = ($("#name").val());


    // for experience
    const experience = parseInt($("input:radio[name=experience]:checked").val());
    
    // for front end/back end
    const frontBack = parseInt($("input:radio[name=where]:checked").val());
   
    

    // for location
    const location = parseInt($("#location").val());
   

    // for hat choice
    let hat1;
    if ($("#hat1").is(":checked")) {
      hat1 = parseInt($("input:checkbox[name=hat1]:checked").val());
    }
    else {
      hat1 = 0;
    }
    let hat2;
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
    

    const result = add(experience, frontBack, location, hat1, hat2, hat3, hat4);
    if (result <= 3) {
      console.log("js");
      $("#resultSentence").show();
      $("#appropriateLanguage").text("Javascript");
    }
    else if (result > 3 && result < 8)
    {
      $("#resultSentence").show();
      $("#appropriateLanguage").text("Ruby");
    }
    else {
      $("#resultSentence").show();
      $("#appropriateLanguage").text("C#");
    }
      
    

  });
});
