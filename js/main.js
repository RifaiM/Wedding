// Onclick show div - Open Invitation

function myFunction() {
    document.getElementById("panel").style.display = "block";
    document.getElementById("panel").scrollIntoView({ behavior: "smooth" });
    document.activeElement.blur(); //optional if you want to blur active element.
}


// Get URL

const myUrlWithParams = new URL("https://rifaim.github.io/Wedding/?to/");

myUrlWithParams.searchParams.append("Mochammad Rifai", "Partner");
myUrlWithParams.searchParams.append("Sadam", "Partner");