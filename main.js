var pageCounter = 1;
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");

btn.addEventListener("click", function() {
  var OurRequest = new XMLHttpRequest();
  OurRequest.open(
    "GET",
    "https://learnwebcode.github.io/json-example/animals-" +
      pageCounter +
      ".json"
  );

  OurRequest.onload = function() {
    var ourData = JSON.parse(OurRequest.responseText);
    renderHTML(ourData);
  };
//   BAD INTRENET
  OurRequest.onerror = function() {
      console.log("Server not responding")
  }
  OurRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString +=
      "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

      for (j = 0; j < data[i].foods.likes.length; j++) {
        if (j == 0) {
          htmlString += data[i].foods.likes[j];
        } else {
          htmlString += " and " + data[i].foods.likes[j];
        }
      }
htmlString += " and dislikes ";
    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }
  }
  

  htmlString += ".</p>";
  animalContainer.insertAdjacentHTML("beforeend", htmlString);
}
