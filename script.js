// File: script.js

let countdownInterval;
let targetDate = null;

function updateCountdown() {
    if (!targetDate) return;
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
        document.getElementById('countdown').textContent = "Event Started!";
        clearInterval(countdownInterval);
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

document.getElementById('setBtn').addEventListener('click', () => {
    const eventName = document.getElementById('eventInput').value || "Event Countdown";
    const dateValue = document.getElementById('dateInput').value;
    if (!dateValue) {
        alert("Please select a date and time.");
        return;
    }
    targetDate = new Date(dateValue);
    document.getElementById('event-name').textContent = eventName;
    clearInterval(countdownInterval);
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
});