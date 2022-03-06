document.addEventListener("DOMContentLoaded", function () {
  let alertDiv = document.createElement(`div`);
  //Connect app.js to existing dom element textfield
  let textField = document.getElementById(`textField`);
  let alertButton = document.createElement(`button`);
  let textDiv = document.createElement(`div`);
  let button2 = document.getElementById(`button2`);
  let buttonText = document.createTextNode("One");
  alertButton.appendChild(buttonText);

  //created a div called container in the .html file.
  let container = document.getElementById(`container`);
  let divThree = document.getElementById(`divColor`);
  alertDiv.appendChild(alertButton);
  container.appendChild(alertDiv);

  //Group button text box together - it looks neater.
  textDiv.appendChild(button2);
  textDiv.appendChild(textField);
  container.appendChild(textDiv);

  //container.appendChild(button2);

  container.appendChild(textField);
  //document.body.appendChild(divThree);
  container.appendChild(divThree);
  alertButton.addEventListener(`click`, function () {
    alert("Hi Andrew!");
  });

  //Button to show text in an alert window.
  button2.addEventListener(`click`, function () {
    let mess = document.getElementById(`textField`).value;
    alert(mess);
  }); // end button1 addEventListner

  let divColor = document.getElementById(`divColor`);
  divColor.addEventListener(`mouseover`, function () {
    divColor.style.backgroundColor = "#ffff00"; // yellow color
  }); //end divColor.addEventListner
  divColor.addEventListener(`mouseout`, function () {
    divColor.style.backgroundColor = "#85a144"; //green color
  }); //end divColor.addEventListner

  let paragraph = document.createElement(`p`);
  //create text for the paragraph
  let pText = document.createTextNode(`Change Color Text`);
  paragraph.appendChild(pText);
  divColor.appendChild(paragraph);

  //Paragraph gets a different color each time clicked on
  paragraph.addEventListener(`click`, function () {
    paragraph.style.color = rainbow();
  });

  //Add a button and an empty div
  let div4 = document.createElement(`div`);
  div4.classList.add(`div4`);
  let button4 = document.createElement(`button`);
  let button4text = document.createTextNode(`Add Span`);
  button4.appendChild(button4text);
  div4.appendChild(button4);
  container.appendChild(div4);
  button4.id = `button4`;
  //on click of button - adds my name to span and displays.
  button4.addEventListener(`click`, function () {
    let spanName = document.createElement(`SPAN`);
    let name = document.createTextNode(`James`);
    spanName.appendChild(name);
    div4.appendChild(spanName);
    spanName.id = `spanName`;
  }); // end button4.addEventListener

  let button5 = document.getElementById(`button5`);
  button5.addEventListener(`click`, function () {
    let friendsArray = [
      `Jimmy`,
      `Kim`,
      `Mike`,
      `Chuck`,
      `Howard`,
      `Nacho`,
      `Lalo`,
      `Hector`,
      `Victor`,
      `Huell`,
    ];
    for (let i = 0; i < friendsArray.length; i++) {
      console.log(friendsArray[i]);
      let list = document.createElement(`li`);
      let uL = document.getElementById(`friendUl`);
      let friend = document.createTextNode(friendsArray[i]);
      list.appendChild(friend);
      uL.appendChild(list);
    }
  }); //end button5.addEventListner
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
