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

const countryCodes = [
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
    { name: "India", code: "+91" },
    { name: "Germany", code: "+49" },
    { name: "France", code: "+33" }
];

const select = document.createElement("select");
select.style.padding = "5px";
select.style.fontSize = "16px";

countryCodes.forEach(country => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = `${country.name} (${country.code})`;
    select.appendChild(option);
});

const input = document.getElementById("number");
if (input) {
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "5px";

    const countryCodeDisplay = document.createElement("span");
    countryCodeDisplay.textContent = select.value;
    countryCodeDisplay.style.fontSize = "16px";

    select.addEventListener("change", () => {
        countryCodeDisplay.textContent = select.value;
    });

    wrapper.appendChild(select);
    wrapper.appendChild(countryCodeDisplay);
    wrapper.appendChild(input);

    input.parentNode.replaceChild(wrapper, input);
} else {
    console.error("Input field with ID 'number' not found.");
}




