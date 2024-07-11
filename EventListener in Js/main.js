// eventlsitener = Listen for specific events to create interactive
//                 web pages events: Click, Mouseover
//                 mouseout .addEventListener (event, callback)


const myBox = document.getElementById("myBox");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "red";
     event.target.textcontent = "OUCH!🤕";
});

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "Green";
    event.target.textcontent = "Don't Do It 😮";
});

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "aqua";
    event.target.textcontent = "Click Me 😊";
});