emailjs.init({
    publicKey: "FIU2YRoIr3IfMY-yO",
});

function sendMail(){
    
    
        name = document.getElementById("name").value,
        number = document.getElementById("number").value,
        email = document.getElementById("email").value,
        message = document.getElementById("message").value
    

    // emailjs.send("service_yuyzf5c","template_pugx095",from_name("name"),from_number("number"),from_email("email"),from_message("message")).then(alert("Email Sent!!"))
    emailjs.send("service_h0fxnmi","template_i67bhd6",{
        from_name: name,
        from_email: email,
        from_phone: number,
        message: message,
        }).then(alert("sent !!"));
}

let form = document.getElementById('Contactform')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendMail();
})

// emailjs.send("service_yuyzf5c","template_pugx095",{
//     from_name: "prasad",
//     from_email: "prasadkalvikatti@gmail.com",
//     from_phone: "1234567890",
//     message: "hello",
//     });