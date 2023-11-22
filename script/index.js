document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
    const minutesInput = document.getElementById('minutes');
    const resultParagraph = document.getElementById('result');

    function convertMinutesToSeconds() {
        const minutes = parseFloat(minutesInput.value);

        if (!isNaN(minutes)) {
            const seconds = minutes * 60;
            resultParagraph.textContent = `${minutes} minutes is  ${seconds} seconds.`;
        } else {
            resultParagraph.textContent = 'Please enter a valid number of minutes.';
        }
    }

    convertBtn.addEventListener('click', convertMinutesToSeconds);
});











