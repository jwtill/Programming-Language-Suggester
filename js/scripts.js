function add (num1, num2, num3, num4) {
  return num1 + num2 + num3 +num4;
}






$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    event.preventDefault();

    // for name
    const name = ($("#name").val());


    // for experience
    const experience = parseInt($("input:radio[name=experience]:checked").val());
    console.log(experience);
    console.log("is a");
    console.log(typeof experience);

    // for front end/back end
    const frontBack = parseInt($("input:radio[name=where]:checked").val());
   
    console.log(typeof frontBack);

    // for location
    const location = parseInt($("#location").val());
   

    // for hat choice
    let hat1 = parseInt($("input[type='checkbox']:checked").val());
    if (isNaN(hat1)) {
      hat1 = 0;
    }
    console.log(hat1);
    

    const result = add(experience, frontBack, location, hat1);
    console.log("The results are:");
    console.log(result);
    

    


    
  });
});

