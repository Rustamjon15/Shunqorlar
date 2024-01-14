var inputName = document.getElementById('inputName');
var inputAge = document.getElementById('inputAge');
var inputNumber = document.getElementById('inputNumber');

var users = [];
function submit() {
    if (inputName.value.trim() != "" &&
        inputAge.value.trim() != "" &&
        inputNumber.value.trim() != "") {
        inputName.classList.add("valid");
        inputAge.classList.add("valid");
        inputNumber.classList.add("valid");
        inputName.value = "";
        inputAge.value = "";
        inputNumber.value = "";
        add();
    } else {
        if (inputName.value.trim() == "") {
            inputName.classList.add("err");
        } else {
            inputName.classList.remove("err");
            inputName.classList.add("valid");
        }
        if (inputAge.value.trim() == "") {
            inputAge.classList.add("err");
        } else {
            inputAge.classList.remove("err");
            inputAge.classList.add("valid");
        }
        if (inputNumber.value.trim() == "") {
            inputNumber.classList.add("err");
        } else {
            inputNumber.classList.remove("err");
            inputNumber.classList.add("valid");
        }
    }
}

function add() {
    users.push({
        name: inputName.value,
        age: inputAge.value,
        number: inputNumber.value
    })
    console.log(users);
}