// Form Validation

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let message=document.getElementById("message").value.trim();

let msg=document.getElementById("msg");

let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name=="" || email=="" || message==""){
msg.style.color="red";
msg.innerHTML="Please fill all fields.";
return;
}

if(!pattern.test(email)){
msg.style.color="red";
msg.innerHTML="Invalid Email.";
return;
}

msg.style.color="green";
msg.innerHTML="Form Submitted Successfully!";

this.reset();

});


// To Do List

function addTask(){

let input=document.getElementById("taskInput");

let task=input.value.trim();

if(task===""){
alert("Enter a task");
return;
}

let li=document.createElement("li");

li.innerHTML=task+" <button class='delete'>Delete</button>";

li.querySelector("button").onclick=function(){
li.remove();
};

document.getElementById("taskList").appendChild(li);

input.value="";

}