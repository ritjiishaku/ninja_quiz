const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result'); // Select the result element

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // Check Answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // Show result on the page
    scrollTo(0, 0); // Scroll to the top of the page
    result.classList.remove('d-none'); // Make result visible

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10); // Update every 10ms
});


