function displaySecondsElapsed() {
    const displayElement = document.createElement("h1");
    document.body.appendChild(displayElement);

    let secondsElapsed = 0;

    const interval = setInterval(() => {
        secondsElapsed++;

        const minutesPassed = Math.floor(secondsElapsed / 60)
        const remainingSeconds = secondsElapsed % 60

        if (minutesPassed === 0){
            displayElement.textContent = `${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''} have passed`;
        }else {
            displayElement.textContent = `${minutesPassed} minute${minutesPassed !== 1 ? 's' : ''} and ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''} have passed`;
        }
    }, 1000);

    window.addEventListener("beforeunload", () => {
        clearInterval(interval);
    });
}


displaySecondsElapsed();
