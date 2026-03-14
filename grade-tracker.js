/*the program takes student marks calculates 
the averahge and assigns a grade based on the average mark IT USES ARRAYS, OBJECTS AND DATA MANIPULATION*/

// aAdd student by name and grade
const students = [];
function addStudent(name, marks) {
    // marks should be an object like {math: 80, english: 90}
    const marksArray = Object.values(marks);
    const average = calculateAverage(marksArray);
    const grade = assignGrade(average);
    students.push({ name, marks, average, grade });
}
//get student information
function getStudentInfo(name) {
    const student = students.find(student => student.name === name);
    if (student) {
        return student;
    }
    return null;
}

// Function to calculate average marks
function calculateAverage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}   
// Function to assign grade based on average marks
function assignGrade(average) {
    switch (true) {
        case (average >= 90):
            return 'A';
        case (average >= 80):
            return 'B';
        case (average >= 70):
            return 'C';
        case (average >= 60):
            return 'D';
        default:
            return 'YOU MUST RETAKE THE COURSE';
    }
} 


//get class average for a subject
function getClassAverage(subject) {
    const subjectMarks = students.map(student => student.marks[subject]).filter(mark => mark !== undefined);
    return calculateAverage(subjectMarks);
}

//get students needing help (average below 60)
function getStudentsNeedingHelp() {
    return students.filter(student => student.average < 60);
}   /*get a letter grade for all studentsand generate a list
of students with their grades in a descending order*/
function getStudentsWithGrades() {
    return students.sort((a, b) => b.average - a.average).map(student => ({
        name: student.name,
        grade: student.grade
    }));
}
//generate  report cards for all students
function generateReportCards() {
    return students.map(student => ({
        name: student.name,
        marks: student.marks,
        average: student.average,
        grade: student.grade
    }));
}

//get average grades for all subjects
function getAllSubjectsAverages() {
    const subjects = new Set();
    students.forEach(student => Object.keys(student.marks).forEach(sub => subjects.add(sub)));
    const averages = {};
    subjects.forEach(sub => {
        const marks = students.map(s => s.marks[sub]).filter(m => m !== undefined);
        averages[sub] = calculateAverage(marks);
    });
    return averages;
}

// Test the code
addStudent('Kamau', { math: 85, english: 90, science: 88 });
addStudent('Maina', { math: 75, english: 80, science: 70 });
addStudent('OTieno', { math: 95, english: 85, science: 92 });

console.log('Students with grades:', getStudentsWithGrades());
console.log('All subjects averages:', getAllSubjectsAverages());
console.log('Report cards:', generateReportCards());
