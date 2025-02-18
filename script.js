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
        });
}

let form = document.getElementById('Contactform')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendMail();
})


function thankyou() {
    window.location.href="thankyou.html"
}

// let nav = document.getElementById('nav')
// console.log(nav);
// window.addEventListener('scroll',()=>{
//     if(window.scrollY > 100){
//         console.log("hello");
//         nav.style.position - "fixed"   
//     }
    
// })

window.onscroll = function() {myFunction()};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
