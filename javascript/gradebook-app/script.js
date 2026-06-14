function getAverage(testScores) {
    // Create a variable to add to in order to calculate average.
    let totalScore = new Number();

    // Iterate through test scores, adding each to the total.
    for (let score of testScores) {
        totalScore += score;
    }

    // Calculate the average score.
    let averageScore = totalScore / testScores.length;

    // Return the average score.
    return averageScore;
}

function getGrade(score) {
    // Create a variable to modify and return.
    let result = new String();

    // Use switch case to match the score to the correct letter grade.
    switch (true) {
        case (score == 100):
            result = "A+";
            break;
        case (score >= 90):
            result = "A";
            break;
        case (score >= 80):
            result = "B";
            break;
        case (score >= 70):
            result = "C";
            break;
        case (score >= 60):
            result = "D";
            break;
        default:
            result = "F";
    }

    // Return the letter graded result.
    return result;
}

function hasPassingGrade(score) {
    // Check if its not F.
    return !(getGrade(score) == "F");
}

function studentMsg(testScores, studentScore) {
    // Call previous functions to set variables.
    let classAverage = getAverage(testScores);
    let studentGrade = getGrade(studentScore);

    // Use template literal to form message.
    let message = `Class average: ${classAverage}. Your grade: ${studentGrade}. `;

    // Add passing or failing message appropriately.
    if (hasPassingGrade(studentScore)) {
        message += "You passed the course.";
    } else {
        message += "You failed the course.";
    }

    // Return the message.
    return message;
}