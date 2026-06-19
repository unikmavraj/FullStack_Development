function validateForm() {

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var nameRegex=/^[a-zA-Z]+$/;
    var ageRexex=/^[1-9][0-9]?$/;
    var emailRegex=/^\w+@\w+\.\w+$/;

    if(!nameRegex.test(name)){
        MessageChannel.textContent = "please enter valid name";
        
    }else if(ageRegex.test(age)) {
        MessageChannel.textContent = "please enter valid age";
   
    }else if(emailRegex.test(email)) {
        MessageChannel.textContent = "please enter valid email";
    }
    else{
        MessageChannel.textContent = "Form submitted succsesfully";
     }

    MessageChannel.setAttribute('class', "error");
    
    if(MessageChannel.textContent === "form submitted sucssesfully"){
        MessageChannel.setAttribute("class", "success")
    }

}