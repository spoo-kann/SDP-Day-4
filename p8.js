class Student {
    constructor(name, age, studentId) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
        this.academicDetails = {};
        this.administrativeDetails = {};
    }

    updatePersonalDetails(name, age) {
        if (name) this.name = name;
        if (age) this.age = age;
    }

    updateAcademicDetails(semester, courses) {
        this.academicDetails[semester] = courses;
    }

    updateAdministrativeDetails(detailType, detailValue) {
        this.administrativeDetails[detailType] = detailValue;
    }

    deleteProfile() {
        this.name = null;
        this.age = null;
        this.studentId = null;
        this.academicDetails = {};
        this.administrativeDetails = {};
        alert(`Profile for student ID ${this.studentId} has been deleted.`);
    }

    displayInfo() {
        return `
            Name: ${this.name || 'N/A'}
            Age: ${this.age || 'N/A'}
            Student ID: ${this.studentId || 'N/A'}
            Academic Details: ${JSON.stringify(this.academicDetails, null, 2) || 'N/A'}
            Administrative Details: ${JSON.stringify(this.administrativeDetails, null, 2) || 'N/A'}
        `;
    }
}

let student = null;

function addPersonalDetails() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const studentId = document.getElementById('studentId').value;

    if (!student) {
        student = new Student(name, age, studentId);
    } else {
        student.updatePersonalDetails(name, age);
    }

    alert("Personal details added/updated successfully!");
}

function addAcademicDetails() {
    const semester = document.getElementById('semester').value;
    const courses = document.getElementById('courses').value.split(',').map(course => course.trim());

    if (student) {
        student.updateAcademicDetails(semester, courses);
        alert("Academic details added successfully!");
    } else {
        alert("Please add personal details first.");
    }
}

function addAdministrativeDetails() {
    const adminType = document.getElementById('adminType').value;
    const adminValue = document.getElementById('adminValue').value;

    if (student) {
        student.updateAdministrativeDetails(adminType, adminValue);
        alert("Administrative details added successfully!");
    } else {
        alert("Please add personal details first.");
    }
}

function deleteProfile() {
    if (student) {
        student.deleteProfile();
        student = null; // Clear the student object
        alert("Profile deleted successfully!");
    } else {
        alert("No profile to delete.");
    }
}

function displayInfo() {
    const info = document.getElementById('studentInfo');
    if (student) {
        info.textContent = student.displayInfo();
    } else {
        info.textContent = "No student information available.";
    }
}