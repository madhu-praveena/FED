function createMatrices() {
    let r = document.getElementById("rows").value;
    let c = document.getElementById("cols").value;

    let A = "", B = "";
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            A += `<input id="A${i}${j}">`;
            B += `<input id="B${i}${j}">`;
        }
        A += "<br>";
        B += "<br>";
    }

    document.getElementById("matA").innerHTML = A;
    document.getElementById("matB").innerHTML = B;
}

function matrixAdd() {
    let r = document.getElementById("rows").value;
    let c = document.getElementById("cols").value;

    let res = "";

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let a = parseFloat(document.getElementById("A" + i + j).value);
            let b = parseFloat(document.getElementById("B" + i + j).value);
            res += `<input value="${a + b}" disabled>`;
        }
        res += "<br>";
    }

    document.getElementById("result").innerHTML = res;
}

function matrixMultiply() {
    let r = document.getElementById("rows").value;
    let c = document.getElementById("cols").value;

    let res = "";

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let sum = 0;
            for (let k = 0; k < c; k++) {
                let a = parseFloat(document.getElementById("A" + i + k).value);
                let b = parseFloat(document.getElementById("B" + k + j).value);
                sum += a * b;
            }
            res += `<input value="${sum}" disabled>`;
        }
        res += "<br>";
    }

    document.getElementById("result").innerHTML = res;
}
