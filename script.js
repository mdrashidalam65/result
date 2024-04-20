// Example data (replace with your own)
const students = [
    { registrationNo: "21110111057", name: "Md Rashid Alam", rank: 6 },
    { registrationNo: "21110111018", name: "Asmit Kumar", rank: 2 },
    { registrationNo: "21110111018", name: "Pankaj Kumar", rank: 1 },
    { registrationNo: "21110111018", name: "Saurabh Kumar", rank: 3 },
    { registrationNo: "21110111018", name: "Amit Kumar", rank: 4 },
    { registrationNo: "21110111018", name: "Aman", rank: 5 },
    // Add more students
];

function lookupRank() {
    const registrationNo = document.getElementById("registrationNo").value;
    const student = students.find(s => s.registrationNo === registrationNo);
    if (student) {
        document.getElementById("result").innerText = `Name: ${student.name}, Rank: ${student.rank}`;
    } else {
        document.getElementById("result").innerText = "Student not found";
    }
}
