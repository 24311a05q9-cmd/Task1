function scrollToProjects(){
document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});
}

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("msg").innerHTML=
"Thank you! Your message has been received.";

this.reset();

});