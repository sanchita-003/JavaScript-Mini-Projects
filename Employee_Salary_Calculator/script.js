function calculateSalary() {

    let name = document.getElementById("empName").value.trim();
    let basicSalary = Number(document.getElementById("basicSalary").value);

    if (name == "" || isNaN(basicSalary) || basicSalary <= 0) {
        alert("Please enter valid employee details.");
        return;
    }

    let hra = basicSalary * 0.20;
    let da = basicSalary * 0.15;
    let pf = basicSalary * 0.12;

    let grossSalary = basicSalary + hra + da;
    let netSalary = grossSalary - pf;

    document.getElementById("result").innerHTML = `
    <tr>
        <td>${name}</td>
        <td>${basicSalary.toLocaleString("en-IN",{style:"currency",currency:"INR"})}</td>
        <td>${hra.toLocaleString("en-IN",{style:"currency",currency:"INR"})}</td>
        <td>${da.toLocaleString("en-IN",{style:"currency",currency:"INR"})}</td>
        <td>${pf.toLocaleString("en-IN",{style:"currency",currency:"INR"})}</td>
        <td>${grossSalary.toLocaleString("en-IN",{style:"currency",currency:"INR"})}</td>
        <td>${netSalary.toLocaleString("en-IN",{style:"currency",currency:"INR"})}</td>
    </tr>
    `;
}