// Sort students based on CGPA (descending order)
students.sort((a, b) => b.cgpa - a.cgpa);

// Example data (replace with your own)
const students = [
    { registrationNo: "21110111057", name: "Md Rashid Alam", cgpa: 7.72 },
    { registrationNo: "21110111018", name: "Asmit Kumar", cgpa: 8.20 },
    { registrationNo: "21110111030", name: "Saurabh Kumar", cgpa: 8.03 },
    { registrationNo: "21110111029", name: "Pankaj Kumar", cgpa: 8.40 },
    { registrationNo: "21110111006", name: "Amit Ranjan", cgpa: 7.40 },
    { registrationNo: "21110111046", name: "Aman ", cgpa: 7.50 },
    // Add more students
];

// Assign ranks based on sorted order
students.forEach((student, index) => {
    student.rank = index + 1;
});

function lookupRank() {
    const registrationNo = document.getElementById("registrationNo").value;
    const student = students.find(s => s.registrationNo === registrationNo);
    if (student) {
        document.getElementById("result").innerHTML = `
            <p>Name: ${student.name}</p>
            <p>Rank: ${student.rank}</p>
            <p>CGPA: ${student.cgpa}</p>
        `;
    } else {
        document.getElementById("result").innerText = "Student not found";
    }
}

// Listen for the Enter key press
document.getElementById("registrationNo").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        lookupRank();
    }
});
