// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
document.addEventListener('DOMContentLoaded', function(){
    var submit_button = document.getElementById('submit-button');
    submit_button.onclick = function(event){
        event.preventDefault();
        var contacted_Page = document.getElementById('contact-page');
        var thank_You_for_your_Message = document.createElement('p');
        thank_You_for_your_Message.textContent = "Thank you for your message";
        thank_You_for_your_Message.style.fontSize = "24px";
        contacted_Page.innerHTML = ''; 
        contacted_Page.appendChild(thank_You_for_your_Message);
    };
});
