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
    { registrationNo: "21110111010", name: "Ganesh Kumar", cgpa: 6.68 },
    { registrationNo: "21110111011", name: "Muskan Kumari", cgpa: 7.14  },
    { registrationNo: "21110111012", name: "Megha Kumari", cgpa: 5.72 },
    { registrationNo: "21110111013", name: "Kusum Kumari", cgpa: 8.03 },
    { registrationNo: "21110111014", name: "Nidhi Kumari", cgpa: 8.04 },
    { registrationNo: "21110111015", name: "Akansha Kumari", cgpa: 7.81  },
    { registrationNo: "21110111016", name: "Abhishek Kumar", cgpa: 5.88  },
    { registrationNo: "21110111017", name: "Rajnish Kumar", cgpa: 7.36 },
    { registrationNo: "21110111018", name: "Asmit Kumar", cgpa: 8.09 },
    { registrationNo: "21110111019", name: "Amrit", cgpa: 6.81 },
    { registrationNo: "21110111020", name: "Prince Kumar", cgpa: 6.11}, 
    { registrationNo: "21110111029", name: "Pankaj Kumar", cgpa: 8.37 },
    { registrationNo: "21110111030", name: "Saurabh Kumar", cgpa: 8.03 },
    { registrationNo: "21110111046", name: "Aman", cgpa: 7.31 },
    { registrationNo: "21110111057", name: "Md Rashid Alam", cgpa: 7.73 },
    
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
