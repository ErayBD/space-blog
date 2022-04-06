function sendContact() {

    var gender = "";
    var confirmMessage = "";

    var name = document.getElementById("firstName").value;
    var nameL= document.getElementById("firstName").value.length;

    var surname = document.getElementById("lastName").value;
    var surnameL= document.getElementById("lastName").value.length;

    var email = document.getElementById("email").value;
    var emailL= document.getElementById("email").value.length;
    
    var emailI1 = email.includes("@");
    var emailI2 = email.includes(".com");

    var textL = document.getElementById("question").value.length;

    if (!(document.getElementById("male").checked || document.getElementById("female").checked)) 
        alert("Please select any gender...")
    

    else if (nameL == 0 || surnameL == 0 || emailL == 0 || textL == 0) 
        alert("Please fill the form properly...");

    else if (!(emailI1 && emailI2))
        alert("The e-mail does not contain the '@' symbol and/or '.com'");
    

    else {

        if (document.getElementById("male").checked)
            gender = "Mr. ";
        
        else if (document.getElementById("female").checked)
            gender = "Mrs. ";

        if (confirm("Are you sure?")) 
            alert(gender + name + " " +  surname + "...\n" + "Your message has been received!\nYou will receive a response from us ASAP!\nErayBD sends bunch of loves!");

        else {
            alert("Message did not sent.")
        }
    }   
}


function checkboxFunction() {
  const checkBox = document.getElementById('newsletter');

    if (checkBox.checked == true) 
    alert("We will keep you informed of upcoming news!");
  
}

$(document).ready(function(){

    var qTrue = 0;
    var qFalse = 0;

    $("#quizB").click(function(){
        $("#start").fadeOut(1000);
        // $("#questions").fadeIn(1000).css("display", "block");
        $(".questions").fadeIn(1000);
    });

    $("input").focus(function(){
        $(this).css("background-color", "yellow");
    });
      $("input").blur(function(){
        $(this).css("background-color", "white");
    });



    $(".q1R").click(function(){
        $(this).fadeIn(1000).css("background-color", "green");
        $(this).fadeIn(1000).css("color", "white");
        $(".q1W").prop("disabled", true);
        qTrue++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q1W").click(function(){
        $(this).fadeIn(1000).css("background-color", "red");
        $(this).fadeIn(1000).css("color", "white");
        $(".q1R").prop("disabled", true);
        qFalse++;

        if (qTrue + qFalse == 7)
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
            
    });

    $(".q2R").click(function(){
        $(this).fadeIn(1000).css("background-color", "green");
        $(this).fadeIn(1000).css("color", "white");
        $(".q2W").prop("disabled", true);
        qTrue++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q2W").click(function(){
        $(this).fadeIn(1000).css("background-color", "red");
        $(this).fadeIn(1000).css("color", "white");
        $(".q2R").prop("disabled", true);
        qFalse++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q3R").click(function(){
        $(this).fadeIn(1000).css("background-color", "green");
        $(this).fadeIn(1000).css("color", "white");
        $(".q3W").prop("disabled", true);
        qTrue++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q3W").click(function(){
        $(this).fadeIn(1000).css("background-color", "red");
        $(this).fadeIn(1000).css("color", "white");
        $(".q3R").prop("disabled", true);
        qFalse++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q4R").click(function(){
        $(this).fadeIn(1000).css("background-color", "green");
        $(this).fadeIn(1000).css("color", "white");
        $(".q4W").prop("disabled", true);
        qTrue++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q4W").click(function(){
        $(this).fadeIn(1000).css("background-color", "red");
        $(this).fadeIn(1000).css("color", "white");
        $(".q4R").prop("disabled", true);
        qFalse++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q5R").click(function(){
        $(this).fadeIn(1000).css("background-color", "green");
        $(this).fadeIn(1000).css("color", "white");
        $(".q5W").prop("disabled", true);
        qTrue++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q5W").click(function(){
        $(this).fadeIn(1000).css("background-color", "red");
        $(this).fadeIn(1000).css("color", "white");
        $(".q5R").prop("disabled", true);
        qFalse++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q6R").click(function(){
        $(this).fadeIn(1000).css("background-color", "green");
        $(this).fadeIn(1000).css("color", "white");
        $(".q6W").prop("disabled", true);
        qTrue++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q6W").click(function(){
        $(this).fadeIn(1000).css("background-color", "red");
        $(this).fadeIn(1000).css("color", "white");
        $(".q6R").prop("disabled", true);
        qFalse++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q7R").click(function(){
        $(this).fadeIn(1000).css("background-color", "green");
        $(this).fadeIn(1000).css("color", "white");
        $(".q7W").prop("disabled", true);
        qTrue++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
    });

    $(".q7W").click(function(){
        $(this).fadeIn(1000).css("background-color", "red");
        $(this).fadeIn(1000).css("color", "white");
        $(".q7R").prop("disabled", true);
        qFalse++;

        if (qTrue + qFalse == 7) 
            setTimeout(function() { alert("Congratulations! The quiz is over\nTrue: " + qTrue + "\nFalse: " + qFalse); }, 500);
        
    });


    
});
    





