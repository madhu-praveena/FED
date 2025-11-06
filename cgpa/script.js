let count = 0;

function addCourse() {
    count++;
    let div = document.createElement("div");

    div.innerHTML = `
        <input type="number" id="gp${count}" placeholder="Grade Point (0-10)" step="0.1">
        <input type="number" id="cr${count}" placeholder="Credits">
    `;

    document.getElementById("courses").appendChild(div);
}

function calculateCGPA() {
    let totalGP = 0, totalCredits = 0;

    for (let i = 1; i <= count; i++) {
        let gp = parseFloat(document.getElementById("gp" + i).value);
        let cr = parseFloat(document.getElementById("cr" + i).value);

        if (!isNaN(gp) && !isNaN(cr)) {
            totalGP += gp * cr;
            totalCredits += cr;
        }
    }

    let cgpa = totalGP / totalCredits;
    document.getElementById("result").innerText = "Your CGPA is: " + cgpa.toFixed(2);
}
