function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

function studentGradeGenerator() {
    const input = prompt('Enter student marks (0-100):');
    const mark = parseFloat(input);

    if (isNaN(mark) || mark < 0 || mark > 100) {
        console.log('Invalid input. Please enter a number between 0 and 100.');
    } else {
        const grade = calculateGrade(mark);
        console.log(`Grade: ${grade}`);
    }
}

// Uncomment the line below to run the function
// studentGradeGenerator();
