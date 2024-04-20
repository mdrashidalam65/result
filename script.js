// Example data (replace with your own)
const students = [
    { registrationNo: "21110111057", name: "Md Rashid Alam", rank: 6 },
    { registrationNo: "21110111018", name: "Asmit Kumar", rank: 2 },
    { registrationNo: "21110111029", name: "Pankaj Kumar", rank: 1 },
    { registrationNo: "21110111030", name: "Saurabh Kumar", rank: 3 },
    { registrationNo: "21110111006", name: "Amit Ranjan", rank: 6 },
    { registrationNo: "211101110468", name: "Aman", rank: 5 },
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
// Listen for the Enter key press
document.getElementById("registrationNo").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        lookupRank();
    }
});
