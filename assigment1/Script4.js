class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        return '(' + this.x + ',' + this.y + ')';
    }
    Equals(p) {
        return this.x === p.x && this.y === p.y;
    }
    distanceTo(p) {
        return Math.sqrt(Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2));
    }
}

function findPoint(pointsArray, x, y) {
    for (let i = 0; i < pointsArray.length; i++) {
        if (pointsArray[i].Equals(new Point(x, y))) {
            return true;
        }
    }
    return false;
}

function isPointInArray(pointsArray, point) {
    for (let i = 0; i < pointsArray.length; i++) {
        if (pointsArray[i].Equals(point)) {
            return true;
        }
    }
    return false;
}

function showExampleTrue() {
    const canvas = document.getElementById("pathCanvas");
    canvas.style.display = 'none';
    let pointsArray = [
        new Point(1, 2),
        new Point(3, 4),
        new Point(5, 6)
    ];

    let x = 3;
    let y = 4;

    let result = findPoint(pointsArray, x, y);
    let outputDiv = document.getElementById("output");

    outputDiv.innerHTML = `
        <p><strong>Search for Exact Point</strong></p>
        <p>Points Array: [(${pointsArray[0].x}, ${pointsArray[0].y}), (${pointsArray[1].x}, ${pointsArray[1].y}), (${pointsArray[2].x}, ${pointsArray[2].y})]</p>
        <p>Searching for point: (${x}, ${y})</p>
        <p>Result: ${result ? "Match Found!" : "No Match Found!"}</p>
    `;
}

function showExampleFalse() {
    const canvas = document.getElementById("pathCanvas");
    canvas.style.display = 'none';
    let pointsArray = [
        new Point(1, 2),
        new Point(3, 4),
        new Point(5, 6)
    ];

    let x = 7;
    let y = 8;

    let result = findPoint(pointsArray, x, y);
    let outputDiv = document.getElementById("output");

    outputDiv.innerHTML = `
        <p><strong>Search for Exact Point (No Match)</strong></p>
        <p>Points Array: [(${pointsArray[0].x}, ${pointsArray[0].y}), (${pointsArray[1].x}, ${pointsArray[1].y}), (${pointsArray[2].x}, ${pointsArray[2].y})]</p>
        <p>Searching for point: (${x}, ${y})</p>
        <p>Result: ${result ? "Match Found!" : "No Match Found!"}</p>
    `;
}

function showArrayExampleTrue() {
    const canvas = document.getElementById("pathCanvas");
    canvas.style.display = 'none';
    let pointsArray = [
        new Point(1, 2),
        new Point(3, 4),
        new Point(5, 6)
    ];

    let pointToFind = new Point(3, 4);

    let result = isPointInArray(pointsArray, pointToFind);
    let outputDiv = document.getElementById("output");

    outputDiv.innerHTML = `
        <p><strong>Search for Point by Coordinates</strong></p>
        <p>Points Array: [(${pointsArray[0].x}, ${pointsArray[0].y}), (${pointsArray[1].x}, ${pointsArray[1].y}), (${pointsArray[2].x}, ${pointsArray[2].y})]</p>
        <p>Searching for point: (x=${pointToFind.x}, y=${pointToFind.y})</p>
        <p>Result: ${result ? "Match Found!" : "No Match Found!"}</p>
    `;
}

function showArrayExampleFalse() {
    const canvas = document.getElementById("pathCanvas");
    canvas.style.display = 'none';
    let pointsArray = [
        new Point(1, 2),
        new Point(3, 4),
        new Point(5, 6)
    ];

    let pointToFind = new Point(7, 8);

    let result = isPointInArray(pointsArray, pointToFind);
    let outputDiv = document.getElementById("output");

    outputDiv.innerHTML = `
        <p><strong>Search for Point by Coordinates (No Match)</strong></p>
        <p>Points Array: [(${pointsArray[0].x}, ${pointsArray[0].y}), (${pointsArray[1].x}, ${pointsArray[1].y}), (${pointsArray[2].x}, ${pointsArray[2].y})]</p>
        <p>Searching for point: (x=${pointToFind.x}, y=${pointToFind.y})</p>
        <p>Result: ${result ? "Match Found!" : "No Match Found!"}</p>
    `;
}
function calculatePathLength(pointsArray) {
    let totalDistance = 0;

    for (let i = 0; i < pointsArray.length - 1; i++) {
        totalDistance += pointsArray[i].distanceTo(pointsArray[i + 1]);
    }

    return totalDistance;
}

function showPath() {
    let pointsArray = [
        new Point(50, 350),
        new Point(150, 300),
        new Point(250, 200),
        new Point(350, 100),
        new Point(450, 50)
    ];

    const canvas = document.getElementById("pathCanvas");
    canvas.style.display = 'block';
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 350);
    ctx.lineTo(550, 350);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(pointsArray[0].x, pointsArray[0].y);

    let totalDistance = 0;
    for (let i = 1; i < pointsArray.length; i++) {
        totalDistance += pointsArray[i - 1].distanceTo(pointsArray[i]);
        ctx.lineTo(pointsArray[i].x, pointsArray[i].y);
    }
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.stroke();

    pointsArray.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    });

    let outputDiv = document.getElementById("output");

    let pointsList = pointsArray.map(point => `(${point.x}, ${point.y})`).join(", ");

    outputDiv.innerHTML = `
        <p><strong>Path and Total Distance</strong></p>
        <p>Points: ${pointsList}</p>
        <p>Total Distance: ${totalDistance.toFixed(2)} units</p>
        
    `;
}
