//create a button
//redy function to listen for the DOM to be loaded
$(document).ready(function () {
  //Add Alert button to container.
  $("#container").prepend(
    $(document.createElement("button")).prop({
      type: "button",
      innerHTML: "One",
      class: "btn",
      id: "one",
    })
  );
  $(`#one`).on(`click`, function () {
    alert(`Hi Andrew`);
  });

  //Get text when button2 is clicked.
  $(`#button2`).on(`click`, function () {
    let messageText = document.getElementById(`textField`).value;
    alert(messageText);
  });
  //Create a div that changes color when hoovered over and return to original when not
  $("#container").append(
    $(document.createElement("div")).prop({
      innerHTML: "Three",
      id: "div3",
    })
  );
  $(`#div3`).on(`mouseover`, function () {
    $(this).css(`background-color`, `blue`);
  }); //end div3 mouseover

  $(`#div3`).on(`mouseout`, function () {
    $(this).css(`background-color`, `#b1821d`);
  }); //end div3 mouseout

  //Create a paragraph which text changes color when clicked on
  $("#container").append(
    $(document.createElement("p")).prop({
      display: "flex",
      textAlign: "center",
      innerHTML: "Changing color text",
      id: "pColor",
      justifyContent: "center",
      textAlign: "center",
    })
  ); //End container append
  $(`#pColor`).on(`click`, function () {
    $(this).css(`color`, rainbow());
  }); //end pColor click

  //create another  div and add a button when clicked add a span that contains your name

  $("#container").append(
    $(document.createElement("div")).prop({
      textAlign: "center",
      innerHTML: "",
      id: "spanDiv",
    })
  ); //end span div

  $("#spanDiv").append(
    $(document.createElement("button")).prop({
      display: "flex",
      textAlign: "center",
      innerHTML: "Span",
      id: "spanBtn",
    })
  ); //end span btn

  $("#spanBtn").on(`click`, function () {
    $(`#spanDiv`).text(`James`);
  }); //

  $(`#button5`).on(`click`, function () {
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
  }); //end button5 click
}); // end ready function

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
