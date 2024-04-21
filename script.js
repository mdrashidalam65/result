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
    { registrationNo: "21110111020", name: "Prince Kumar", cgpa: 6.11 },
    { registrationNo: "21110111021", name: "Honey Jay", cgpa: 7.12 },
    { registrationNo: "21110111022", name: "Ritu Rani", cgpa: 7.06 },
    { registrationNo: "21110111023", name: "Raushan Kumar", cgpa: 5.14 },
    { registrationNo: "21110111024", name: "Mehwish Jawed", cgpa: 7.62 },
    { registrationNo: "21110111025", name: "Dharmendra Paswan", cgpa: 4.79 },
    { registrationNo: "21110111026", name: "Raj Kumar", cgpa: 7.67 },
    { registrationNo: "21110111027", name: "Aman Raj", cgpa: 6.52 },
    { registrationNo: "21110111028", name: "Santosh Sharma", cgpa: 5.59 },
    { registrationNo: "21110111029", name: "Pankaj Kumar", cgpa: 8.37 },
    { registrationNo: "21110111030", name: "Saurabh Kumar", cgpa: 8.03 },
    { registrationNo: "21110111046", name: "Aman", cgpa: 7.31 },
    { registrationNo: "21110111053", name: "Gaurav Kumar Thakur", cgpa: 8.36 },
    { registrationNo: "21110111054", name: "Shivani Priya", cgpa: 8.09 },
    { registrationNo: "21110111055", name: "Khushi Kumari", cgpa: 8.41 },
    { registrationNo: "21110111056", name: "Khushi Kumari", cgpa: 8.04 },
    { registrationNo: "21110111057", name: "Md Rashid Alam", cgpa: 7.73 },
    { registrationNo: "21110111058", name: "Md Adnanul Haque", cgpa: 7.39 },
    { registrationNo: "21110111059", name: "Riya Kumari", cgpa: 7.02 },
    { registrationNo: "21110111060", name: "Kajal Kumari", cgpa: 6.88 },
    { registrationNo: "21110111061", name: "Mausam Kumari", cgpa: 7.26 },
    { registrationNo: "21110111062", name: "Abhishek Kumar", cgpa: 6.95 },
    { registrationNo: "22110111901", name: "Puja Kumari", cgpa: 7.63 },
    { registrationNo: "22110111902", name: "Archna Kumari", cgpa: 8.53 },
    { registrationNo: "22110111903", name: "Shashikant Kumar", cgpa: 7.14 },
    { registrationNo: "22110111904", name: "Rahul Kumar", cgpa: 6.69 },
    { registrationNo: "22110111905", name: "Harsh Raj", cgpa: 8.79 },
    { registrationNo: "22110111906", name: "Amarnath Kumar Mahto", cgpa: 5.13 },
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
