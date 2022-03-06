document.addEventListener("DOMContentLoaded", function () {
  //Get the text field as I want to prepend button to it
  let textField = document.getElementById(`textB`);
  let alertButton = document.createElement(`button`);
  let textDiv = document.createElement(`div`);
  let button2 = document.getElementById(`button2`);
  buttonText = document.createTextNode("One");
  alertButton.appendChild(buttonText);

  //created a div called container in the .html file.
  let container = document.getElementById(`container`);
  let divThree = document.getElementById(`divColor`);
  //container.appendChild(`textDiv`);
  //textDiv.appendChild(textDiv);
  container.appendChild(alertButton);
  textDiv.appendChild(button2);
  container.appendChild(textDiv);

  //container.appendChild(button2);

  container.appendChild(textField);

  document.body.appendChild(divThree);

  alertButton.addEventListener(`click`, function () {
    alert("Hi Andrew!");
  });

  button2.addEventListener(`click`, function () {
    let mess = document.getElementById(`textB`).value;
    // document.getElementById(`textB`).value = test;
    console.log(mess);
    alert(mess);
  }); // end button1 addEventListner

  //changing color div

  let divColor = document.getElementById(`divColor`);
  divColor.addEventListener(`mouseOver`, function () {
    divColor.style.color = rainbow();
    //divColor.style.backgroundColor = rainbow();
  }); //end divColor.addEventListner
}); //end document.addEventListener

//Random RGB color generator function
function rainbow() {
  let min = 0;
  let max = 255;
  let colorRGB1 = Math.floor(Math.random() * (max - min) + min);
  let colorRGB2 = Math.floor(Math.random() * (max - min) + min);
  let colorRGB3 = Math.floor(Math.random() * (max - min) + min);
  let output =
    "rgb" + `(` + colorRGB1 + `,` + colorRGB2 + `,` + colorRGB3 + `)`;
  return output;
}

/*file:///Users/James/Documents/Source/Manipulating_Html/DOM/index.html */
