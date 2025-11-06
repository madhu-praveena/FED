function pressKey(val) {
    document.getElementById("display").value += val;
}

function calculate() {
    let exp = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(exp);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
