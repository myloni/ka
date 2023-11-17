let count = 0;

const clicker = document.getElementById('clicker');
const countDisplay = document.getElementById('count');

clicker.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});
