class Clock {
    constructor(hours, minutes, seconds, country) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.country = country;
    }

    ConverToSeconds() {
        return (this.hours * 3600 + this.minutes * 60 + this.seconds);
    }

    Show() {
        let result = '';
        if (this.hours < 10) result = '0' + this.hours + ':';
        else result = this.hours + ':';
        if (this.minutes < 10) result += '0' + this.minutes + ':';
        else result += this.minutes + ':';
        if (this.seconds < 10) result += '0' + this.seconds;
        else result += this.seconds;

        return result;
    }
}

let counter = 0;
let clocks = [];

document.getElementById("clockForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let country = document.getElementById("country").value;
    let hours = parseInt(document.getElementById("hours").value);
    let minutes = parseInt(document.getElementById("minutes").value);
    let seconds = parseInt(document.getElementById("seconds").value);

    if (hours < 0 || hours >= 24) {
        alert("The number for hours must be between 0 and 23.");
        return;
    }

    if (minutes < 0 || minutes >= 60) {
        alert("The number for minutes must be between 0 and 59.");
        return;
    }

    if (seconds < 0 || seconds >= 60) {
        alert("The number for seconds must be between 0 and 59.");
        return;
    }

    let clock = new Clock(hours, minutes, seconds, country);
    clocks.push(clock);
    counter++;

    if (counter === 1) {
        document.getElementById("counterDisplay").style.display = "block"; 
    }

    document.getElementById("counter").innerText = counter;

    if (clocks.length === 5) {
        let clockInfo = document.getElementById("clockInfo");
        document.getElementById("resetButton").style.display = "block";
        document.getElementById("addClockButton").style.display = "none";
        clockInfo.innerHTML = '';
        document.getElementById("counterDisplay").style.display = "none"; 
        clocks.forEach(clock => {
            clockInfo.innerHTML += `
                <p>Country: ${clock.country}</p>
                <p>Time: ${clock.Show()}</p> 
                <p>Time in seconds: ${clock.ConverToSeconds()}</p> 
                <hr>
            `;
        });

    }
});
document.getElementById("resetButton").addEventListener("click", function () {
    let clockInfo = document.getElementById("clockInfo");
    clockInfo.innerHTML = '';
    clocks = [];
    counter = 0;
    document.getElementById("counter").innerText = counter;
    document.getElementById("resetButton").style.display = "none";
    document.getElementById("addClockButton").style.display="block"
    document.getElementById("clockForm").reset(); 
});
