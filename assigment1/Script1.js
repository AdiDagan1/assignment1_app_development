class Counter {
    constructor(num) {
        this.num = num;
    }

    initialize(num) {
        this.num = num;
    }

    increment() {
        this.num++;
    }

    go() {
        let result = '';
        for (let i = 0; i <= this.num; i++) {
            result += i + ' ';
        }
        return result.trim();
    }
}

     counter = new Counter();
     counterInput = document.getElementById('counterInput');
     startButton = document.getElementById('startButton');
     incrementButton = document.getElementById('incrementButton');
     goButton = document.getElementById('goButton');
    outputContainer = document.getElementById('output');

    startButton.addEventListener('click', () => {
    const value = parseFloat(counterInput.value);
    if (Number.isInteger(value)) {
        counter.initialize(value);
        alert(`Counter initialized to ${value}`);
    } else {
        alert('Please enter a valid integer.');
        counterInput.value = ''; 
    }
});

incrementButton.addEventListener('click', () => {
    counter.increment();
    counterInput.value = counter.num;
});

goButton.addEventListener('click', () => {
    const result = counter.go();
    const paragraph = document.createElement('p');
    paragraph.textContent = `Numbers: ${result}`;
    outputContainer.innerHTML = ''; 
    outputContainer.appendChild(paragraph); 
});
