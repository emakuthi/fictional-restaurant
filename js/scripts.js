// function subMenu(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// function testResults (form) {
//   var TestVar = form.inputbox.value;
//   alert ("You typed: " + TestVar);
// }

function readText (form) {
  TestVar =form.inputbox.value;
  alert ("tou have subscribed successfuly");
}
function writeText (form) {
  form.inputbox.value = "Have a nice day!"
}