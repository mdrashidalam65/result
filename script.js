// Example data (replace with your own)
const students = [
    { registrationNo: "001", name: "John Doe", cgpa: 3.8 },
    { registrationNo: "002", name: "Jane Doe", cgpa: 3.6 },
    // Add more students
];

// Sort students based on CGPA (descending order)
students.sort((a, b) => b.cgpa - a.cgpa);

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
