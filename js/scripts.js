function add (num1, num2, num3, num4) {
  return num1 + num2 + num3 +num4;
}





$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    event.preventDefault();

    // for name
    const name = ($("#name").val());
    // console.log(name);

    // for experience
    const experience = parseInt($("input:radio[name=experience]:checked").val());
    console.log(experience);
    console.log("is a");
    console.log(typeof experience);

    // for front end/back end
    const frontBack = parseInt($("input:radio[name=where]:checked").val());
    // console.log("Front or Back:");
    // console.log(frontBack);
    console.log(typeof frontBack);

    // for location
    const location = parseInt($("#location").val());
    // console.log("Location:");
    // console.log(location);
    console.log(typeof location);

    // for hat choice
    const hat1 = parseInt($("input[type='checkbox']:checked").val());
    console.log(typeof hat1);
    console.log(hat1);
    // const hat2 = parseInt($("input:checkbox[name=hat2]:checked").val());
    // const hat3 = parseInt($("input:checkbox[name=hat3]:checked").val());
    // const hat4 = parseInt($("input:checkbox[name=hat4]:checked").val());

    
    // console.log("Hat:");
    // console.log(hat1);
    // console.log(hat2);
    // console.log(hat3);
    // console.log(hat4);

    const result = add(experience, frontBack, location, hat1);
    console.log("The results are:");
    console.log(typeof result);
    console.log(result);
    

    


    
  });
});

