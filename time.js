function updateTime() {
    const timeElement = document.getElementById('time');
    timeElement.textContent = new Date().toLocaleTimeString('en-US', {hour12: false});
}

updateTime();


setInterval(updateTime, 1000);
