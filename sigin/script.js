var inputName = document.getElementById('inputName');
var inputAge = document.getElementById('inputAge');
var inputNumber = document.getElementById('inputNumber');

var users = [];
function submit() {
    if (inputName.value.trim() != "" &&
        inputAge.value.trim() != "" &&
        inputNumber.value.trim() != "") {
        add();
        inputName.style.borderBottom = "1px solid #0f0";
        inputAge.style.borderBottom = "1px solid #0f0";
        inputNumber.style.borderBottom = "1px solid #0f0";
        inputName.value = "";
        inputAge.value = "";
        inputNumber.value = "";
    } else {
        if (inputName.value.trim() == "") {
            inputName.style.borderBottom = "1px solid red";
        }
        if (inputAge.value.trim() == "") {
            inputAge.style.borderBottom = "1px solid red";
        }
        if (inputNumber.value.trim() == "") {
            inputNumber.style.borderBottom = "1px solid red";
        }
    }
}

function add() {
    users.push({
        name: inputName.value,
        age: inputAge.value,
        number: inputNumber.value
    })
    show()
}