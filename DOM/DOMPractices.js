const inputText = document.getElementById("inp");
const display = document.getElementById("display");

display.innerHTML = inputText.value;


const frm = document.forms["frm"];
let text = " ";
for (let i = 0; i < frm.length; i++) {
    text += frm.elements[i].value + "<br>";
}
document.getElementById("info").innerHTML = text;