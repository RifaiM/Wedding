// Onclick show div - Open Invitation

function myFunction() {
    document.getElementById("main").style.display = "block";
    document.getElementById("main").scrollIntoView({ behavior: "smooth" });
    document.activeElement.blur(); //optional if you want to blur active element.
}


// Get URL

const myUrlWithParams = new URL("https://rifaim.github.io/Wedding/?to/");

myUrlWithParams.searchParams.append("Mochammad Rifai", "Partner");
myUrlWithParams.searchParams.append("Sadam", "Partner");

// Timer

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2023 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("detail").innerHTML = days + "&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;" + hours + "&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;"
  + minutes + "&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;" + seconds + "";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("detail").innerHTML = "EXPIRED";
  }
}, 1000);