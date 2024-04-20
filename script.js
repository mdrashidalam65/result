// app.js

// Function to fetch and display student data
async function fetchAndDisplayData() {
    try {
        // Fetch data from Excel
        const data = await fetchDataFromExcel('data/students.xlsx');

        // Sort data by registration number
        data.sort((a, b) => a.registrationNo - b.registrationNo);

        // Display data
        displayStudentData(data);
    } catch (error) {
        console.error('Error fetching or displaying data:', error);
    }
}

// Function to fetch data from Excel
function fetchDataFromExcel(filePath) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            // Transform Excel data to match our expected format
            const studentData = jsonData.map(row => ({
                registrationNo: row['Registration No'], // Assuming the column header in Excel is 'Registration No'
                name: row['Name'] // Assuming the column header in Excel is 'Name'
            }));

            resolve(studentData);
        };

        reader.onerror = function (error) {
            reject(error);
        };

        // Read Excel file
        fetch(filePath)
            .then(response => response.arrayBuffer())
            .then(buffer => reader.readAsArrayBuffer(new Blob([buffer])));
    });
}

// Function to display student data
function displayStudentData(data) {
    const studentRankingsSection = document.getElementById('student-rankings');

    // Clear previous content
    studentRankingsSection.innerHTML = '';

    // Create a list to display student rankings
    const ul = document.createElement('ul');

    // Loop through student data and create list items
    data.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${student.name} (Reg. No: ${student.registrationNo})`;
        ul.appendChild(li);
    });

    // Append the list to the section
    studentRankingsSection.appendChild(ul);
}

// Fetch and display data when the page loads
document.addEventListener('DOMContentLoaded', fetchAndDisplayData);
