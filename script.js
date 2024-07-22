// Example data (replace with your own)
const students = [
    { registrationNo: "21110111001", name: "Aman Kumar", cgpa: 6.95 },
    { registrationNo: "21110111002", name: "Sudhir Kumar", cgpa: 5.78 },
    { registrationNo: "21110111003", name: "Kundan Kumar", cgpa: 7.86 },
    { registrationNo: "21110111004", name: "Ritik Raj Ojha", cgpa: 6.93 },
    { registrationNo: "21110111005", name: "Shakti Gupta", cgpa: 6.62 },
    { registrationNo: "21110111006", name: "Amit Ranjan", cgpa: 6.48 },
    { registrationNo: "21110111007", name: "Shazia Ali", cgpa: 7.86 },
    { registrationNo: "21110111008", name: "Suraj Kumar", cgpa: 6.75 },
    { registrationNo: "21110111009", name: "Prabhakar Kumar", cgpa: 6.13 },
    { registrationNo: "21110111010", name: "Ganesh Kumar", cgpa: 6.71 },
    { registrationNo: "21110111011", name: "Muskan Kumari", cgpa: 7.27  },
    { registrationNo: "21110111012", name: "Megha Kumari", cgpa: 6.05 },
    { registrationNo: "21110111013", name: "Kusum Kumari", cgpa: 8.10 },
    { registrationNo: "21110111014", name: "Nidhi Kumari", cgpa: 7.96 },
    { registrationNo: "21110111015", name: "Akanksha Kumari", cgpa: 7.92  },
    { registrationNo: "21110111016", name: "Abhishek Kumar", cgpa: 6.08  },
    { registrationNo: "21110111017", name: "Rajnish Kumar", cgpa: 7.32 },
    { registrationNo: "21110111018", name: "Asmit Kumar", cgpa: 8.04 },
    { registrationNo: "21110111019", name: "Amrit", cgpa: 6.86 },
    { registrationNo: "21110111020", name: "Prince Kumar", cgpa: 6.18 },
    { registrationNo: "21110111021", name: "Honey Jay", cgpa: 7.23 },
    { registrationNo: "21110111022", name: "Ritu Rani", cgpa: 7.10 },
    { registrationNo: "21110111023", name: "Raushan Kumar", cgpa: 5.44 },
    { registrationNo: "21110111024", name: "Mehwish Jawed", cgpa: 7.71 },
    { registrationNo: "21110111026", name: "Raj Kumar", cgpa: 7.62 },
    { registrationNo: "21110111027", name: "Aman Raj", cgpa: 6.30 },
    { registrationNo: "21110111028", name: "Santosh Sharma", cgpa: 5.75 },
    { registrationNo: "21110111029", name: "Pankaj Kumar", cgpa: 8.42 },
    { registrationNo: "21110111030", name: "Saurabh Kumar", cgpa: 8.12 },
    { registrationNo: "21110111031", name: "Ashish Ranjan", cgpa: 7.78 },
    { registrationNo: "21110111033", name: "Swaraj", cgpa: 7.05 },
    { registrationNo: "21110111034", name: "Gautam Kumar", cgpa: 6.47 },
    { registrationNo: "21110111036", name: "Md Amjad", cgpa: 7.91 },
    { registrationNo: "21110111037", name: "Sujit Kumar", cgpa: 7.06 },
    { registrationNo: "21110111038", name: "Preity Kumari", cgpa: 7.13 },
    { registrationNo: "21110111039", name: " Sumit Kumar", cgpa: 6.46 },
    { registrationNo: "21110111040", name: "Rohan Singh", cgpa: 7.17  },
    { registrationNo: "21110111041", name: "Amar Kant Sharma", cgpa: 7.39  },
    { registrationNo: "21110111042", name: "Srijan", cgpa: 8.15 },
    { registrationNo: "21110111043", name: "Abhishek Kumar Sah", cgpa: 6.84  },
    { registrationNo: "21110111044", name: "Suraj Kumar", cgpa: 7.06  },
    { registrationNo: "21110111045", name: "Ved Prakash", cgpa: 5.74  },
    { registrationNo: "21110111046", name: "Aman", cgpa: 7.28 },
    { registrationNo: "21110111047", name: "Devraj Chakraborty", cgpa: 8.32 },
    { registrationNo: "21110111048", name: "Ayushi Anand", cgpa: 7.92  },
    { registrationNo: "21110111049", name: "Pallavi Raj", cgpa: 7.79 },
    { registrationNo: "21110111050", name: "Avinash Kumar Jha", cgpa: 7.50 },
    { registrationNo: "21110111051", name: "Avinash Ram", cgpa: 6.45 },
    { registrationNo: "21110111052", name: "Kishan Kumar", cgpa: 5.48 },
    { registrationNo: "21110111053", name: "Gaurav Kumar Thakur", cgpa: 8.54 },
    { registrationNo: "21110111054", name: "Shivani Priya", cgpa: 8.15 },
    { registrationNo: "21110111055", name: "Khushi Kumari", cgpa: 8.16 },
    { registrationNo: "21110111056", name: "Khushi Kumari", cgpa: 8.05 },
    { registrationNo: "21110111057", name: "Md Rashid Alam", cgpa: 7.86 },
    { registrationNo: "21110111058", name: "Md Adnanul Haque", cgpa: 7.43 },
    { registrationNo: "21110111059", name: "Riya Kumari", cgpa: 7.18 },
    { registrationNo: "21110111060", name: "Kajal Kumari", cgpa: 6.78 },
    { registrationNo: "21110111061", name: "Mausam Kumari", cgpa: 7.55 },
    { registrationNo: "21110111062", name: "Abhishek Kumar", cgpa: 6.87 },
    { registrationNo: "22110111901", name: "Puja Kumari", cgpa: 8.20 },
    { registrationNo: "22110111902", name: "Archna Kumari", cgpa: 8.74 },
    { registrationNo: "22110111903", name: "Shashikant Kumar", cgpa: 7.91 },
    { registrationNo: "22110111904", name: "Rahul Kumar", cgpa: 7.31 },
    { registrationNo: "22110111905", name: "Harsh Raj", cgpa: 9.04 },
    { registrationNo: "22110111906", name: "Amarnath Kumar Mahto", cgpa: 6.61 },
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
            <p>Rank out of 65 Students: ${student.rank}</p>
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
