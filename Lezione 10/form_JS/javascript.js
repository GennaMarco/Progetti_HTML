var form = document.getElementById("form");

form.style.width = "600px";
form.style.height = "200px";
form.style.backgroundColor = "grey";
form.style.padding = "20px";

form.addEventListener("submit", function(event){
  event.preventDefault();
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; ++i){
    if (inputs[i].value == "") {
        console.log("non puoi lasciare vuoto il campo " + inputs[i].name);
      }else{
        sendToServer(inputs[i].value)
    }
  }
});

