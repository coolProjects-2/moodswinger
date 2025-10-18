
const moodForm = document.getElementById('moodForm');
const moodChart = document.getElementById('moodChart').getContext('2d');
let moodData = [];

moodForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mood = e.target.mood.value;
    const notes = e.target.notes.value;

    const response = await fetch('/api/moods', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mood, notes }),
    });

    const newMood = await response.json();
    moodData.push({ mood: newMood.mood, date: newMood.date });
    updateChart();
    moodForm.reset();
});

async function fetchMoods() {
    const response = await fetch('/api/moods');
    moodData = await response.json();
    updateChart();
}

function updateChart() {
    const labels = moodData.map(mood => new Date(mood.date).toLocaleDateString());
    const data = moodData.map(mood => mood.mood);

    new Chart(moodChart, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Mood Over Time',
                data,
                borderColor: 'rgba(75, 192, 
