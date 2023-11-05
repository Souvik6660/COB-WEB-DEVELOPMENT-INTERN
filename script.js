const submitButton = document.getElementById('submit');
const questions = [
    'question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7'
]; // Add more question IDs here

submitButton.addEventListener('click', () => {
    let score = 0;
    questions.forEach((questionID) => {
        const question = document.getElementById(questionID);
        const options = document.getElementsByName(questionID.replace('question', 'q'));
        const feedback = document.getElementById(questionID.replace('question', 'feedback'));
        const selectedOption = Array.from(options).find((opt) => opt.checked);

        if (!selectedOption) {
            feedback.textContent = 'Please select an option.';
        } else if (selectedOption.value === "true") {
            feedback.textContent = 'Correct!';
            score++;
        } else {
            feedback.textContent = 'Incorrect';
        }
    });

    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Your Score: ${score} out of ${questions.length}`;
});