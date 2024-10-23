var input = document.getElementById("inputField");


function getValue(number) {
    input.value += number;
}

function clearAll() {
    input.value = "";
}

function equal() {
    input.value = eval(input.value);
}