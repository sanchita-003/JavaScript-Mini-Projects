function calculateGrade() {

    let studentName = document.getElementById("name").value.trim();

    let marks = [
        Number(document.getElementById("sub1").value),
        Number(document.getElementById("sub2").value),
        Number(document.getElementById("sub3").value),
        Number(document.getElementById("sub4").value),
        Number(document.getElementById("sub5").value)
    ];

    if (studentName === "") {
        alert("Please enter student name");
        return;
    }

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 0 || marks[i] > 100 || isNaN(marks[i])) {
            alert("Marks should be between 0 and 100");
            return;
        }
    }

    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    let percentage = total / 5;

    let grade = "";

    if (percentage >= 90) {
        grade = "A";
    }
    else if (percentage >= 75) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 40) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        `<tr>
            <td>${studentName}</td>
            <td>${total}</td>
            <td>${percentage.toFixed(2)}%</td>
            <td>${grade}</td>
        </tr>`;
}