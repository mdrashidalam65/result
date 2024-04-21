// Example data (replace with your own)
const students = [
    { registrationNo: "21110111001", name: "Aman Kumar", cgpa: 6.95 },
    { registrationNo: "21110111002", name: "Sudhir Kumar", cgpa: 5.56 },
    { registrationNo: "21110111003", name: "Kundan Kumar", cgpa: 7.79 },
    { registrationNo: "21110111004", name: "Ritik Raj Ojha", cgpa: 6.82 },
    { registrationNo: "21110111005", name: "Shakti Gupta", cgpa: 6.37 },
    { registrationNo: "21110111006", name: "Amit Ranjan", cgpa: 6.38 },
    { registrationNo: "21110111007", name: "Shazia Ali", cgpa: 7.82 },
    { registrationNo: "21110111008", name: "Suraj Kumar", cgpa: 6.62 },
    { registrationNo: "21110111009", name: "Prabhakar Kumar", cgpa: 6.01 },
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
