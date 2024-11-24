class Duck {
    constructor(name, color, age, weight, image) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.image = image;
    }

    show() {
        const popup = document.getElementById('popup');
        const output = document.getElementById('popupOutput');
        output.innerHTML = `
            <p>Name: ${this.name}</p>
            <p>Color: ${this.color}</p>
            <p>Age: ${this.age}</p>
            <p>Weight: ${this.weight}</p>
            <p>Image: <img src="${this.image}" alt="Duck Image" width="100"></p>`
        ;
        popup.style.display = 'flex'; 
        document.getElementById('duckForm').reset();
    }

    quack() {
        let times = Math.floor((this.age * this.weight) / 2);
        const popup = document.getElementById('popup');
        const output = document.getElementById('popupOutput');
        output.innerHTML = '';
        for (let i = 0; i < times; i++) {
            let p = document.createElement('p');
            p.style.display = "inline-block";
            p.textContent = "Quack";
            output.appendChild(p);
        }

        let audio = new Audio('quack.mp3');
        let playCount = 0;
        audio.addEventListener('ended', function () {
            playCount++;
            if (playCount < 3) {
                audio.play();
            }
        });

        audio.play();
        popup.style.display = 'flex'; 
        document.getElementById('duckForm').reset();
    }
}

let duck;

document.getElementById('duckForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const image = document.getElementById('image').value;

    duck = new Duck(name, color, age, weight, image);
    alert('You creat a new duck!');
    document.getElementById('buttons').style.display = 'block';
    document.getElementById('submit').style.display = 'none';
});

document.getElementById('showButton').addEventListener('click', function () {
    duck.show();
});

document.getElementById('quackButton').addEventListener('click', function () {
    duck.quack();
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none'; 
});


